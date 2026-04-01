/* ═══════════════════════════════════════════════════════════════════
   AP Psychology — Exam Simulator
   Single-file React app. Architecture cloned from ApHis.jsx blueprint
   with AP Psychology-specific FRQ types (AAQ + EBQ).
   ═══════════════════════════════════════════════════════════════════ */

import { useState, useEffect, useRef } from "react";
import { ALL_TESTS } from "./data/tests.js";
import { renderVisual } from "./figures/SimFigures.jsx";

/* ── Design Tokens ── */
const C = {
  bg: "#0a1628", mid: "#162a4a", dark: "#060b14",
  g: "#34d399", b: "#60a5fa", r: "#f87171", gold: "#fbbf24",
  white: "#f1f5f9", muted: "#94a3b8", border: "#1e3a5f",
};
const font = "'DM Sans', 'Segoe UI', system-ui, sans-serif";
const gradient = "linear-gradient(135deg, #060b14 0%, #0d1a2d 50%, #081022 100%)";

/* ── Responsive hook ── */
function useMobile() {
  const [m, setM] = useState(window.innerWidth < 640);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 640);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

/* ── Global styles ── */
(() => {
  if (typeof document === "undefined") return;
  if (document.getElementById("ap-psych-global")) return;
  const s = document.createElement("style");
  s.id = "ap-psych-global";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    body{background:${C.bg};color:${C.white};font-family:${font};-webkit-font-smoothing:antialiased}
    ::-webkit-scrollbar{width:6px}
    ::-webkit-scrollbar-track{background:${C.dark}}
    ::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px}
    @keyframes pulse-dot{0%,100%{opacity:1}50%{opacity:.4}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
    @keyframes spin{to{transform:rotate(360deg)}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
  `;
  document.head.appendChild(s);
})();

const noiseBg = (
  <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.02 }}>
    <svg width="100%" height="100%"><filter id="n"><feTurbulence baseFrequency=".65" /></filter><rect width="100%" height="100%" filter="url(#n)" /></svg>
  </div>
);

const backBtn = {
  background: "none", border: `1px solid ${C.border}`, color: C.muted,
  padding: "8px 18px", borderRadius: 8, cursor: "pointer", fontSize: 14,
  fontFamily: font, transition: "all .2s",
};

/* ── Subject Config ── */
const SUBJECT_CONFIG = {
  name: "AP Psychology",
  shortName: "AP Psychology",
  emoji: "\u{1F9E0}",
  hasAudio: false,
  hasConversation: false,
  mcCount: 75,
  mcTime: 90,
  mcWeight: 67,
  aaqCount: 1,
  aaqTime: 25,
  aaqWeight: 16.5,
  ebqCount: 1,
  ebqTime: 45,
  ebqWeight: 16.5,
  totalTime: "2 hours 40 minutes",
};

/* ── Timer ── */
function Timer({ seconds }) {
  const m = Math.floor(seconds / 60), s = seconds % 60;
  const pct = seconds / (SUBJECT_CONFIG.mcTime * 60);
  const col = pct > 0.5 ? C.g : pct > 0.25 ? C.gold : C.r;
  return (
    <span style={{ color: col, fontWeight: 700, fontVariantNumeric: "tabular-nums", animation: pct < 0.25 ? "blink 1s infinite" : "none" }}>
      {m}:{s.toString().padStart(2, "0")}
    </span>
  );
}

/* ── FeedbackBox ── */
function FeedbackBox({ feedback, loading }) {
  if (loading) return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.muted, fontSize: 13, padding: "8px 0" }}>
      <div style={{ width: 16, height: 16, border: `2px solid ${C.b}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin .8s linear infinite" }} />
      Scoring...
    </div>
  );
  if (!feedback) return null;
  return <div style={{ background: `${C.mid}88`, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px", fontSize: 13, color: C.muted, lineHeight: 1.5, marginTop: 6 }}>{feedback}</div>;
}

/* ── Score Calculations ── */
function calcAPScore(mcCorrect, aaqTotal, ebqTotal) {
  const composite = (mcCorrect / 75 * 67) + (aaqTotal / 7 * 16.5) + (ebqTotal / 7 * 16.5);
  if (composite >= 75) return 5;
  if (composite >= 60) return 4;
  if (composite >= 45) return 3;
  if (composite >= 25) return 2;
  return 1;
}

function calcAPScoreFRQOnly(frqEarned, frqPossible) {
  if (!frqPossible) return 1;
  const pct = frqEarned / frqPossible;
  if (pct >= 0.82) return 5;
  if (pct >= 0.67) return 4;
  if (pct >= 0.50) return 3;
  if (pct >= 0.33) return 2;
  return 1;
}

const AP_SCORE_LABELS = { 5: "Extremely Well Qualified", 4: "Well Qualified", 3: "Qualified", 2: "Possibly Qualified", 1: "No Recommendation" };
const AP_SCORE_COLORS = { 5: C.g, 4: "#22d3ee", 3: C.gold, 2: "#fb923c", 1: C.r };

/* ── Study Display (for AAQ) ── */
function StudyDisplay({ study }) {
  const [expanded, setExpanded] = useState({ intro: true, participants: false, method: false, results: true });
  const toggle = (k) => setExpanded(p => ({ ...p, [k]: !p[k] }));
  const sectionStyle = { borderBottom: `1px solid ${C.border}33` };
  const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", cursor: "pointer", color: C.white, fontWeight: 600, fontSize: 14 };
  const bodyStyle = { padding: "0 16px 16px", color: C.muted, fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap" };
  const chevron = (open) => <span style={{ color: C.muted, fontSize: 12, transition: "transform .2s", transform: open ? "rotate(90deg)" : "none" }}>&#9654;</span>;

  return (
    <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
      <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}`, background: `${C.dark}66` }}>
        <div style={{ color: C.gold, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Research Study</div>
        <div style={{ color: C.white, fontSize: 15, fontWeight: 700 }}>{study.title}</div>
        <div style={{ color: C.muted, fontSize: 12, marginTop: 4, fontStyle: "italic" }}>{study.citation}</div>
      </div>

      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggle("intro")}>Introduction {chevron(expanded.intro)}</div>
        {expanded.intro && <div style={bodyStyle}>{study.introduction}</div>}
      </div>
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggle("participants")}>Participants {chevron(expanded.participants)}</div>
        {expanded.participants && <div style={bodyStyle}>{study.participants}</div>}
      </div>
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggle("method")}>Method {chevron(expanded.method)}</div>
        {expanded.method && <div style={bodyStyle}>{study.method}</div>}
      </div>
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggle("results")}>Results and Discussion {chevron(expanded.results)}</div>
        {expanded.results && (
          <div style={bodyStyle}>
            {study.results}
            {study.dataTable && (
              <div style={{ margin: "16px 0", overflowX: "auto" }}>
                <div style={{ color: C.white, fontWeight: 700, fontSize: 13, marginBottom: 8, textAlign: "center" }}>{study.dataTable.title}</div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr>
                      {study.dataTable.headers.map((h, i) => (
                        <th key={i} style={{ color: C.gold, fontWeight: 700, padding: "8px 12px", borderBottom: `2px solid ${C.border}`, textAlign: i === 0 ? "left" : "center" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {study.dataTable.rows.map((row, ri) => (
                      <tr key={ri} style={{ background: ri % 2 === 0 ? "transparent" : `${C.dark}44` }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ color: ci === 0 ? C.white : C.muted, padding: "6px 12px", borderBottom: `1px solid ${C.border}33`, textAlign: ci === 0 ? "left" : "center", fontWeight: ci === 0 ? 600 : 400 }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {study.footnotes && study.footnotes.length > 0 && (
        <div style={{ padding: "12px 16px", borderTop: `1px solid ${C.border}33` }}>
          {study.footnotes.map((fn, i) => (
            <div key={i} style={{ color: C.muted, fontSize: 11, lineHeight: 1.5, marginBottom: 4 }}>
              <sup>{i + 1}</sup> {fn}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── AAQ Task ── */
function AAQTask({ question, answers, onChange }) {
  return (
    <div>
      <StudyDisplay study={question.study} />
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {question.parts.map((part) => (
          <div key={part.letter} style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 10, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.b, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: C.dark, flexShrink: 0 }}>
                {part.letter}
              </div>
              <div style={{ color: C.white, fontSize: 14, lineHeight: 1.5 }}>{part.prompt}</div>
            </div>
            <textarea
              value={answers[part.letter] || ""}
              onChange={(e) => onChange(part.letter, e.target.value)}
              placeholder={`Write your response to Part ${part.letter} here...`}
              rows={4}
              style={{ width: "100%", background: `${C.dark}88`, border: `1px solid ${C.border}`, borderRadius: 8, padding: 12, color: C.white, fontSize: 14, fontFamily: font, resize: "vertical", lineHeight: 1.6, outline: "none" }}
            />
            <div style={{ color: C.muted, fontSize: 11, marginTop: 4, textAlign: "right" }}>
              {(answers[part.letter] || "").trim().split(/\s+/).filter(Boolean).length} words
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── EBQ Task ── */
function EBQTask({ question, answer, onChange }) {
  const [expandedSources, setExpandedSources] = useState({ 1: true, 2: true, 3: true });
  const toggleSource = (n) => setExpandedSources(p => ({ ...p, [n]: !p[n] }));

  return (
    <div>
      <div style={{ background: `${C.mid}88`, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
        <div style={{ color: C.gold, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Topic</div>
        <div style={{ color: C.white, fontSize: 15, fontWeight: 600, marginBottom: 12 }}>{question.topic}</div>
        <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{question.instructions}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
        {question.sources.map((src) => (
          <div key={src.num} style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
            <div
              onClick={() => toggleSource(src.num)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", cursor: "pointer", background: `${C.dark}44` }}
            >
              <div>
                <span style={{ color: C.b, fontWeight: 700, fontSize: 13, marginRight: 8 }}>Source {src.num}</span>
                <span style={{ color: C.white, fontWeight: 600, fontSize: 14 }}>{src.title}</span>
              </div>
              <span style={{ color: C.muted, fontSize: 12, transition: "transform .2s", transform: expandedSources[src.num] ? "rotate(90deg)" : "none" }}>&#9654;</span>
            </div>
            {expandedSources[src.num] && (
              <div style={{ padding: "12px 16px" }}>
                <div style={{ color: C.muted, fontSize: 11, fontStyle: "italic", marginBottom: 8 }}>{src.citation}</div>
                <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.7 }}>{src.summary}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 10, padding: 16 }}>
        <div style={{ color: C.white, fontWeight: 600, fontSize: 14, marginBottom: 10 }}>Your Response</div>
        <textarea
          value={answer || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your response here. Include a defensible claim, evidence from the sources with citations, evidence from your AP Psychology knowledge, and reasoning explaining how your evidence supports your claim..."
          rows={16}
          style={{ width: "100%", background: `${C.dark}88`, border: `1px solid ${C.border}`, borderRadius: 8, padding: 14, color: C.white, fontSize: 14, fontFamily: font, resize: "vertical", lineHeight: 1.7, outline: "none" }}
        />
        <div style={{ color: C.muted, fontSize: 11, marginTop: 4, textAlign: "right" }}>
          {(answer || "").trim().split(/\s+/).filter(Boolean).length} words
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   LANDING SCREEN
   ══════════════════════════════════════════════════════════════ */
function LandingScreen({ onSelect }) {
  const mob = useMobile();
  const [screen, setScreen] = useState("landing");

  const officialTests = ALL_TESTS.filter(t => t.badge === "Official");
  const simTests = ALL_TESTS.filter(t => t.badge !== "Official");

  /* ── Official sub-screen ── */
  if (screen === "home-official") {
    const years = [...new Set(officialTests.map(t => t.id.match(/\d{4}/)?.[0] || "2025"))].sort().reverse();
    return (
      <div style={{ minHeight: "100vh", background: gradient, fontFamily: font, position: "relative" }}>
        {noiseBg}
        <div style={{ maxWidth: 800, margin: "0 auto", padding: mob ? "24px 16px" : "48px 24px", position: "relative", zIndex: 1 }}>
          <button onClick={() => setScreen("landing")} style={backBtn}>&larr; Back</button>
          <h2 style={{ color: C.white, fontSize: 24, fontWeight: 700, marginTop: 24, marginBottom: 8 }}>Official College Board Exams</h2>
          <p style={{ color: C.muted, fontSize: 14, marginBottom: 24 }}>Free-response questions from official AP Psychology exams. These are FRQ-only (no multiple choice).</p>
          {years.map(y => {
            const yTests = officialTests.filter(t => t.id.includes(y));
            if (!yTests.length) return null;
            return (
              <div key={y} style={{ marginBottom: 24 }}>
                <h3 style={{ color: C.gold, fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{y}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {yTests.map(t => (
                    <button key={t.id} onClick={() => onSelect(t)}
                      style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", fontFamily: font, transition: "all .2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = C.b; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ background: `${C.gold}22`, color: C.gold, fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>Official</span>
                        <span style={{ color: C.white, fontWeight: 600, fontSize: 15 }}>{t.title}</span>
                      </div>
                      <div style={{ color: C.muted, fontSize: 13, marginTop: 6 }}>FRQ Only — 1 AAQ + 1 EBQ (70 minutes)</div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ── Simulations sub-screen ── */
  if (screen === "home-sim") {
    return (
      <div style={{ minHeight: "100vh", background: gradient, fontFamily: font, position: "relative" }}>
        {noiseBg}
        <div style={{ maxWidth: 800, margin: "0 auto", padding: mob ? "24px 16px" : "48px 24px", position: "relative", zIndex: 1 }}>
          <button onClick={() => setScreen("landing")} style={backBtn}>&larr; Back</button>
          <h2 style={{ color: C.white, fontSize: 24, fontWeight: 700, marginTop: 24, marginBottom: 8 }}>Full Exam Simulations</h2>
          <p style={{ color: C.muted, fontSize: 14, marginBottom: 24 }}>Complete practice exams: 75 MC questions + 1 AAQ + 1 EBQ, timed to match the real AP exam.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {simTests.map(t => (
              <button key={t.id} onClick={() => onSelect(t)}
                style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", fontFamily: font, transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.g; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ background: `${C.g}22`, color: C.g, fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>Sim</span>
                  <span style={{ color: C.white, fontWeight: 600, fontSize: 15 }}>{t.title}</span>
                </div>
                <div style={{ color: C.muted, fontSize: 13, marginTop: 6 }}>Full Exam — 75 MC (90 min) + AAQ (25 min) + EBQ (45 min)</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Main Landing ── */
  return (
    <div style={{ minHeight: "100vh", background: gradient, fontFamily: font, position: "relative" }}>
      {noiseBg}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "32px 16px" : "64px 24px", position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48, animation: "fadeUp .6s ease" }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{SUBJECT_CONFIG.emoji}</div>
          <h1 style={{ color: C.white, fontSize: mob ? 28 : 36, fontWeight: 700, marginBottom: 8 }}>{SUBJECT_CONFIG.name}</h1>
          <p style={{ color: C.muted, fontSize: 16 }}>Exam Simulator</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.b}15`, border: `1px solid ${C.b}33`, borderRadius: 20, padding: "6px 16px", marginTop: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.g, animation: "pulse-dot 2s infinite" }} />
            <span style={{ color: C.b, fontSize: 13, fontWeight: 500 }}>2025 Revised Format</span>
          </div>
        </div>

        {/* Exam structure */}
        <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", marginBottom: 32 }}>
          <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}`, background: `${C.dark}44` }}>
            <h3 style={{ color: C.white, fontSize: 16, fontWeight: 700 }}>Exam Structure</h3>
            <p style={{ color: C.muted, fontSize: 13, marginTop: 2 }}>{SUBJECT_CONFIG.totalTime} total</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  {["Section", "Type", "Questions", "Time", "Weight"].map(h => (
                    <th key={h} style={{ color: C.gold, fontWeight: 700, padding: "10px 14px", textAlign: "left" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: `1px solid ${C.border}33` }}>
                  <td style={{ padding: "10px 14px", color: C.white, fontWeight: 600 }}>Section I</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>Multiple Choice</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>75 questions</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>90 minutes</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>~67%</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${C.border}33` }}>
                  <td style={{ padding: "10px 14px", color: C.white, fontWeight: 600 }}>Section II — Q1</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>Article Analysis (AAQ)</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>1 question, 6 parts</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>25 minutes</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>~16.5%</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: C.white, fontWeight: 600 }}>Section II — Q2</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>Evidence-Based (EBQ)</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>1 question, essay</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>45 minutes</td>
                  <td style={{ padding: "10px 14px", color: C.muted }}>~16.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Skills */}
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { icon: "\u{1F52C}", label: "Research Methods", desc: "Experiments, correlations, ethics" },
            { icon: "\u{1F4CA}", label: "Data Interpretation", desc: "Tables, graphs, statistics" },
            { icon: "\u{1F4DD}", label: "Evidence-Based Writing", desc: "Claims, evidence, reasoning" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
              <div style={{ color: C.white, fontWeight: 600, fontSize: 14 }}>{s.label}</div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA cards */}
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 48 }}>
          <button onClick={() => setScreen("home-official")}
            style={{ background: `linear-gradient(135deg, ${C.gold}15, ${C.gold}05)`, border: `1px solid ${C.gold}44`, borderRadius: 16, padding: 24, cursor: "pointer", textAlign: "left", fontFamily: font, transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.gold}44`; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ color: C.gold, fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Official Exams</div>
            <div style={{ color: C.muted, fontSize: 13 }}>College Board FRQs — AAQ + EBQ from real AP exams</div>
            <div style={{ color: C.gold, fontSize: 13, fontWeight: 600, marginTop: 12 }}>{officialTests.length} available &rarr;</div>
          </button>
          <button onClick={() => setScreen("home-sim")}
            style={{ background: `linear-gradient(135deg, ${C.g}15, ${C.g}05)`, border: `1px solid ${C.g}44`, borderRadius: 16, padding: 24, cursor: "pointer", textAlign: "left", fontFamily: font, transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.g; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.g}44`; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{ color: C.g, fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Simulations</div>
            <div style={{ color: C.muted, fontSize: 13 }}>Full practice exams — 75 MC + AAQ + EBQ, AI-scored</div>
            <div style={{ color: C.g, fontSize: 13, fontWeight: 600, marginTop: 12 }}>{simTests.length} available &rarr;</div>
          </button>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", color: C.muted, fontSize: 11, lineHeight: 1.6, paddingBottom: 32 }}>
          <p>AP Psychology is a trademark of the College Board, which was not involved in the production of this simulator.</p>
          <p style={{ marginTop: 4 }}>For educational practice only.</p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   EXAM SCREEN
   ══════════════════════════════════════════════════════════════ */
function ExamScreen({ test, onFinish }) {
  const mob = useMobile();
  const hasMC = test.hasMC && test.mc && test.mc.length > 0;
  const aaq = test.frqs.find(f => f.type === "aaq");
  const ebq = test.frqs.find(f => f.type === "ebq");

  /* Phase: mc -> aaq -> ebq */
  const [phase, setPhase] = useState(hasMC ? "mc" : "aaq");

  /* MC state */
  const [currentMC, setCurrentMC] = useState(1);
  const [mcAnswers, setMcAnswers] = useState({});

  /* AAQ state */
  const [aaqAnswers, setAaqAnswers] = useState({});

  /* EBQ state */
  const [ebqAnswer, setEbqAnswer] = useState("");

  /* Timer */
  const phaseTime = phase === "mc" ? SUBJECT_CONFIG.mcTime * 60 : phase === "aaq" ? SUBJECT_CONFIG.aaqTime * 60 : SUBJECT_CONFIG.ebqTime * 60;
  const [timeLeft, setTimeLeft] = useState(phaseTime);
  useEffect(() => { setTimeLeft(phaseTime); }, [phase]);
  useEffect(() => {
    const iv = setInterval(() => setTimeLeft(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(iv);
  }, [phase]);

  /* Submitted */
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <ResultsScreen
        test={test}
        mcAnswers={mcAnswers}
        aaqAnswers={aaqAnswers}
        ebqAnswer={ebqAnswer}
        onHome={onFinish}
        onRetry={() => { setSubmitted(false); setPhase(hasMC ? "mc" : "aaq"); setCurrentMC(1); setMcAnswers({}); setAaqAnswers({}); setEbqAnswer(""); }}
      />
    );
  }

  const stickyHeader = { position: "sticky", top: 0, zIndex: 10, background: C.dark, borderBottom: `1px solid ${C.border}`, padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 };

  /* ── MC Phase ── */
  if (phase === "mc") {
    const q = test.mc.find(q => q.num === currentMC);
    const set = test.mcSets?.find(s => s.setNum === q?.set);
    const totalMC = test.mc.length;

    return (
      <div style={{ minHeight: "100vh", background: gradient, fontFamily: font }}>
        {noiseBg}
        <div style={stickyHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: C.white, fontWeight: 700, fontSize: 15 }}>Section I: Multiple Choice</span>
            <span style={{ color: C.muted, fontSize: 13 }}>Q{currentMC} of {totalMC}</span>
          </div>
          <Timer seconds={timeLeft} />
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "16px" : "24px" }}>
          {/* Nav grid */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 20 }}>
            {test.mc.map(mq => {
              const answered = mcAnswers[mq.num] != null;
              const isCurrent = mq.num === currentMC;
              return (
                <button key={mq.num} onClick={() => setCurrentMC(mq.num)}
                  style={{ width: 32, height: 32, borderRadius: 6, border: isCurrent ? `2px solid ${C.b}` : `1px solid ${C.border}`, background: answered ? `${C.g}33` : C.mid, color: answered ? C.g : C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: font, display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {mq.num}
                </button>
              );
            })}
          </div>

          {/* Passage */}
          {set && (
            <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
              <div style={{ color: C.gold, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{set.title}</div>
              <div style={{ color: C.muted, fontSize: 13, lineHeight: 1.7 }}>{set.passage}</div>
              {set.figureId && test.figures && (
                <div style={{ marginTop: 12 }}>{renderVisual(set.figureId, test.figures)}</div>
              )}
            </div>
          )}

          {/* Question */}
          {q && (
            <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, padding: 20 }}>
              <div style={{ color: C.white, fontSize: 15, fontWeight: 600, lineHeight: 1.6, marginBottom: 16 }}>
                {q.num}. {q.stem}
              </div>
              {q.figureId && test.figures && (
                <div style={{ marginBottom: 12 }}>{renderVisual(q.figureId, test.figures)}</div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[0, 1, 2, 3].map(i => {
                  const letter = q.choices[i * 2];
                  const text = q.choices[i * 2 + 1];
                  const selected = mcAnswers[q.num] === letter;
                  return (
                    <button key={letter} onClick={() => setMcAnswers(p => ({ ...p, [q.num]: letter }))}
                      style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", background: selected ? `${C.b}22` : `${C.dark}44`, border: `1px solid ${selected ? C.b : C.border}`, borderRadius: 10, cursor: "pointer", fontFamily: font, textAlign: "left", transition: "all .15s" }}
                    >
                      <div style={{ width: 28, height: 28, borderRadius: "50%", border: `2px solid ${selected ? C.b : C.border}`, background: selected ? C.b : "transparent", color: selected ? C.dark : C.muted, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                        {letter}
                      </div>
                      <div style={{ color: C.white, fontSize: 14, lineHeight: 1.5, paddingTop: 3 }}>{text}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Nav buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
            <button onClick={() => setCurrentMC(c => Math.max(1, c - 1))} disabled={currentMC === 1}
              style={{ ...backBtn, opacity: currentMC === 1 ? 0.4 : 1 }}>&larr; Previous</button>
            {currentMC < totalMC ? (
              <button onClick={() => setCurrentMC(c => c + 1)}
                style={{ background: C.b, color: C.dark, border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, fontFamily: font }}>
                Next &rarr;
              </button>
            ) : (
              <button onClick={() => setPhase("aaq")}
                style={{ background: C.g, color: C.dark, border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14, fontFamily: font }}>
                Proceed to AAQ &rarr;
              </button>
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <button onClick={() => setPhase("aaq")} style={{ background: "none", border: "none", color: C.muted, fontSize: 12, cursor: "pointer", fontFamily: font, textDecoration: "underline" }}>
              Skip to Free Response &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── AAQ Phase ── */
  if (phase === "aaq" && aaq) {
    return (
      <div style={{ minHeight: "100vh", background: gradient, fontFamily: font }}>
        {noiseBg}
        <div style={stickyHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: C.white, fontWeight: 700, fontSize: 15 }}>Section II — Q1: Article Analysis Question</span>
            <span style={{ color: C.muted, fontSize: 13 }}>7 points</span>
          </div>
          <Timer seconds={timeLeft} />
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "16px" : "24px" }}>
          <AAQTask question={aaq} answers={aaqAnswers} onChange={(letter, val) => setAaqAnswers(p => ({ ...p, [letter]: val }))} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
            {hasMC && <button onClick={() => setPhase("mc")} style={backBtn}>&larr; Back to MC</button>}
            <button onClick={() => setPhase("ebq")}
              style={{ background: C.g, color: C.dark, border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14, fontFamily: font, marginLeft: "auto" }}>
              Proceed to EBQ &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── EBQ Phase ── */
  if (phase === "ebq" && ebq) {
    return (
      <div style={{ minHeight: "100vh", background: gradient, fontFamily: font }}>
        {noiseBg}
        <div style={stickyHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: C.white, fontWeight: 700, fontSize: 15 }}>Section II — Q2: Evidence-Based Question</span>
            <span style={{ color: C.muted, fontSize: 13 }}>7 points</span>
          </div>
          <Timer seconds={timeLeft} />
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "16px" : "24px" }}>
          <EBQTask question={ebq} answer={ebqAnswer} onChange={setEbqAnswer} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
            <button onClick={() => setPhase("aaq")} style={backBtn}>&larr; Back to AAQ</button>
            <button onClick={handleSubmit}
              style={{ background: `linear-gradient(135deg, ${C.g}, #059669)`, color: C.dark, border: "none", padding: "12px 32px", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 15, fontFamily: font, boxShadow: `0 4px 20px ${C.g}33` }}>
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ══════════════════════════════════════════════════════════════
   RESULTS SCREEN
   ══════════════════════════════════════════════════════════════ */
function ResultsScreen({ test, mcAnswers, aaqAnswers, ebqAnswer, onHome, onRetry }) {
  const mob = useMobile();
  const hasMC = test.hasMC && test.mc && test.mc.length > 0;
  const aaq = test.frqs.find(f => f.type === "aaq");
  const ebq = test.frqs.find(f => f.type === "ebq");

  const [aiScores, setAiScores] = useState({});
  const [aiFeedback, setAiFeedback] = useState({});
  const [loadingKeys, setLoadingKeys] = useState({});
  const [manualScores, setManualScores] = useState({});

  /* Auto-expand all FRQ sections so feedback is visible */
  const buildDefaultExpanded = () => {
    const exp = { "ebq-detail": true };
    if (aaq) aaq.parts.forEach(p => { exp[`aaq-${p.letter}`] = true; });
    return exp;
  };
  const [expanded, setExpanded] = useState(buildDefaultExpanded);

  const getScore = (key, fallback = 0) => manualScores[key] != null ? manualScores[key] : (aiScores[key] != null ? aiScores[key] : fallback);

  /* MC scoring */
  const mcCorrect = hasMC ? test.mc.filter(q => mcAnswers[q.num] === q.answer).length : 0;

  /* FRQ scoring */
  const aaqEarned = aaq ? aaq.parts.reduce((sum, part) => {
    const key = `aaq-${part.letter}`;
    const maxPts = aaq.rubric.find(r => r.row === part.letter)?.points || 1;
    return sum + Math.min(getScore(key), maxPts);
  }, 0) : 0;
  const ebqEarned = getScore("ebq-total", 0);

  const frqEarned = aaqEarned + ebqEarned;
  const frqPossible = (aaq ? aaq.points : 0) + (ebq ? ebq.points : 0);

  const apScore = hasMC ? calcAPScore(mcCorrect, aaqEarned, ebqEarned) : calcAPScoreFRQOnly(frqEarned, frqPossible);
  const apColor = AP_SCORE_COLORS[apScore];
  const apLabel = AP_SCORE_LABELS[apScore];

  /* AI Scoring */
  const fetchScoreAndFeedback = async (key, systemPrompt, userPrompt, maxPts) => {
    setLoadingKeys(p => ({ ...p, [key]: true }));
    try {
      const res = await fetch("https://ap-gov-simulator-production-edc0.up.railway.app/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemPrompt, userPrompt }),
      });
      const data = await res.json();
      let score = 0, feedback = "";
      if (data.score != null) {
        score = Math.max(0, Math.min(maxPts, Math.round(Number(data.score))));
        feedback = data.feedback || "";
      } else if (typeof data === "string") {
        const m = data.match(/\{[\s\S]*\}/);
        if (m) {
          const parsed = JSON.parse(m[0]);
          score = Math.max(0, Math.min(maxPts, Math.round(Number(parsed.score))));
          feedback = parsed.feedback || "";
        }
      }
      setAiScores(p => ({ ...p, [key]: score }));
      setAiFeedback(p => ({ ...p, [key]: feedback }));
    } catch (e) {
      setAiFeedback(p => ({ ...p, [key]: "Scoring unavailable." }));
    }
    setLoadingKeys(p => ({ ...p, [key]: false }));
  };

  /* Auto-score on mount */
  const scored = useRef(false);
  useEffect(() => {
    if (scored.current) return;
    scored.current = true;

    const tasks = [];

    /* AAQ scoring */
    if (aaq) {
      aaq.parts.forEach((part) => {
        const response = aaqAnswers[part.letter] || "";
        if (!response.trim()) return;
        const rubricItem = aaq.rubric.find(r => r.row === part.letter);
        const maxPts = rubricItem?.points || 1;
        const key = `aaq-${part.letter}`;
        const sys = `You are an expert AP Psychology exam grader specializing in Article Analysis Questions (AAQ). Evaluate the student's response to Part ${part.letter} against the rubric. The study is about: ${aaq.study.title}. Rubric: ${rubricItem?.description || ""}. Maximum points: ${maxPts}. Return ONLY valid JSON: {"score": <integer 0-${maxPts}>, "feedback": "<2-3 sentence feedback>"}`;
        const usr = `Part ${part.letter} prompt: ${part.prompt}\n\nStudent response: ${response}`;
        tasks.push({ key, sys, usr, maxPts });
      });
    }

    /* EBQ scoring */
    if (ebq && ebqAnswer.trim()) {
      const sys = `You are an expert AP Psychology exam grader specializing in Evidence-Based Questions (EBQ). Evaluate the student's essay against the full EBQ rubric (7 points total). Topic: ${ebq.topic}. Score: Claim (0-1), Evidence from Sources (0-2), Evidence from AP Knowledge (0-2), Reasoning (0-2). Return ONLY valid JSON: {"score": <integer 0-7>, "feedback": "<3-5 sentence feedback>"}`;
      const usr = `Topic: ${ebq.topic}\n\nSources provided:\n${ebq.sources.map(s => `Source ${s.num}: ${s.title} - ${s.summary.slice(0, 200)}...`).join("\n")}\n\nStudent essay:\n${ebqAnswer}`;
      tasks.push({ key: "ebq-total", sys, usr, maxPts: 7 });
    }

    /* Fire scoring tasks with staggered delays */
    tasks.forEach((t, i) => {
      setTimeout(() => fetchScoreAndFeedback(t.key, t.sys, t.usr, t.maxPts), i * 400);
    });
  }, []);

  const toggleExpand = (key) => setExpanded(p => ({ ...p, [key]: !p[key] }));

  return (
    <div style={{ minHeight: "100vh", background: gradient, fontFamily: font }}>
      {noiseBg}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "24px 16px" : "48px 24px", position: "relative", zIndex: 1 }}>
        {/* Score card */}
        <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 20, padding: mob ? 24 : 32, marginBottom: 32, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: C.muted, marginBottom: 12 }}>Your Estimated AP Score</div>
          <div style={{ width: 100, height: 100, borderRadius: "50%", border: `4px solid ${apColor}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", background: `${apColor}15` }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: apColor }}>{apScore}</span>
          </div>
          <div style={{ color: apColor, fontWeight: 600, fontSize: 16, marginBottom: 16 }}>{apLabel}</div>

          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
            {hasMC && (
              <div>
                <div style={{ color: C.muted, fontSize: 12 }}>MC Score</div>
                <div style={{ color: C.white, fontWeight: 700, fontSize: 20 }}>{mcCorrect}/{test.mc.length}</div>
              </div>
            )}
            <div>
              <div style={{ color: C.muted, fontSize: 12 }}>FRQ Score</div>
              <div style={{ color: C.white, fontWeight: 700, fontSize: 20 }}>{frqEarned}/{frqPossible}</div>
            </div>
          </div>

          {/* Per-section breakdown */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {hasMC && (
              <div style={{ background: `${C.dark}66`, borderRadius: 10, padding: "10px 16px", minWidth: 120 }}>
                <div style={{ color: C.muted, fontSize: 11 }}>MC ({SUBJECT_CONFIG.mcWeight}%)</div>
                <div style={{ color: C.b, fontWeight: 700, fontSize: 16 }}>{mcCorrect}/75</div>
              </div>
            )}
            {aaq && (
              <div style={{ background: `${C.dark}66`, borderRadius: 10, padding: "10px 16px", minWidth: 120 }}>
                <div style={{ color: C.muted, fontSize: 11 }}>AAQ ({SUBJECT_CONFIG.aaqWeight}%)</div>
                <div style={{ color: C.gold, fontWeight: 700, fontSize: 16 }}>{aaqEarned}/7</div>
              </div>
            )}
            {ebq && (
              <div style={{ background: `${C.dark}66`, borderRadius: 10, padding: "10px 16px", minWidth: 120 }}>
                <div style={{ color: C.muted, fontSize: 11 }}>EBQ ({SUBJECT_CONFIG.ebqWeight}%)</div>
                <div style={{ color: C.g, fontWeight: 700, fontSize: 16 }}>{ebqEarned}/7</div>
              </div>
            )}
          </div>

          <div style={{ marginTop: 20 }}>
            <button onClick={() => generatePDF({ test, mcAnswers, aaqAnswers, ebqAnswer, mcCorrect, aaqEarned, ebqEarned, apScore, apLabel, aiScores, aiFeedback, manualScores })}
              style={{ background: C.b, color: C.dark, border: "none", padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, fontFamily: font }}>
              Download PDF Report
            </button>
          </div>
        </div>

        {/* AP Score Scale */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} style={{ width: 48, height: 48, borderRadius: 10, background: n === apScore ? AP_SCORE_COLORS[n] : `${C.mid}`, border: `2px solid ${n === apScore ? AP_SCORE_COLORS[n] : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, color: n === apScore ? C.dark : C.muted }}>
              {n}
            </div>
          ))}
        </div>

        {/* MC Review */}
        {hasMC && (
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ color: C.white, fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Multiple Choice Review</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
              {test.mc.map(q => {
                const correct = mcAnswers[q.num] === q.answer;
                const answered = mcAnswers[q.num] != null;
                return (
                  <div key={q.num} style={{ width: 36, height: 36, borderRadius: 8, background: correct ? `${C.g}22` : answered ? `${C.r}22` : `${C.mid}`, border: `1px solid ${correct ? C.g : answered ? C.r : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: correct ? C.g : answered ? C.r : C.muted, cursor: "pointer" }}
                    onClick={() => toggleExpand(`mc-${q.num}`)}
                  >
                    {q.num}
                  </div>
                );
              })}
            </div>

            {test.mc.map(q => {
              if (!expanded[`mc-${q.num}`]) return null;
              const correct = mcAnswers[q.num] === q.answer;
              return (
                <div key={q.num} style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 8, animation: "fadeUp .3s ease" }}>
                  <div style={{ color: C.white, fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{q.num}. {q.stem}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                    {[0, 1, 2, 3].map(i => {
                      const letter = q.choices[i * 2];
                      const text = q.choices[i * 2 + 1];
                      const isCorrect = letter === q.answer;
                      const isSelected = mcAnswers[q.num] === letter;
                      return (
                        <div key={letter} style={{ padding: "8px 12px", borderRadius: 8, border: `1px solid ${isCorrect ? C.g : isSelected ? C.r : C.border}33`, background: isCorrect ? `${C.g}15` : isSelected ? `${C.r}15` : "transparent", fontSize: 13 }}>
                          <span style={{ fontWeight: 700, color: isCorrect ? C.g : isSelected ? C.r : C.muted, marginRight: 6 }}>{letter}</span>
                          <span style={{ color: isCorrect ? C.g : C.muted }}>{text}</span>
                          {isCorrect && <span style={{ marginLeft: 6, fontSize: 10, color: C.g }}>&#10003;</span>}
                          {isSelected && !isCorrect && <span style={{ marginLeft: 6, fontSize: 10, color: C.r }}>&#10007;</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* AAQ Review */}
        {aaq && (
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ color: C.white, fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Article Analysis Question Review</h3>
            <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", background: `${C.dark}44`, borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}
                onClick={() => toggleExpand("aaq-study")}>
                <span style={{ color: C.gold, fontWeight: 600, fontSize: 13 }}>Study: {aaq.study.title}</span>
              </div>
              {expanded["aaq-study"] && (
                <div style={{ padding: 16 }}>
                  <StudyDisplay study={aaq.study} />
                </div>
              )}

              {aaq.parts.map((part) => {
                const key = `aaq-${part.letter}`;
                const rubricItem = aaq.rubric.find(r => r.row === part.letter);
                const maxPts = rubricItem?.points || 1;
                const response = aaqAnswers[part.letter] || "";
                const score = getScore(key);

                return (
                  <div key={part.letter} style={{ borderBottom: `1px solid ${C.border}33` }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", cursor: "pointer" }}
                      onClick={() => toggleExpand(key)}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.b, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, color: C.dark }}>{part.letter}</div>
                        <span style={{ color: C.white, fontWeight: 600, fontSize: 14 }}>Part {part.letter}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: score > 0 ? C.g : C.r, fontWeight: 700, fontSize: 14 }}>{score}/{maxPts}</span>
                        {loadingKeys[key] && <div style={{ width: 14, height: 14, border: `2px solid ${C.b}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin .8s linear infinite" }} />}
                      </div>
                    </div>
                    {expanded[key] && (
                      <div style={{ padding: "0 16px 16px" }}>
                        <div style={{ color: C.muted, fontSize: 13, marginBottom: 8 }}><strong>Prompt:</strong> {part.prompt}</div>
                        <div style={{ background: `${C.dark}66`, borderRadius: 8, padding: 12, marginBottom: 8 }}>
                          <div style={{ color: C.white, fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{response || "(No response)"}</div>
                        </div>
                        <FeedbackBox feedback={aiFeedback[key]} loading={loadingKeys[key]} />
                        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                          <span style={{ color: C.muted, fontSize: 12, marginRight: 4 }}>Override:</span>
                          {Array.from({ length: maxPts + 1 }, (_, n) => (
                            <button key={n} onClick={() => setManualScores(p => ({ ...p, [key]: n }))}
                              style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${manualScores[key] === n ? C.g : C.border}`, background: manualScores[key] === n ? `${C.g}33` : C.mid, color: manualScores[key] === n ? C.g : C.muted, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: font }}>
                              {n}
                            </button>
                          ))}
                        </div>
                        {rubricItem && (
                          <div style={{ marginTop: 8, background: `${C.dark}44`, borderRadius: 8, padding: "8px 12px" }}>
                            <div style={{ color: C.gold, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>Rubric</div>
                            <div style={{ color: C.muted, fontSize: 12, lineHeight: 1.5 }}>{rubricItem.description}</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* EBQ Review */}
        {ebq && (
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ color: C.white, fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Evidence-Based Question Review</h3>
            <div style={{ background: C.mid, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", background: `${C.dark}44`, borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                onClick={() => toggleExpand("ebq-detail")}>
                <span style={{ color: C.white, fontWeight: 600, fontSize: 14 }}>Topic: {ebq.topic}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: ebqEarned > 0 ? C.g : C.r, fontWeight: 700, fontSize: 14 }}>{ebqEarned}/7</span>
                  {loadingKeys["ebq-total"] && <div style={{ width: 14, height: 14, border: `2px solid ${C.b}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin .8s linear infinite" }} />}
                </div>
              </div>
              {expanded["ebq-detail"] && (
                <div style={{ padding: 16 }}>
                  <div style={{ marginBottom: 12 }}>
                    {ebq.sources.map(src => (
                      <div key={src.num} style={{ marginBottom: 8, padding: "8px 12px", background: `${C.dark}44`, borderRadius: 8 }}>
                        <div style={{ color: C.b, fontSize: 12, fontWeight: 700 }}>Source {src.num}: {src.title}</div>
                        <div style={{ color: C.muted, fontSize: 11, fontStyle: "italic" }}>{src.citation}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ color: C.muted, fontSize: 12, marginBottom: 4, fontWeight: 600 }}>Your Essay:</div>
                  <div style={{ background: `${C.dark}66`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: C.white, fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{ebqAnswer || "(No response)"}</div>
                    <div style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>{(ebqAnswer || "").trim().split(/\s+/).filter(Boolean).length} words</div>
                  </div>
                  <FeedbackBox feedback={aiFeedback["ebq-total"]} loading={loadingKeys["ebq-total"]} />
                  <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                    <span style={{ color: C.muted, fontSize: 12, marginRight: 4 }}>Override:</span>
                    {Array.from({ length: 8 }, (_, n) => (
                      <button key={n} onClick={() => setManualScores(p => ({ ...p, "ebq-total": n }))}
                        style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${manualScores["ebq-total"] === n ? C.g : C.border}`, background: manualScores["ebq-total"] === n ? `${C.g}33` : C.mid, color: manualScores["ebq-total"] === n ? C.g : C.muted, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: font }}>
                        {n}
                      </button>
                    ))}
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <div style={{ color: C.gold, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>Rubric Breakdown</div>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr>
                          {["Category", "Points", "Description"].map(h => (
                            <th key={h} style={{ color: C.gold, fontWeight: 700, padding: "6px 10px", borderBottom: `1px solid ${C.border}`, textAlign: "left" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {ebq.rubric.map((r, i) => (
                          <tr key={i} style={{ borderBottom: `1px solid ${C.border}33` }}>
                            <td style={{ padding: "6px 10px", color: C.white, fontWeight: 600 }}>{r.category}</td>
                            <td style={{ padding: "6px 10px", color: C.muted, textAlign: "center" }}>{r.points}</td>
                            <td style={{ padding: "6px 10px", color: C.muted, lineHeight: 1.4 }}>{r.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 32, paddingBottom: 48 }}>
          <button onClick={onRetry} style={{ ...backBtn, borderColor: C.b, color: C.b }}>Retry Exam</button>
          <button onClick={() => generatePDF({ test, mcAnswers, aaqAnswers, ebqAnswer, mcCorrect, aaqEarned, ebqEarned, apScore, apLabel, aiScores, aiFeedback, manualScores })}
            style={{ background: C.b, color: C.dark, border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, fontFamily: font }}>
            Download PDF
          </button>
          <button onClick={onHome} style={{ ...backBtn, borderColor: C.g, color: C.g }}>All Exams</button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   PDF GENERATION
   ══════════════════════════════════════════════════════════════ */
function generatePDF({ test, mcAnswers, aaqAnswers, ebqAnswer, mcCorrect, aaqEarned, ebqEarned, apScore, apLabel, aiScores, aiFeedback, manualScores }) {
  const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const nl2br = (s) => esc(s).replace(/\n/g, "<br/>");
  const getS = (key) => manualScores[key] != null ? manualScores[key] : (aiScores[key] != null ? aiScores[key] : 0);

  const hasMC = test.hasMC && test.mc && test.mc.length > 0;
  const aaq = test.frqs.find(f => f.type === "aaq");
  const ebq = test.frqs.find(f => f.type === "ebq");

  /* MC block */
  let mcHtml = "";
  if (hasMC) {
    mcHtml = `<h2 style="color:#60a5fa;margin-top:40px">Multiple Choice — ${mcCorrect}/${test.mc.length}</h2>`;
    test.mc.forEach(q => {
      const selected = mcAnswers[q.num];
      const correct = q.answer;
      mcHtml += `<div style="margin:12px 0;padding:12px;border:1px solid #1e3a5f;border-radius:8px;background:#0d1a2d">`;
      mcHtml += `<div style="font-weight:600;margin-bottom:8px">${q.num}. ${esc(q.stem)}</div>`;
      for (let i = 0; i < 4; i++) {
        const letter = q.choices[i * 2];
        const text = q.choices[i * 2 + 1];
        const isCorrect = letter === correct;
        const isSelected = letter === selected;
        const bg = isCorrect ? "#34d39922" : isSelected ? "#f8717122" : "transparent";
        const col = isCorrect ? "#34d399" : isSelected ? "#f87171" : "#94a3b8";
        mcHtml += `<div style="padding:4px 8px;margin:2px 0;border-radius:4px;background:${bg};color:${col}"><strong>${letter}</strong> ${esc(text)}`;
        if (isCorrect) mcHtml += ` <span style="color:#34d399">&#10003;</span>`;
        if (isSelected && !isCorrect) mcHtml += ` <span style="color:#f87171">&#10007;</span>`;
        mcHtml += `</div>`;
      }
      mcHtml += `</div>`;
    });
  }

  /* AAQ block */
  let aaqHtml = "";
  if (aaq) {
    aaqHtml = `<h2 style="color:#fbbf24;margin-top:40px">Article Analysis Question — ${aaqEarned}/${aaq.points}</h2>`;
    aaqHtml += `<div style="color:#94a3b8;font-size:13px;margin-bottom:12px"><em>${esc(aaq.study.title)}</em></div>`;
    aaq.parts.forEach(part => {
      const response = aaqAnswers[part.letter] || "(No response)";
      const rubric = aaq.rubric.find(r => r.row === part.letter);
      const maxPts = rubric?.points || 1;
      const score = getS(`aaq-${part.letter}`);
      const feedback = aiFeedback[`aaq-${part.letter}`] || "";
      aaqHtml += `<div style="margin:12px 0;padding:12px;border:1px solid #1e3a5f;border-radius:8px;background:#0d1a2d">`;
      aaqHtml += `<div style="font-weight:700;color:#60a5fa;margin-bottom:6px">Part ${part.letter} <span style="color:${score > 0 ? "#34d399" : "#f87171"};float:right">${score}/${maxPts}</span></div>`;
      aaqHtml += `<div style="color:#94a3b8;font-size:13px;margin-bottom:6px">${esc(part.prompt)}</div>`;
      aaqHtml += `<div style="background:#060b14;padding:10px;border-radius:6px;color:#f1f5f9;font-size:13px;line-height:1.6;white-space:pre-wrap">${nl2br(response)}</div>`;
      if (feedback) aaqHtml += `<div style="margin-top:6px;color:#94a3b8;font-size:12px;font-style:italic">${esc(feedback)}</div>`;
      aaqHtml += `</div>`;
    });
  }

  /* EBQ block */
  let ebqHtml = "";
  if (ebq) {
    const ebqScore = getS("ebq-total");
    const feedback = aiFeedback["ebq-total"] || "";
    ebqHtml = `<h2 style="color:#34d399;margin-top:40px">Evidence-Based Question — ${ebqScore}/${ebq.points}</h2>`;
    ebqHtml += `<div style="color:#94a3b8;font-size:13px;margin-bottom:12px">Topic: ${esc(ebq.topic)}</div>`;
    ebqHtml += `<div style="margin:12px 0;padding:12px;border:1px solid #1e3a5f;border-radius:8px;background:#0d1a2d">`;
    ebqHtml += `<div style="background:#060b14;padding:10px;border-radius:6px;color:#f1f5f9;font-size:13px;line-height:1.7;white-space:pre-wrap">${nl2br(ebqAnswer || "(No response)")}</div>`;
    if (feedback) ebqHtml += `<div style="margin-top:8px;color:#94a3b8;font-size:12px;font-style:italic">${esc(feedback)}</div>`;
    ebqHtml += `</div>`;

    /* Rubric table */
    ebqHtml += `<table style="width:100%;border-collapse:collapse;font-size:12px;margin-top:12px"><thead><tr>`;
    ["Category", "Points", "Description"].forEach(h => { ebqHtml += `<th style="color:#fbbf24;font-weight:700;padding:6px 10px;border-bottom:2px solid #1e3a5f;text-align:left">${h}</th>`; });
    ebqHtml += `</tr></thead><tbody>`;
    ebq.rubric.forEach(r => {
      ebqHtml += `<tr style="border-bottom:1px solid #1e3a5f33"><td style="padding:6px 10px;color:#f1f5f9;font-weight:600">${esc(r.category)}</td><td style="padding:6px 10px;color:#94a3b8;text-align:center">${r.points}</td><td style="padding:6px 10px;color:#94a3b8">${esc(r.description)}</td></tr>`;
    });
    ebqHtml += `</tbody></table>`;
  }

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AP Psychology — Exam Report</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a1628;color:#f1f5f9;font-family:'Inter',system-ui,sans-serif;padding:32px;max-width:900px;margin:0 auto;font-size:14px;line-height:1.5}
@media print{body{background:#fff;color:#000;padding:12px}h2{color:#1e3a8a!important}@page{size:A4;margin:12mm}}
.no-print{text-align:center;margin:32px 0}
.no-print button{background:#60a5fa;color:#060b14;border:none;padding:12px 32px;border-radius:10px;font-weight:700;font-size:16px;cursor:pointer;font-family:inherit}
</style></head><body>
<div style="text-align:center;margin-bottom:32px;padding:32px 0;border-bottom:2px solid #1e3a5f">
<div style="font-size:40px;margin-bottom:8px">\u{1F9E0}</div>
<h1 style="font-size:28px;font-weight:700">AP Psychology — Exam Report</h1>
<div style="color:#94a3b8;font-size:14px;margin-top:4px">${esc(test.title)}</div>
<div style="margin-top:20px;display:inline-flex;align-items:center;gap:24px">
${hasMC ? `<div><div style="color:#94a3b8;font-size:12px">MC Score</div><div style="font-weight:700;font-size:22px">${mcCorrect}/${test.mc.length}</div></div>` : ""}
<div><div style="color:#94a3b8;font-size:12px">FRQ Score</div><div style="font-weight:700;font-size:22px">${aaqEarned + getS("ebq-total")}/${(aaq ? aaq.points : 0) + (ebq ? ebq.points : 0)}</div></div>
<div style="width:80px;height:80px;border-radius:50%;border:4px solid ${AP_SCORE_COLORS[apScore]};display:flex;align-items:center;justify-content:center;background:${AP_SCORE_COLORS[apScore]}22"><span style="font-size:36px;font-weight:700;color:${AP_SCORE_COLORS[apScore]}">${apScore}</span></div>
</div>
<div style="color:${AP_SCORE_COLORS[apScore]};font-weight:600;margin-top:8px">${esc(apLabel)}</div>
</div>
${mcHtml}${aaqHtml}${ebqHtml}
<div style="margin-top:40px;padding-top:16px;border-top:1px solid #1e3a5f;color:#94a3b8;font-size:11px;text-align:center">
<p>AP Psychology is a trademark of the College Board. This report was generated by the AP Psychology Exam Simulator for educational practice only.</p>
</div>
<div class="no-print"><button onclick="window.print()">Print / Save as PDF</button></div>
</body></html>`;

  const w = window.open("", "_blank");
  if (w) {
    w.document.write(html);
    w.document.close();
  } else {
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ap-psychology-exam-report.html";
    a.click();
  }
}

/* ══════════════════════════════════════════════════════════════
   BETA BANNER
   ══════════════════════════════════════════════════════════════ */
function BetaBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, background: "linear-gradient(90deg, #7c3aed, #6366f1)", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, fontSize: 13, fontFamily: font }}>
      <span style={{ background: "#fff2", padding: "2px 8px", borderRadius: 4, fontWeight: 700, fontSize: 11 }}>BETA</span>
      <span style={{ color: "#fff" }}>This simulator is in beta. Report issues to <a href="mailto:apexamsimulator@gmail.com" style={{ color: "#fbbf24", textDecoration: "underline" }}>apexamsimulator@gmail.com</a></span>
      <button onClick={() => setShow(false)} style={{ background: "none", border: "none", color: "#fff8", fontSize: 18, cursor: "pointer", marginLeft: 8 }}>&times;</button>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   APP (root)
   ══════════════════════════════════════════════════════════════ */
export default function App() {
  const [screen, setScreen] = useState("landing");
  const [selectedTest, setSelectedTest] = useState(null);

  return (
    <>
      <BetaBanner />
      <div style={{ paddingTop: 40 }}>
        {screen === "exam" && selectedTest
          ? <ExamScreen test={selectedTest} onFinish={() => { setSelectedTest(null); setScreen("landing"); }} />
          : <LandingScreen onSelect={(t) => { setSelectedTest(t); setScreen("exam"); }} />
        }
      </div>
    </>
  );
}
