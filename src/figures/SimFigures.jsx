import React from "react";

/* ── colour palette (matches App.jsx design tokens) ── */
const P = {
  bg: "#0a1628", mid: "#162a4a", dark: "#060b14",
  b: "#60a5fa", g: "#34d399", r: "#f87171", gold: "#fbbf24",
  white: "#f1f5f9", muted: "#94a3b8", border: "#1e3a5f",
};

/* ── Bar Chart ── */
function BarChart({ title, xLabel, yLabel, data, colors, note }) {
  const maxVal = Math.max(...data.map(d => d.value)) * 1.15;
  const barW = Math.min(60, 220 / data.length);
  const chartH = 200;
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 15, marginBottom: 12, textAlign: "center" }}>{title}</div>}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, position: "relative" }}>
        {yLabel && (
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: P.muted, fontSize: 11, marginRight: 6 }}>{yLabel}</div>
        )}
        <div style={{ flex: 1, position: "relative", height: chartH }}>
          {[0, 0.25, 0.5, 0.75, 1].map(f => (
            <div key={f} style={{ position: "absolute", bottom: `${f * 100}%`, left: 0, right: 0, borderBottom: `1px dashed ${P.border}`, opacity: 0.5 }}>
              <span style={{ position: "absolute", left: -36, bottom: -6, color: P.muted, fontSize: 10, width: 32, textAlign: "right" }}>
                {Math.round(maxVal * f)}
              </span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: Math.max(8, 24 - data.length * 2), height: "100%", position: "relative", zIndex: 1, paddingLeft: 4 }}>
            {data.map((d, i) => {
              const h = (d.value / maxVal) * chartH;
              const col = colors ? colors[i % colors.length] : [P.b, P.g, P.gold, P.r][i % 4];
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ color: P.white, fontSize: 11, fontWeight: 600 }}>{d.value}{d.suffix || ""}</div>
                  <div style={{ width: barW, height: h, background: `linear-gradient(180deg, ${col}, ${col}88)`, borderRadius: "6px 6px 0 0", transition: "height .4s" }} />
                  <div style={{ color: P.muted, fontSize: 10, textAlign: "center", maxWidth: barW + 20, wordBreak: "break-word" }}>{d.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {xLabel && <div style={{ color: P.muted, fontSize: 11, textAlign: "center", marginTop: 8 }}>{xLabel}</div>}
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Grouped Bar Chart (e.g., two bar types per group) ── */
function GroupedBarChart({ title, xLabel, yLabel, groups, legendLabels, colors, note }) {
  const allVals = groups.flatMap(g => g.values);
  const maxVal = Math.max(...allVals) * 1.15;
  const chartH = 200;
  const barW = 28;
  const cols = colors || [P.gold, P.b, P.g, P.r];
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 15, marginBottom: 4, textAlign: "center" }}>{title}</div>}
      {legendLabels && (
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 12 }}>
          {legendLabels.map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: cols[i % cols.length] }} />
              <span style={{ color: P.muted, fontSize: 11 }}>{l}</span>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, position: "relative" }}>
        {yLabel && (
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: P.muted, fontSize: 11, marginRight: 6 }}>{yLabel}</div>
        )}
        <div style={{ flex: 1, position: "relative", height: chartH }}>
          {[0, 0.25, 0.5, 0.75, 1].map(f => (
            <div key={f} style={{ position: "absolute", bottom: `${f * 100}%`, left: 0, right: 0, borderBottom: `1px dashed ${P.border}`, opacity: 0.5 }}>
              <span style={{ position: "absolute", left: -36, bottom: -6, color: P.muted, fontSize: 10, width: 32, textAlign: "right" }}>
                {Math.round(maxVal * f)}
              </span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 24, height: "100%", position: "relative", zIndex: 1 }}>
            {groups.map((g, gi) => (
              <div key={gi} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                  {g.values.map((v, vi) => {
                    const h = (v / maxVal) * chartH;
                    return (
                      <div key={vi} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <div style={{ color: P.white, fontSize: 10, fontWeight: 600 }}>{v}{g.suffix || ""}</div>
                        <div style={{ width: barW, height: h, background: `linear-gradient(180deg, ${cols[vi % cols.length]}, ${cols[vi % cols.length]}88)`, borderRadius: "5px 5px 0 0" }} />
                      </div>
                    );
                  })}
                </div>
                <div style={{ color: P.muted, fontSize: 10, textAlign: "center", marginTop: 4 }}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {xLabel && <div style={{ color: P.muted, fontSize: 11, textAlign: "center", marginTop: 8 }}>{xLabel}</div>}
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Data Table ── */
function DataTable({ title, headers, rows, note }) {
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "16px 20px", margin: "16px 0", overflowX: "auto" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 14, marginBottom: 10, textAlign: "center" }}>{title}</div>}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ color: P.gold, fontWeight: 700, padding: "8px 12px", borderBottom: `2px solid ${P.border}`, textAlign: i === 0 ? "left" : "center", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "transparent" : `${P.dark}44` }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ color: ci === 0 ? P.white : P.muted, padding: "6px 12px", borderBottom: `1px solid ${P.border}33`, textAlign: ci === 0 ? "left" : "center", fontWeight: ci === 0 ? 600 : 400 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Scatter Plot ── */
function ScatterPlot({ title, xLabel, yLabel, points, note }) {
  const xs = points.map(p => p.x), ys = points.map(p => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const rangeX = maxX - minX || 1, rangeY = maxY - minY || 1;
  const W = 300, H = 200;
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 15, marginBottom: 12, textAlign: "center" }}>{title}</div>}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {yLabel && <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: P.muted, fontSize: 11, marginRight: 8 }}>{yLabel}</div>}
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W }}>
          <line x1={40} y1={H - 30} x2={W - 10} y2={H - 30} stroke={P.border} strokeWidth={1} />
          <line x1={40} y1={10} x2={40} y2={H - 30} stroke={P.border} strokeWidth={1} />
          {points.map((p, i) => {
            const cx = 40 + ((p.x - minX) / rangeX) * (W - 60);
            const cy = H - 30 - ((p.y - minY) / rangeY) * (H - 50);
            return <circle key={i} cx={cx} cy={cy} r={5} fill={p.color || P.b} opacity={0.8} />;
          })}
        </svg>
      </div>
      {xLabel && <div style={{ color: P.muted, fontSize: 11, textAlign: "center", marginTop: 4 }}>{xLabel}</div>}
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Normal Distribution Curve ── */
function NormalCurve({ title, mean, sd, highlights, note }) {
  const W = 320, H = 160, pad = 40;
  const lo = mean - 3.5 * sd, hi = mean + 3.5 * sd;
  const gauss = x => Math.exp(-0.5 * ((x - mean) / sd) ** 2);
  const pts = [];
  for (let i = 0; i <= 100; i++) {
    const x = lo + (i / 100) * (hi - lo);
    const sx = pad + (i / 100) * (W - 2 * pad);
    const sy = H - 30 - gauss(x) * (H - 50);
    pts.push(`${i === 0 ? "M" : "L"}${sx},${sy}`);
  }
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 15, marginBottom: 12, textAlign: "center" }}>{title}</div>}
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W }}>
        <line x1={pad} y1={H - 30} x2={W - pad} y2={H - 30} stroke={P.border} strokeWidth={1} />
        <path d={pts.join(" ")} fill="none" stroke={P.b} strokeWidth={2} />
        {[-3, -2, -1, 0, 1, 2, 3].map(z => {
          const x = pad + ((mean + z * sd - lo) / (hi - lo)) * (W - 2 * pad);
          return (
            <g key={z}>
              <line x1={x} y1={H - 30} x2={x} y2={H - 26} stroke={P.muted} strokeWidth={1} />
              <text x={x} y={H - 14} fill={P.muted} fontSize={9} textAnchor="middle">{z === 0 ? mean : (mean + z * sd).toFixed(0)}</text>
            </g>
          );
        })}
        {(highlights || []).map((h, i) => {
          const x = pad + ((h.value - lo) / (hi - lo)) * (W - 2 * pad);
          const y = H - 30 - gauss(h.value) * (H - 50);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={4} fill={h.color || P.r} />
              <text x={x} y={y - 8} fill={h.color || P.r} fontSize={9} textAnchor="middle">{h.label}</text>
            </g>
          );
        })}
      </svg>
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Pie Chart ── */
function PieChart({ title, slices, note }) {
  const total = slices.reduce((s, sl) => s + sl.value, 0);
  const R = 80, cx = 100, cy = 100;
  let angle = -Math.PI / 2;
  const cols = [P.b, P.g, P.gold, P.r, "#a78bfa", "#fb923c"];
  const paths = slices.map((sl, i) => {
    const frac = sl.value / total;
    const start = angle;
    angle += frac * 2 * Math.PI;
    const end = angle;
    const large = frac > 0.5 ? 1 : 0;
    const x1 = cx + R * Math.cos(start), y1 = cy + R * Math.sin(start);
    const x2 = cx + R * Math.cos(end), y2 = cy + R * Math.sin(end);
    return { d: `M${cx},${cy} L${x1},${y1} A${R},${R} 0 ${large} 1 ${x2},${y2} Z`, color: sl.color || cols[i % cols.length], label: sl.label, pct: (frac * 100).toFixed(0) };
  });
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 15, marginBottom: 12, textAlign: "center" }}>{title}</div>}
      <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
        <svg viewBox="0 0 200 200" style={{ width: 160, height: 160 }}>
          {paths.map((p, i) => <path key={i} d={p.d} fill={p.color} stroke={P.bg} strokeWidth={2} />)}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {paths.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: p.color }} />
              <span style={{ color: P.muted, fontSize: 12 }}>{p.label} ({p.pct}%)</span>
            </div>
          ))}
        </div>
      </div>
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Line Chart ── */
function LineChart({ title, xLabel, yLabel, series, xLabels, note }) {
  const allVals = series.flatMap(s => s.data);
  const maxVal = Math.max(...allVals) * 1.15;
  const W = 320, H = 200, pad = 50;
  const cols = [P.b, P.g, P.gold, P.r];
  return (
    <div style={{ background: P.mid, borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
      {title && <div style={{ color: P.white, fontWeight: 700, fontSize: 15, marginBottom: 12, textAlign: "center" }}>{title}</div>}
      {series.length > 1 && (
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 8 }}>
          {series.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 16, height: 3, background: s.color || cols[i % cols.length], borderRadius: 2 }} />
              <span style={{ color: P.muted, fontSize: 11 }}>{s.label}</span>
            </div>
          ))}
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W }}>
        <line x1={pad} y1={H - 30} x2={W - 10} y2={H - 30} stroke={P.border} strokeWidth={1} />
        <line x1={pad} y1={10} x2={pad} y2={H - 30} stroke={P.border} strokeWidth={1} />
        {series.map((s, si) => {
          const col = s.color || cols[si % cols.length];
          const n = s.data.length;
          const pts = s.data.map((v, i) => {
            const x = pad + (i / (n - 1)) * (W - pad - 20);
            const y = H - 30 - (v / maxVal) * (H - 50);
            return `${x},${y}`;
          });
          return (
            <g key={si}>
              <polyline points={pts.join(" ")} fill="none" stroke={col} strokeWidth={2} />
              {s.data.map((v, i) => {
                const x = pad + (i / (n - 1)) * (W - pad - 20);
                const y = H - 30 - (v / maxVal) * (H - 50);
                return <circle key={i} cx={x} cy={y} r={3} fill={col} />;
              })}
            </g>
          );
        })}
        {xLabels && xLabels.map((l, i) => {
          const x = pad + (i / (xLabels.length - 1)) * (W - pad - 20);
          return <text key={i} x={x} y={H - 14} fill={P.muted} fontSize={9} textAnchor="middle">{l}</text>;
        })}
      </svg>
      {xLabel && <div style={{ color: P.muted, fontSize: 11, textAlign: "center" }}>{xLabel}</div>}
      {note && <div style={{ color: P.muted, fontSize: 10, marginTop: 8, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

/* ── Master dispatcher ── */
export function renderVisual(figureId, figures) {
  if (!figureId || !figures) return null;
  const fig = figures[figureId];
  if (!fig) return null;
  switch (fig.type) {
    case "bar": return <BarChart {...fig} />;
    case "groupedBar": return <GroupedBarChart {...fig} />;
    case "table": return <DataTable {...fig} />;
    case "scatter": return <ScatterPlot {...fig} />;
    case "normalCurve": return <NormalCurve {...fig} />;
    case "pie": return <PieChart {...fig} />;
    case "line": return <LineChart {...fig} />;
    default: return null;
  }
}
