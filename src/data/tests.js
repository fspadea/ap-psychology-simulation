/* ═══════════════════════════════════════════════════════════════════
   AP Psychology — Test Data
   Format: ALL_TESTS array of test objects
   MC choices: interleaved ["A","text","B","text","C","text","D","text"]
   Answer distribution for 75 Qs: 19A + 19B + 19C + 18D
   ═══════════════════════════════════════════════════════════════════ */

/* ── Figures ── */
const SIM1_FIGURES = {
  "sim1-fig1": {
    type: "groupedBar",
    title: "Mean Reaction Time by Sleep Condition",
    xLabel: "Sleep Condition",
    yLabel: "Reaction Time (ms)",
    legendLabels: ["Simple Task", "Complex Task"],
    colors: ["#fbbf24", "#60a5fa"],
    groups: [
      { label: "4 hours", values: [320, 580], suffix: "" },
      { label: "6 hours", values: [280, 450], suffix: "" },
      { label: "8 hours", values: [240, 360], suffix: "" },
    ],
  },
  "sim1-fig2": {
    type: "bar",
    title: "Percentage of Participants Exhibiting Conformity",
    xLabel: "Condition",
    yLabel: "% Conforming",
    data: [
      { label: "Unanimous\nMajority", value: 37 },
      { label: "One\nDissenter", value: 5 },
      { label: "Control\n(Alone)", value: 1 },
    ],
  },
  "sim1-fig3": {
    type: "table",
    title: "Neurotransmitter Functions",
    headers: ["Neurotransmitter", "Primary Function", "Associated Disorder"],
    rows: [
      ["Serotonin", "Mood regulation, sleep", "Depression"],
      ["Dopamine", "Reward, motivation, movement", "Schizophrenia, Parkinson's"],
      ["GABA", "Inhibitory, reduces neural activity", "Anxiety disorders"],
      ["Acetylcholine", "Muscle action, learning, memory", "Alzheimer's disease"],
      ["Norepinephrine", "Alertness, arousal", "PTSD, depression"],
    ],
  },
  "sim1-fig4": {
    type: "bar",
    title: "Mean Number of Words Recalled by Encoding Condition",
    xLabel: "Encoding Condition",
    yLabel: "Words Recalled",
    data: [
      { label: "Structural", value: 4.2 },
      { label: "Phonemic", value: 6.8 },
      { label: "Semantic", value: 11.3 },
    ],
  },
  "sim1-fig5": {
    type: "line",
    title: "Classical Conditioning Acquisition Curve",
    xLabel: "Trial Number",
    yLabel: "Response Strength",
    xLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    series: [
      { label: "Conditioned Response", data: [0.05, 0.15, 0.30, 0.50, 0.65, 0.75, 0.82, 0.86, 0.88, 0.89], color: "#60a5fa" },
    ],
  },
};

/* ── MC Passage Sets ── */
const SIM1_MC_SETS = [
  /* ── Set 1: Biological Bases of Behavior (Qs 1-15) ── */
  {
    id: "sim1-set1",
    setNum: 1,
    title: "Set 1 — Research Study: Sleep Deprivation and Cognitive Performance",
    passage: "Dr. Alvarez conducted an experiment to examine the effects of sleep deprivation on cognitive performance. She recruited 90 college students and randomly assigned them to one of three conditions: 4 hours of sleep, 6 hours of sleep, or 8 hours of sleep per night for five consecutive nights. After the five-night period, all participants completed both a simple reaction-time task and a complex decision-making task. The results showed that participants in the 4-hour condition had significantly slower reaction times on both tasks compared to the 8-hour condition, while the 6-hour condition fell between the two extremes. The differences were more pronounced on the complex task.",
    figureId: "sim1-fig1",
  },
  /* ── Set 2: Cognition (Qs 16-30) ── */
  {
    id: "sim1-set2",
    setNum: 2,
    title: "Set 2 — Research Study: Levels of Processing and Memory",
    passage: "Researchers investigated how different types of encoding affect long-term memory. They randomly assigned 120 participants to one of three conditions. In the structural condition, participants judged whether each word was written in uppercase or lowercase letters. In the phonemic condition, participants judged whether each word rhymed with another word. In the semantic condition, participants judged whether each word fit into a given sentence. After a 24-hour delay, all participants completed a surprise free-recall test. The results showed that semantic processing led to significantly better recall than both structural and phonemic processing.",
    figureId: "sim1-fig4",
  },
  /* ── Set 3: Development & Learning (Qs 31-45) ── */
  {
    id: "sim1-set3",
    setNum: 3,
    title: "Set 3 — Research Study: Classical Conditioning of Fear Responses",
    passage: "A team of researchers studied classical conditioning of mild fear responses in a controlled laboratory setting. Participants were exposed to a neutral tone (conditioned stimulus) paired with a brief, startling burst of white noise (unconditioned stimulus). Over 10 trials, the researchers measured galvanic skin response (GSR) as an indicator of fear arousal. They found that participants showed increasing GSR to the tone alone across the first 7 trials, after which the response plateaued. In an extinction phase, the tone was presented without the noise for 10 additional trials, and GSR gradually decreased. A follow-up session one week later showed spontaneous recovery of the conditioned response.",
    figureId: "sim1-fig5",
  },
  /* ── Set 4: Social Psychology & Personality (Qs 46-60) ── */
  {
    id: "sim1-set4",
    setNum: 4,
    title: "Set 4 — Research Study: Conformity and Group Pressure",
    passage: "A social psychologist replicated a classic conformity study. Participants were placed in groups of 8, where 7 were confederates. The group was asked to judge which of three comparison lines matched a standard line. On critical trials, confederates unanimously chose an obviously incorrect answer. The researcher varied the conditions: in the unanimous condition, all confederates gave the wrong answer; in the dissenter condition, one confederate gave the correct answer. Results showed that 37% of participants conformed on critical trials in the unanimous condition, but only 5% conformed when a dissenter was present. When tested alone, participants made errors less than 1% of the time.",
    figureId: "sim1-fig2",
  },
  /* ── Set 5: Mental & Physical Health (Qs 61-75) ── */
  {
    id: "sim1-set5",
    setNum: 5,
    title: "Set 5 — Research Study: Cognitive-Behavioral Therapy for Anxiety",
    passage: "Researchers conducted a randomized controlled trial comparing three treatments for generalized anxiety disorder (GAD). They randomly assigned 150 participants diagnosed with GAD to one of three conditions: cognitive-behavioral therapy (CBT), medication only (an SSRI), or a waitlist control group. Treatment lasted 12 weeks. Anxiety symptoms were measured using the GAD-7 scale (range 0-21, with higher scores indicating more anxiety) at baseline, 6 weeks, and 12 weeks. Results showed that both the CBT group (mean reduction = 8.4 points) and the medication group (mean reduction = 7.1 points) showed significantly greater improvement than the control group (mean reduction = 1.8 points). The difference between CBT and medication was not statistically significant.",
  },
];

/* ── MC Questions (75 total) ── */
/* Distribution: 19A, 19B, 19C, 18D */
const SIM1_MC = [
  /* === Set 1: Biological Bases (Qs 1-15) === */
  { num: 1, set: 1, stem: "In Dr. Alvarez's study, what is the independent variable?", choices: ["A","The amount of sleep participants received","B","Participants' reaction times","C","The type of cognitive task performed","D","The age of the participants"], answer: "A" },
  { num: 2, set: 1, stem: "Based on the data, which conclusion is best supported?", choices: ["A","Complex tasks are more affected by sleep deprivation than simple tasks","B","Sleep deprivation has no effect on simple tasks","C","Six hours of sleep is sufficient for optimal performance","D","Reaction time decreases with less sleep"], answer: "A" },
  { num: 3, set: 1, stem: "The use of random assignment in this study helps ensure that:", choices: ["A","the sample is representative of the general population","B","the results can be replicated by other researchers","C","the dependent variable is properly operationalized","D","pre-existing differences between groups are minimized"], answer: "D" },
  { num: 4, set: 1, stem: "Which brain structure is most directly involved in regulating the sleep-wake cycle?", choices: ["A","Amygdala","B","Hippocampus","C","Cerebellum","D","Hypothalamus"], answer: "D" },
  { num: 5, set: 1, stem: "A neuron's resting potential is approximately:", choices: ["A","+40 millivolts","B","0 millivolts","C","-55 millivolts","D","-70 millivolts"], answer: "D" },
  { num: 6, set: 1, stem: "Which neurotransmitter is most associated with the reward pathway and motivation?", choices: ["A","Dopamine","B","Serotonin","C","GABA","D","Acetylcholine"], answer: "A" },
  { num: 7, set: 1, stem: "If Dr. Alvarez wanted to increase the external validity of her study, she should:", choices: ["A","use a double-blind procedure","B","increase the number of trials","C","add a placebo control group","D","recruit participants from diverse backgrounds and ages"], answer: "D" },
  { num: 8, set: 1, stem: "The peripheral nervous system includes all of the following EXCEPT the:", choices: ["A","somatic nervous system","B","autonomic nervous system","C","sympathetic nervous system","D","spinal cord"], answer: "D" },
  { num: 9, set: 1, stem: "Damage to Broca's area would most likely result in difficulty with:", choices: ["A","producing fluent speech","B","understanding spoken language","C","processing visual information","D","forming new memories"], answer: "A" },
  { num: 10, set: 1, stem: "The part of the ear that converts sound waves into neural impulses is the:", choices: ["A","tympanic membrane","B","ossicles","C","semicircular canals","D","cochlea"], answer: "D" },
  { num: 11, set: 1, stem: "Which imaging technique provides the best temporal resolution for measuring brain activity?", choices: ["A","CT scan","B","MRI","C","PET scan","D","EEG"], answer: "D" },
  { num: 12, set: 1, stem: "The fight-or-flight response is primarily activated by the:", choices: ["A","parasympathetic nervous system","B","somatic nervous system","C","central nervous system","D","sympathetic nervous system"], answer: "D" },
  { num: 13, set: 1, stem: "A split-brain patient is shown an image of a key in the left visual field. The patient would most likely:", choices: ["A","say 'key' and pick it up with the right hand","B","say 'key' but be unable to pick it up","C","be unable to name it or pick it up","D","be unable to name it but pick it up with the left hand"], answer: "D" },
  { num: 14, set: 1, stem: "According to the gate-control theory, pain signals can be blocked by:", choices: ["A","activity in large nerve fibers in the spinal cord","B","endorphins binding to receptor sites in the brain","C","increased production of substance P","D","activation of nociceptors in the skin"], answer: "A" },
  { num: 15, set: 1, stem: "Which structure serves as the brain's sensory relay station, directing incoming sensory information to the appropriate cortical area?", choices: ["A","Thalamus","B","Hypothalamus","C","Hippocampus","D","Amygdala"], answer: "A" },

  /* === Set 2: Cognition (Qs 16-30) === */
  { num: 16, set: 2, stem: "The finding that semantic processing leads to better recall than structural processing is best explained by:", choices: ["A","levels of processing theory","B","the serial position effect","C","decay theory","D","proactive interference"], answer: "A" },
  { num: 17, set: 2, stem: "In this study, the dependent variable is:", choices: ["A","the number of words recalled","B","the type of encoding task","C","the 24-hour delay period","D","the age of the participants"], answer: "A" },
  { num: 18, set: 2, stem: "Which type of memory has virtually unlimited capacity and duration?", choices: ["A","Sensory memory","B","Short-term memory","C","Working memory","D","Long-term memory"], answer: "D" },
  { num: 19, set: 2, stem: "A student studies vocabulary words in the same room where the test will be given. The student's improved performance is best explained by:", choices: ["A","state-dependent memory","B","the testing effect","C","the spacing effect","D","context-dependent memory"], answer: "D" },
  { num: 20, set: 2, stem: "The misinformation effect demonstrates that:", choices: ["A","post-event information can alter memory of an event","B","memories are stored as exact copies of experience","C","repressed memories are always accurate","D","eyewitness testimony is highly reliable"], answer: "A" },
  { num: 21, set: 2, stem: "Which heuristic involves judging the likelihood of an event based on how easily examples come to mind?", choices: ["A","Representativeness heuristic","B","Anchoring heuristic","C","Recognition heuristic","D","Availability heuristic"], answer: "D" },
  { num: 22, set: 2, stem: "According to Chomsky, the language acquisition device (LAD) suggests that:", choices: ["A","children are born with an innate capacity for language","B","language is entirely learned through reinforcement","C","language development depends solely on social interaction","D","adults and children learn language in the same way"], answer: "A" },
  { num: 23, set: 2, stem: "During REM sleep, the brain is:", choices: ["A","highly active, similar to waking states","B","producing primarily delta waves","C","in a state of minimal activity","D","producing sleep spindles and K-complexes"], answer: "A" },
  { num: 24, set: 2, stem: "A researcher finds that people rate themselves as above average on most traits. This best illustrates:", choices: ["A","confirmation bias","B","functional fixedness","C","belief perseverance","D","self-serving bias"], answer: "D" },
  { num: 25, set: 2, stem: "Working memory is most closely associated with activity in the:", choices: ["A","prefrontal cortex","B","occipital lobe","C","temporal lobe","D","cerebellum"], answer: "A" },
  { num: 26, set: 2, stem: "The difference between fluid intelligence and crystallized intelligence is that fluid intelligence:", choices: ["A","increases steadily throughout adulthood while crystallized intelligence declines","B","involves accumulated knowledge while crystallized intelligence involves reasoning","C","is primarily measured by vocabulary tests","D","involves reasoning and problem-solving ability independent of learned knowledge"], answer: "D" },
  { num: 27, set: 2, stem: "A person cannot remember events that occurred before a head injury. This is an example of:", choices: ["A","retrograde amnesia","B","anterograde amnesia","C","proactive interference","D","source amnesia"], answer: "A" },
  { num: 28, set: 2, stem: "The cocktail party effect demonstrates:", choices: ["A","selective attention","B","divided attention","C","sustained attention","D","alternating attention"], answer: "A" },
  { num: 29, set: 2, stem: "If the mean number of words recalled in the structural condition is 4.2 and the standard deviation is 1.1, approximately 68% of participants recalled between:", choices: ["A","3.1 and 5.3 words","B","2.0 and 6.4 words","C","4.0 and 4.4 words","D","1.9 and 6.5 words"], answer: "A" },
  { num: 30, set: 2, stem: "A student who uses the method of loci to remember a grocery list is relying on:", choices: ["A","maintenance rehearsal","B","chunking","C","elaborative rehearsal and visual imagery","D","implicit memory"], answer: "C" },

  /* === Set 3: Development & Learning (Qs 31-45) === */
  { num: 31, set: 3, stem: "In the classical conditioning study, the conditioned stimulus (CS) is:", choices: ["A","the galvanic skin response","B","the burst of white noise","C","the neutral tone","D","the fear response"], answer: "C" },
  { num: 32, set: 3, stem: "The plateau in GSR after trial 7 indicates that:", choices: ["A","extinction has occurred","B","spontaneous recovery has taken place","C","stimulus generalization is occurring","D","the conditioned response has reached asymptote"], answer: "D" },
  { num: 33, set: 3, stem: "Spontaneous recovery in this study is demonstrated by:", choices: ["A","the increase in GSR during the acquisition phase","B","the decrease in GSR during the extinction phase","C","the reappearance of the CR after a rest period following extinction","D","the initial neutral response to the tone"], answer: "C" },
  { num: 34, set: 3, stem: "According to Piaget, a child who understands that pouring water from a short, wide glass into a tall, thin glass does not change the amount of water has achieved:", choices: ["A","object permanence","B","egocentrism","C","assimilation","D","conservation"], answer: "D" },
  { num: 35, set: 3, stem: "In Erikson's theory, the primary psychosocial crisis during adolescence is:", choices: ["A","trust vs. mistrust","B","industry vs. inferiority","C","identity vs. role confusion","D","intimacy vs. isolation"], answer: "C" },
  { num: 36, set: 3, stem: "A child watches an older sibling receive praise for helping with chores and begins helping as well. This is best explained by:", choices: ["A","classical conditioning","B","operant conditioning","C","observational learning","D","habituation"], answer: "C" },
  { num: 37, set: 3, stem: "In operant conditioning, a negative reinforcer:", choices: ["A","decreases the likelihood of a behavior","B","is the same as punishment","C","removes an aversive stimulus to increase a behavior","D","presents an aversive stimulus after a behavior"], answer: "C" },
  { num: 38, set: 3, stem: "Harlow's research with infant monkeys and surrogate mothers demonstrated the importance of:", choices: ["A","imprinting during a critical period","B","contact comfort in attachment formation","C","reinforcement in social bonding","D","classical conditioning in emotional development"], answer: "B" },
  { num: 39, set: 3, stem: "A toddler who calls all four-legged animals 'doggy' is demonstrating:", choices: ["A","accommodation","B","overextension","C","underextension","D","telegraphic speech"], answer: "B" },
  { num: 40, set: 3, stem: "According to Kohlberg's theory, a child who obeys rules to avoid punishment is at the:", choices: ["A","preconventional level","B","conventional level","C","postconventional level","D","formal operational stage"], answer: "A" },
  { num: 41, set: 3, stem: "Which schedule of reinforcement produces the highest, most consistent rate of responding?", choices: ["A","Fixed-ratio","B","Variable-ratio","C","Fixed-interval","D","Variable-interval"], answer: "B" },
  { num: 42, set: 3, stem: "The concept of a critical period in development suggests that:", choices: ["A","development occurs in a continuous, gradual process","B","certain abilities must be developed during specific time windows","C","children develop at the same rate regardless of environment","D","genetic factors are more important than environmental factors"], answer: "B" },
  { num: 43, set: 3, stem: "Vygotsky's zone of proximal development refers to:", choices: ["A","tasks a child can perform independently","B","tasks too difficult for a child even with help","C","tasks a child can perform with guidance but not alone","D","the stage of formal operational thinking"], answer: "C" },
  { num: 44, set: 3, stem: "If the conditioned tone were presented at a slightly different pitch and still elicited a GSR, this would be an example of:", choices: ["A","stimulus discrimination","B","stimulus generalization","C","higher-order conditioning","D","spontaneous recovery"], answer: "B" },
  { num: 45, set: 3, stem: "Secure attachment, as described by Ainsworth, is characterized by:", choices: ["A","indifference to the caregiver's presence or absence","B","distress at separation and comfort upon reunion","C","clinging behavior with resistance to comfort","D","inconsistent responses to the caregiver"], answer: "B" },

  /* === Set 4: Social Psychology & Personality (Qs 46-60) === */
  { num: 46, set: 4, stem: "The results of the conformity study best support the concept of:", choices: ["A","obedience to authority","B","normative social influence","C","deindividuation","D","social loafing"], answer: "B" },
  { num: 47, set: 4, stem: "The dramatic decrease in conformity when a dissenter is present suggests that:", choices: ["A","people conform only when physically threatened","B","the presence of even one ally significantly reduces social pressure","C","group size is the only factor affecting conformity","D","conformity is entirely determined by personality traits"], answer: "B" },
  { num: 48, set: 4, stem: "According to the fundamental attribution error, when observing someone trip and fall, people tend to:", choices: ["A","attribute it to the slippery floor","B","attribute it to the person's clumsiness","C","make no attribution at all","D","attribute it to bad luck"], answer: "B" },
  { num: 49, set: 4, stem: "In Milgram's obedience study, the highest rates of obedience occurred when:", choices: ["A","participants could see the learner","B","the experimenter was in the same room giving orders","C","participants were in a different building from the experimenter","D","participants had to physically force the learner's hand onto a shock plate"], answer: "B" },
  { num: 50, set: 4, stem: "The bystander effect is primarily explained by:", choices: ["A","social facilitation and arousal","B","diffusion of responsibility and pluralistic ignorance","C","deindividuation and groupthink","D","conformity and obedience"], answer: "B" },
  { num: 51, set: 4, stem: "Which of the following is a component of the Big Five personality model?", choices: ["A","Introversion","B","Self-actualization","C","Openness to experience","D","Collective unconscious"], answer: "C" },
  { num: 52, set: 4, stem: "Cognitive dissonance theory predicts that when a person's behavior conflicts with their attitudes, they will:", choices: ["A","always change their behavior to match their attitudes","B","experience psychological discomfort and may change their attitudes","C","ignore the discrepancy entirely","D","develop a new personality trait"], answer: "B" },
  { num: 53, set: 4, stem: "The self-fulfilling prophecy occurs when:", choices: ["A","a person's expectations about another person lead that person to act in confirming ways","B","a person accurately predicts their own future behavior","C","stereotypes are always accurate reflections of group behavior","D","people consistently underestimate their own abilities"], answer: "A" },
  { num: 54, set: 4, stem: "Freud's defense mechanism of projection involves:", choices: ["A","redirecting emotions toward a safer target","B","reverting to behaviors characteristic of an earlier stage","C","attributing one's own unacceptable thoughts to others","D","refusing to accept reality"], answer: "C" },
  { num: 55, set: 4, stem: "According to Rogers' humanistic theory, the gap between the real self and ideal self contributes to:", choices: ["A","self-actualization","B","unconditional positive regard","C","incongruence and psychological distress","D","the collective unconscious"], answer: "C" },
  { num: 56, set: 4, stem: "In-group bias refers to the tendency to:", choices: ["A","treat all groups equally regardless of membership","B","favor members of one's own group over outsiders","C","avoid interacting with members of other groups","D","attribute negative traits to one's own group"], answer: "B" },
  { num: 57, set: 4, stem: "A researcher who measures personality using a standardized questionnaire with established norms is using a(n):", choices: ["A","projective test","B","unstructured interview","C","self-report inventory","D","behavioral observation"], answer: "C" },
  { num: 58, set: 4, stem: "The just-world hypothesis leads people to believe that:", choices: ["A","the world is inherently unfair","B","victims must have done something to deserve their fate","C","good things happen to bad people","D","people have no control over what happens to them"], answer: "B" },
  { num: 59, set: 4, stem: "Social loafing is most likely to occur when:", choices: ["A","individual contributions are clearly identifiable","B","the task is personally meaningful","C","individual contributions are not identifiable within a group","D","the group is small and competitive"], answer: "C" },
  { num: 60, set: 4, stem: "Groupthink is most likely to occur in groups that are:", choices: ["A","diverse and encourage open debate","B","highly cohesive with a strong leader and insulated from outside opinions","C","large and loosely organized","D","focused on individual accountability"], answer: "B" },

  /* === Set 5: Mental & Physical Health (Qs 61-75) === */
  { num: 61, set: 5, stem: "In the CBT study, which of the following is the best operationalization of the dependent variable?", choices: ["A","The type of treatment each participant received","B","The change in GAD-7 scores from baseline to 12 weeks","C","Whether participants had been diagnosed with GAD","D","The number of therapy sessions attended"], answer: "B" },
  { num: 62, set: 5, stem: "The finding that the difference between CBT and medication was not statistically significant means:", choices: ["A","CBT and medication are equally effective","B","neither treatment works better than the control","C","the observed difference could be due to chance","D","the study lacked a proper control group"], answer: "C" },
  { num: 63, set: 5, stem: "The primary purpose of the waitlist control group in this study is to:", choices: ["A","provide a comparison for the natural course of symptoms without treatment","B","ensure participants receive treatment eventually","C","test the effectiveness of a placebo","D","increase the sample size of the study"], answer: "A" },
  { num: 64, set: 5, stem: "Which disorder is characterized by persistent, unwanted thoughts (obsessions) and repetitive behaviors (compulsions)?", choices: ["A","Generalized anxiety disorder","B","Post-traumatic stress disorder","C","Obsessive-compulsive disorder","D","Panic disorder"], answer: "C" },
  { num: 65, set: 5, stem: "According to the biopsychosocial model, mental illness is best understood as:", choices: ["A","resulting primarily from chemical imbalances in the brain","B","caused entirely by environmental stressors","C","an interaction of biological, psychological, and social factors","D","a product of unconscious conflicts from childhood"], answer: "C" },
  { num: 66, set: 5, stem: "The DSM-5 is primarily used to:", choices: ["A","prescribe medications for mental disorders","B","classify and diagnose mental disorders","C","determine the biological causes of mental illness","D","provide therapy techniques for clinicians"], answer: "B" },
  { num: 67, set: 5, stem: "A therapist who helps a client identify and challenge irrational beliefs is most likely practicing:", choices: ["A","psychoanalysis","B","humanistic therapy","C","cognitive-behavioral therapy","D","biomedical therapy"], answer: "C" },
  { num: 68, set: 5, stem: "Systematic desensitization is based on the principles of:", choices: ["A","operant conditioning","B","classical conditioning","C","cognitive restructuring","D","psychoanalytic theory"], answer: "B" },
  { num: 69, set: 5, stem: "The general adaptation syndrome (GAS) proposed by Selye includes which stages in order?", choices: ["A","Alarm, resistance, exhaustion","B","Denial, anger, acceptance","C","Fight, flight, freeze","D","Acute, chronic, recovery"], answer: "A" },
  { num: 70, set: 5, stem: "Which of the following is a positive symptom of schizophrenia?", choices: ["A","Flat affect","B","Social withdrawal","C","Hallucinations","D","Reduced speech"], answer: "C" },
  { num: 71, set: 5, stem: "According to the Yerkes-Dodson law, optimal performance occurs at:", choices: ["A","the lowest level of arousal","B","the highest level of arousal","C","a moderate level of arousal for most tasks","D","varying levels depending only on personality type"], answer: "C" },
  { num: 72, set: 5, stem: "The James-Lange theory of emotion states that:", choices: ["A","emotions and physiological responses occur simultaneously","B","physiological arousal precedes the experience of emotion","C","cognitive appraisal determines the emotion experienced","D","emotions are entirely determined by facial expressions"], answer: "B" },
  { num: 73, set: 5, stem: "A person with major depressive disorder is most likely to have reduced activity of which neurotransmitter?", choices: ["A","Dopamine only","B","Acetylcholine","C","Serotonin","D","Glutamate"], answer: "C" },
  { num: 74, set: 5, stem: "Which therapeutic approach emphasizes unconditional positive regard, empathy, and genuineness?", choices: ["A","Psychoanalytic therapy","B","Behavioral therapy","C","Cognitive therapy","D","Person-centered therapy"], answer: "D" },
  { num: 75, set: 5, stem: "Maslow's hierarchy of needs places which need at the top of the pyramid?", choices: ["A","Safety needs","B","Belongingness needs","C","Esteem needs","D","Self-actualization"], answer: "D" },
];

/* ── AAQ (Article Analysis Question) ── */
const SIM1_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "The Effects of Exposure to Different Amounts of Misinformation and Source Credibility Perception on Source Monitoring and Memory Accuracy",
    citation: "Pena, M. M., Klemfuss, J. Z., Loftus, E. F., & Mindthoff, A. (2017). Psychology of Consciousness: Theory, Research, and Practice, 4(4), 337-347.",
    introduction: "This research study explores the effect of being presented with varying amounts of misinformation about a specific event on the memory of that event.",
    participants: "A total of 127 students at a large university were recruited through the university's research participation system. They participated in the study in exchange for course credit. The final sample of participants was 69% women and 31% men. The race/ethnicity of the participants was reported as follows: 65% Hispanic/Latino/a, 15% Black/African American, 11% White/European American, 4% Asian/Asian American, and 5% Other. The participants ranged in age from 18 to 39 years old (mean age = 21.21, standard deviation = 3.28).",
    method: "After providing consent, participants viewed a 6.5-minute silent video of a mock crime. The video depicted an electrician entering a house to fix items such as an oven and a light fixture. While he was in the house, he stole some of the owners' possessions. After watching the video, participants completed a 12-minute trivia questionnaire as a distractor task. Participants completed all portions of the study online.\n\nParticipants were then told that eight previous participants had written brief summaries of the robbery shown in the video. They were also told that one of those summaries would be presented to them, along with a profile of the previous participant, to refresh their memory. Unknown to the participants, these \"previous participants\" were not real people. The researchers created the previous participants' profiles based on the demographics of the population of students on the university campus. The goal was to create believable profiles so that the summaries would be more credible to the participants.\n\nParticipants were randomly assigned to one of three conditions to receive a summary with a specific amount of misinformation:\n- Low misinformation condition: 8 of 40 sentences (20% misleading information)\n- Medium misinformation condition: 20 of 40 sentences (50% misleading information)\n- High misinformation condition: 32 of 40 sentences (80% misleading information)\n\nThe misleading information changed details about items seen in the video. No information was added. The non-misleading sentences were neutral to avoid strengthening the participant's memory of the target items. For example, a misleading item description was, \"He noticed the dresser was covered with a brown cloth.\" In reality, the cloth was navy blue. The neutral description of that item was, \"He noticed the dresser was covered with a cloth.\"\n\nAfter reading an entire previous participant's summary, each current participant completed a 5-minute math test as a distractor task. Then, all participants were asked an identical set of 40 multiple-choice questions in random order about the mock crime video. Each question had three answer options:\n1. Correct: the correct option corresponding to what was shown in the video (e.g., a navy blue cloth)\n2. Misled: an incorrect answer that reflected misinformation provided in the summaries (e.g., a brown cloth)\n3. Incorrect: an incorrect answer containing information that was not portrayed in the video or any summary (e.g., a yellow cloth)\n\nParticipants then completed a questionnaire asking about the credibility of the previous participant's summary.",
    results: "The researchers analyzed the results of the questionnaire by comparing participants' correct responses with how participants viewed the credibility of the previous participant's summary. The researchers hypothesized that if participants distrusted the summary, they would be less likely to incorporate the information into their memory of the event, leading to their being less likely to choose an incorrect answer. The results are shown in the table.\n\nThe researchers found that within each condition, participants performed best if they distrusted the accuracy of the summary. Participants who were presented with higher levels of misinformation were more likely to report being distrustful, and those who reported being distrustful of the summary resisted more misinformation than those who did not.",
    dataTable: {
      title: "Mean Percentages of Correct, Misled, and Incorrect Responses for Each Misinformation Condition",
      headers: ["Response Type", "High Misinformation Group", "Medium Misinformation Group", "Low Misinformation Group"],
      rows: [
        ["Correct", "63%", "66%", "74%"],
        ["Misled", "30%", "27%", "19%"],
        ["Incorrect", "7%", "7%", "7%"],
      ],
    },
    footnotes: [
      "Language referencing racial, ethnic, or gender identities may be outdated or fail to reflect the complexities of identity that participants represent. Race/ethnicity categories reflect those reported in the original research article.",
      "A distractor task is a task that is unrelated to the primary task that participants are asked to complete before they are asked to recall the target information.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of high misinformation in the study." },
    { letter: "C", prompt: "Describe what the mean indicates for the percentage of correct responses between the high misinformation group and the low misinformation group." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the misinformation effect." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies the research method as an experiment (participants were randomly assigned to conditions)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that high misinformation was operationally defined as receiving a summary with 32 of 40 sentences (80%) containing misleading information." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that the high misinformation group had a lower mean percentage of correct responses (63%) compared to the low misinformation group (74%), indicating that more misinformation led to fewer correct answers." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies a relevant ethical guideline applied in the study, such as informed consent (participants provided consent before participating)." },
    { row: "E", category: "Generalizability", points: 1, description: "Evaluates generalizability using specific participant information (e.g., university students, specific age range, demographic composition) to argue for or against generalizability to broader populations." },
    { row: "F", category: "Argumentation", points: 2, description: "Uses a specific finding from the study to explain how results support or refute the misinformation effect. Full credit (2 pts) requires both citing specific evidence AND explaining the connection. Partial credit (1 pt) for evidence alone or explanation alone." },
  ],
};

/* ── EBQ (Evidence-Based Question) ── */
const SIM1_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "Whether the presence of others improves performance",
  instructions: "Using the sources provided, develop and justify an argument about whether the presence of others improves performance.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used. You can use parenthetical citation (e.g., \"...(Source 1).\") or embedded citation (e.g., \"According to Source 1...\").",
  sources: [
    {
      num: 1,
      title: "The Effect of Mere Presence on Social Facilitation: An Unobtrusive Test",
      citation: "Markus, H. (1978). Journal of Experimental Social Psychology, 14(4), 389-397.",
      summary: "Researchers investigated whether the presence of others leads people to perform better on a task. Forty-five undergraduate men were randomly assigned to one of three conditions: alone, audience (a confederate watched them), or incidental audience (a confederate was present but faced away). Participants were timed while completing well-learned tasks (putting on/taking off their own shoes) and difficult new tasks (putting on unfamiliar clothing: large socks, oversized shoes, and a lab coat). Results showed that performance on well-learned tasks was faster in the presence of an audience. When an audience was present, it took participants longer to complete the new, more difficult tasks. For simple tasks, there was a statistically significant difference between the alone condition (~13 seconds) and the audience condition (~11 seconds). For difficult tasks, participants took longer with an audience (~35 seconds) compared to alone (~33 seconds).",
    },
    {
      num: 2,
      title: "Cognitive Control Under Social Influence in Baboons",
      citation: "Huguet, P., Barbet, I., Belletier, C., Monteil, J-M., & Fagot, J. (2014). Journal of Experimental Psychology, 143(6), 2067-2073.",
      summary: "Researchers explored how the presence of others influenced baboons' ability to complete an operant conditioning task. Eleven baboons were trained on a touch-screen task where they had to touch a white cross only when a red circle was present to receive a food reward. After training, researchers introduced conflict trials where the position of stimuli was reversed in 20% of trials. Baboons were randomly assigned to complete trials alone or in the presence of other baboons performing the same task. Results showed that for baboons in the presence of others during conflicting trials, their response time was delayed compared to baboons who were alone. The delayed reaction time was greatest for male baboons in the presence of older males with a higher social rank.",
    },
    {
      num: 3,
      title: "Evaluative Social Presence Can Improve Vigilance Performance",
      citation: "Claypoole, V. L., Neigel, A. R., Waldfogle, G. E., & Szalma, J. L. (2019). Journal of Experimental Psychology: Human Perception and Performance, 45(5), 616-627.",
      summary: "Researchers examined the effect of observers on vigilance performance. A total of 132 participants monitored a computer screen for 24 minutes, identifying specific number pairs. Participants were randomly assigned to four conditions: evaluative observer (research assistant watching and taking notes), merely present observer (assistant seated nearby but facing away), electronic observer (webcam and video recorder present), and no observer (control). Results showed that participants who completed the task alone detected significantly fewer correct pairs than those in the electronic observer or evaluative observer conditions. Interestingly, there was no significant difference between the no observer condition and the merely present observer condition. The results suggest that when people feel they are being directly evaluated, they perform better on vigilance tasks.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific and defensible claim about whether the presence of others improves performance (e.g., 'The presence of others improves performance on well-learned tasks but hinders performance on difficult tasks')." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited, specific, and accurate evidence from two different sources to support the claim (1 point per source, max 2). Evidence must be relevant and properly attributed." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains how evidence supports the claim using AP Psychology concepts (e.g., social facilitation, Yerkes-Dodson law, arousal theory, dominant response). Must use a different concept for each piece of evidence (1 point per explanation, max 2)." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim through psychological theory. Full credit requires clear, logical connections between evidence and claim using appropriate psychological terminology." },
  ],
};

/* ── Assemble Simulation 1 ── */
const SIM1 = {
  id: "sim1",
  title: "Simulation 1 — Full Exam",
  badge: "Sim",
  hasMC: true,
  mcSets: SIM1_MC_SETS,
  mc: SIM1_MC,
  frqs: [SIM1_AAQ, SIM1_EBQ],
  figures: SIM1_FIGURES,
};


/* ═══════════════════════════════════════════════════════════════════
   OFFICIAL 2025 — Set 1 (FRQ Only)
   ═══════════════════════════════════════════════════════════════════ */

const OFFICIAL_2025_SET1_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "The Effects of Exposure to Different Amounts of Misinformation and Source Credibility Perception on Source Monitoring and Memory Accuracy",
    citation: "Pena, M. M., Klemfuss, J. Z., Loftus, E. F., & Mindthoff, A. (2017). Psychology of Consciousness: Theory, Research, and Practice, 4(4), 337-347.",
    introduction: "This research study explores the effect of being presented with varying amounts of misinformation about a specific event on the memory of that event.",
    participants: "A total of 127 students at a large university were recruited through the university's research participation system. They participated in the study in exchange for course credit. The final sample of participants was 69% women and 31% men. The race/ethnicity of the participants was reported as follows: 65% Hispanic/Latino/a, 15% Black/African American, 11% White/European American, 4% Asian/Asian American, and 5% Other. The participants ranged in age from 18 to 39 years old (mean age = 21.21, standard deviation = 3.28).",
    method: "After providing consent, participants viewed a 6.5-minute silent video of a mock crime. The video depicted an electrician entering a house to fix items such as an oven and a light fixture. While he was in the house, he stole some of the owners' possessions. After watching the video, participants completed a 12-minute trivia questionnaire as a distractor task. Participants completed all portions of the study online.\n\nParticipants were then told that eight previous participants had written brief summaries of the robbery shown in the video. They were also told that one of those summaries would be presented to them, along with a profile of the previous participant, to refresh their memory. Unknown to the participants, these \"previous participants\" were not real people. The researchers created the previous participants' profiles based on the demographics of the population of students on the university campus.\n\nParticipants were randomly assigned to one of three conditions to receive a summary with a specific amount of misinformation:\n- Low misinformation condition: 8 of 40 sentences (20% misleading information)\n- Medium misinformation condition: 20 of 40 sentences (50% misleading information)\n- High misinformation condition: 32 of 40 sentences (80% misleading information)\n\nThe misleading information changed details about items seen in the video. After reading the summary, each participant completed a 5-minute math test as a distractor task. Then, all participants were asked an identical set of 40 multiple-choice questions about the mock crime video. Each question had three answer options: Correct (what was shown in the video), Misled (misinformation from the summary), and Incorrect (information not in the video or summary).\n\nParticipants then completed a questionnaire asking about the credibility of the previous participant's summary.",
    results: "The researchers found that participants who were presented with higher levels of misinformation were more likely to choose the misled answer. The high misinformation group had 63% correct, 30% misled, and 7% incorrect responses. The medium misinformation group had 66% correct, 27% misled, and 7% incorrect. The low misinformation group had 74% correct, 19% misled, and 7% incorrect. Within each condition, participants who distrusted the summary resisted more misinformation than those who did not.",
    dataTable: {
      title: "Mean Percentages of Correct, Misled, and Incorrect Responses for Each Misinformation Condition",
      headers: ["Response Type", "High Misinformation Group", "Medium Misinformation Group", "Low Misinformation Group"],
      rows: [
        ["Correct", "63%", "66%", "74%"],
        ["Misled", "30%", "27%", "19%"],
        ["Incorrect", "7%", "7%", "7%"],
      ],
    },
    footnotes: [
      "Language referencing racial, ethnic, or gender identities may be outdated or fail to reflect the complexities of identity that participants represent. Race/ethnicity categories reflect those reported in the original research article.",
      "A distractor task is a task that is unrelated to the primary task that participants are asked to complete before they are asked to recall the target information.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of high misinformation in the study." },
    { letter: "C", prompt: "Describe what the mean indicates for the percentage of correct responses between the high misinformation group and the low misinformation group." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the misinformation effect." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies the research method as an experiment (participants were randomly assigned to conditions)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that high misinformation was operationally defined as receiving a summary with 32 of 40 sentences (80%) containing misleading information." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that the high misinformation group had a lower mean percentage of correct responses (63%) compared to the low misinformation group (74%), indicating that more misinformation led to fewer correct answers." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies a relevant ethical guideline applied in the study, such as informed consent (participants provided consent before participating)." },
    { row: "E", category: "Generalizability", points: 1, description: "Evaluates generalizability using specific participant information (e.g., university students, specific age range, demographic composition) to argue for or against generalizability to broader populations." },
    { row: "F", category: "Argumentation", points: 2, description: "Uses a specific finding from the study to explain how results support or refute the misinformation effect. Full credit (2 pts) requires both citing specific evidence AND explaining the connection. Partial credit (1 pt) for evidence alone or explanation alone." },
  ],
};

const OFFICIAL_2025_SET1_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "Whether the presence of others improves performance",
  instructions: "Using the sources provided, develop and justify an argument about whether the presence of others improves performance.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "The Effect of Mere Presence on Social Facilitation: An Unobtrusive Test",
      citation: "Markus, H. (1978). Journal of Experimental Social Psychology, 14(4), 389-397.",
      summary: "Researchers investigated whether the presence of others leads people to perform better on a task. Forty-five undergraduate men were randomly assigned to one of three conditions: alone, audience (a confederate watched them), or incidental audience (a confederate was present but faced away). Participants were timed while completing well-learned tasks (putting on/taking off their own shoes) and difficult new tasks (putting on unfamiliar clothing). Results showed that performance on well-learned tasks was faster in the presence of an audience (~11 seconds vs ~13 seconds alone). For difficult tasks, participants took longer with an audience (~35 seconds) compared to alone (~33 seconds).",
    },
    {
      num: 2,
      title: "Cognitive Control Under Social Influence in Baboons",
      citation: "Huguet, P., Barbet, I., Belletier, C., Monteil, J-M., & Fagot, J. (2014). Journal of Experimental Psychology, 143(6), 2067-2073.",
      summary: "Researchers explored how the presence of others influenced baboons' ability to complete an operant conditioning task. Eleven baboons were trained on a touch-screen task where they had to touch a white cross only when a red circle was present to receive a food reward. After training, researchers introduced conflict trials where the position of stimuli was reversed in 20% of trials. Baboons were randomly assigned to complete trials alone or in the presence of other baboons. Results showed that for baboons in the presence of others during conflicting trials, their response time was delayed compared to baboons who were alone. The delayed reaction time was greatest for male baboons in the presence of older males with a higher social rank.",
    },
    {
      num: 3,
      title: "Evaluative Social Presence Can Improve Vigilance Performance",
      citation: "Claypoole, V. L., Neigel, A. R., Waldfogle, G. E., & Szalma, J. L. (2019). Journal of Experimental Psychology: Human Perception and Performance, 45(5), 616-627.",
      summary: "Researchers examined the effect of observers on vigilance performance. A total of 132 participants monitored a computer screen for 24 minutes, identifying specific number pairs. Participants were randomly assigned to four conditions: evaluative observer (research assistant watching and taking notes), merely present observer (assistant seated nearby but facing away), electronic observer (webcam and video recorder present), and no observer (control). Results showed that participants in the evaluative observer and electronic observer conditions detected significantly more correct pairs than those in the no observer condition. There was no significant difference between the no observer condition and the merely present observer condition.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific and defensible claim about whether the presence of others improves performance." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited, specific, and accurate evidence from two different sources to support the claim (1 point per source, max 2)." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains how evidence supports the claim using AP Psychology concepts (e.g., social facilitation, Yerkes-Dodson law, arousal theory, dominant response). Must use a different concept for each piece of evidence." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim through psychological theory." },
  ],
};

const OFFICIAL_2025_SET1 = {
  id: "official-2025-set1",
  title: "2025 Official \u2014 Set 1",
  badge: "Official",
  hasMC: false,
  mcSets: [],
  mc: [],
  frqs: [OFFICIAL_2025_SET1_AAQ, OFFICIAL_2025_SET1_EBQ],
  figures: {},
};

/* ═══════════════════════════════════════════════════════════════════
   OFFICIAL 2025 — Set 2 (FRQ Only)
   ═══════════════════════════════════════════════════════════════════ */

const OFFICIAL_2025_SET2_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "Dogs' Person-Oriented Behaviors in Response to Crying, Laughing, and Talking",
    citation: "Meyers-Manor, J. E., & Botten, M. L. (2020). Canadian Journal of Experimental Psychology, 74(3), 235-243.",
    introduction: "Dogs often comfort their owners by making visual or physical contact when owners cry or by providing help when owners are sick. This study examined whether dogs' reactions to emotions differ based on prior experience with the person displaying the emotion (owner versus stranger).",
    participants: "Sixteen dog-owner pairs were recruited via email. Owners ranged in age from 25 to 60 years old (mean age = 47.06, standard deviation = 11.89). Dogs ranged in age from 2 to 13 years old (mean age = 6.87, standard deviation = 3.35). Various breeds were represented in the sample.",
    method: "This study used a within-subjects design. Each dog participated in four 20-second trials: owner cried, stranger-researcher cried, owner laughed, and stranger-researcher laughed. The order of trials was counterbalanced across participants. A 2-minute conversation between the owner and researcher served as a reset between trials. During trials, the researcher acting as the stranger ignored the dogs. Instructions specified that neither the owner nor stranger should call the dog by name, make eye contact with the dog, or initiate physical contact with the dog.\n\nResearchers recorded person-oriented behaviors (looking at the person, making physical contact with the person, approaching the person, and vocalizing at the person) and non-person-oriented behaviors for each trial.",
    results: "Dogs exhibited more person-oriented behaviors during crying trials than during laughing or talking trials. Dogs engaged with the crying person regardless of whether it was the owner or stranger, with 75% of dogs approaching the owner during crying and 73% approaching the stranger during crying. The mean number of person-oriented behaviors was approximately 2.75 for crying, 1.1 for laughing, and 0.25 for talking.",
    dataTable: {
      title: "Total Number of Person-Oriented Dog Behaviors for Each Trial",
      headers: ["Behavior", "Dogs Looking", "Dogs Making Contact", "Dogs Approaching", "Dogs Vocalizing", "Total Person-Oriented Behaviors"],
      rows: [
        ["Baseline", "5", "3", "2", "2", "12"],
        ["Owner crying", "20", "15", "6", "1", "42"],
        ["Owner laughing", "11", "2", "2", "0", "15"],
        ["Stranger crying", "24", "11", "8", "3", "46"],
        ["Stranger laughing", "11", "7", "2", "0", "20"],
        ["Totals", "71", "38", "20", "6", "135"],
      ],
    },
    footnotes: [
      "Person-oriented behaviors include looking at, making physical contact with, approaching, or vocalizing at the person displaying the emotion.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of person-oriented dog behaviors." },
    { letter: "C", prompt: "Describe what the mean of the person-oriented behaviors indicates for the laughing trials as compared to the talking trials." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the idea that dogs' expressions of the person-oriented behaviors demonstrate stimulus discrimination in operant conditioning." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies the research method as an experiment or within-subjects experiment." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that person-oriented dog behaviors were operationally defined as looking at, making physical contact with, approaching, or vocalizing at the person." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that the mean number of person-oriented behaviors was higher for laughing (~1.1) than for talking (~0.25), but this difference was not statistically significant." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies a relevant ethical guideline, such as informed consent from owners or ensuring no harm to the animals." },
    { row: "E", category: "Generalizability", points: 1, description: "Evaluates generalizability using specific evidence such as small sample size (16 pairs), various breeds, or specific age ranges." },
    { row: "F", category: "Argumentation", points: 2, description: "Uses specific findings to explain how results support or refute stimulus discrimination. Full credit requires both evidence and explanation of how dogs differentially responding to crying vs. laughing/talking demonstrates (or does not demonstrate) stimulus discrimination." },
  ],
};

const OFFICIAL_2025_SET2_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "A specific social condition that leads people to be more likely to help another person in an emergency",
  instructions: "Using the sources provided, develop and justify an argument about a specific social condition that leads people to be more likely to help another person in an emergency.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "Bystander Intervention in Emergencies: Diffusion of Responsibility",
      citation: "Darley, J. M., & Latan\u00e9, B. (1968). Journal of Personality and Social Psychology, 8(4), 377-383.",
      summary: "Seventy-two participants took part in what they believed was a group discussion over an intercom system. During the discussion, a confederate appeared to have a medical emergency (seizure). Participants were assigned to one of three conditions varying the perceived number of people in the discussion. In the 2-person condition (participant and victim only), 85% of participants responded by the end of the emergency with a mean response time of 52 seconds. In the 3-person condition (participant, victim, and one other), 62% responded with a mean time of 93 seconds. In the 6-person condition (participant, victim, and four others), only 31% responded with a mean time of 166 seconds.",
      dataTable: {
        title: "Helping Behavior by Group Size",
        headers: ["Condition", "% Responding by End of Emergency", "Time in Seconds"],
        rows: [
          ["2 (Participant and Victim)", "85", "52"],
          ["3 (Participant, Victim, and 1 Other)", "62", "93"],
          ["6 (Participant, Victim, and 4 Others)", "31", "166"],
        ],
      },
    },
    {
      num: 2,
      title: "Would I Be Helped? Cross-National CCTV Footage Shows That Intervention Is the Norm in Public Conflicts",
      citation: "Philpot, R., Liebst, L. S., Levine, M., Bernasco, W., & Lindegaard, M. R. (2019). American Psychologist, 75(1), 66-75.",
      summary: "Researchers analyzed 219 public surveillance videos of aggressive incidents across three nations (United Kingdom, Netherlands, South Africa). At least one person intervened in 90.9% of situations, with a mean of 3.76 interveners per incident. Contrary to the bystander effect, more people present was associated with a higher likelihood that at least one person would intervene.",
    },
    {
      num: 3,
      title: "The Bystander-Effect: A Meta-Analytic Review on Bystander Intervention in Dangerous and Non-Dangerous Emergencies",
      citation: "Fischer, P., Krueger, J. I., Greitemeyer, T., Vogrincic, C., Kastenm\u00fcller, A., Frey, D., ... & Kainbacher, M. (2011). Psychological Bulletin, 137(4), 517-537.",
      summary: "This meta-analysis reviewed 53 articles involving more than 7,700 participants. Results showed that helping was more likely in emergencies than non-emergencies, when a perpetrator was present, and when bystanders knew each other. In non-dangerous situations, having more bystanders reduced helping. However, in dangerous emergencies, the presence of more bystanders did not significantly reduce helping behavior.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific and defensible claim about a social condition that leads people to help in emergencies." },
    { row: "B", category: "Evidence + Reasoning", points: 2, description: "Part B(i): Uses specific, relevant evidence from one source (1 pt). Part B(ii): Explains how the evidence supports the claim using an AP Psychology concept (1 pt)." },
    { row: "C", category: "Evidence + Reasoning", points: 2, description: "Part C(i): Uses specific, relevant evidence from a different source (1 pt). Part C(ii): Explains how the evidence supports the claim using a different AP Psychology concept (1 pt)." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim through psychological theory, such as diffusion of responsibility, pluralistic ignorance, or the bystander effect." },
  ],
};

const OFFICIAL_2025_SET2 = {
  id: "official-2025-set2",
  title: "2025 Official \u2014 Set 2",
  badge: "Official",
  hasMC: false,
  mcSets: [],
  mc: [],
  frqs: [OFFICIAL_2025_SET2_AAQ, OFFICIAL_2025_SET2_EBQ],
  figures: {},
};

/* ═══════════════════════════════════════════════════════════════════
   SIMULATION 2
   ═══════════════════════════════════════════════════════════════════ */

const SIM2_FIGURES = {
  "sim2-fig1": {
    type: "groupedBar",
    title: "Mean Stress Ratings by Coping Strategy",
    xLabel: "Coping Strategy",
    yLabel: "Stress Rating (1-10)",
    legendLabels: ["Pre-Intervention", "Post-Intervention"],
    colors: ["#f87171", "#34d399"],
    groups: [
      { label: "Problem-Focused", values: [7.8, 4.2], suffix: "" },
      { label: "Emotion-Focused", values: [7.6, 5.1], suffix: "" },
      { label: "Avoidant", values: [7.9, 7.3], suffix: "" },
    ],
  },
  "sim2-fig2": {
    type: "bar",
    title: "Percentage of Correct Signal Detections by Condition",
    xLabel: "Signal Strength",
    yLabel: "% Correct Detections",
    data: [
      { label: "Weak Signal", value: 42 },
      { label: "Moderate Signal", value: 78 },
      { label: "Strong Signal", value: 95 },
    ],
  },
  "sim2-fig3": {
    type: "table",
    title: "Sleep Stage Characteristics",
    headers: ["Stage", "Brain Waves", "Duration", "Key Features"],
    rows: [
      ["NREM 1", "Theta waves", "5-10 min", "Light sleep, hypnagogic imagery"],
      ["NREM 2", "Sleep spindles, K-complexes", "20 min", "Body temp drops, heart rate slows"],
      ["NREM 3", "Delta waves", "30 min", "Deep sleep, hard to awaken"],
      ["REM", "Beta-like waves", "10-60 min", "Vivid dreams, muscle paralysis"],
    ],
  },
  "sim2-fig4": {
    type: "line",
    title: "Cortisol Levels Over 8-Week Mindfulness Program",
    xLabel: "Week",
    yLabel: "Cortisol (nmol/L)",
    xLabels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    series: [
      { label: "Mindfulness Group", data: [18.2, 17.5, 16.8, 15.9, 15.1, 14.5, 13.8, 13.2, 12.6], color: "#60a5fa" },
      { label: "Control Group", data: [18.0, 18.1, 17.9, 18.2, 18.0, 17.8, 18.1, 17.9, 18.0], color: "#f87171" },
    ],
  },
  "sim2-fig5": {
    type: "bar",
    title: "Mean Words Recalled by Sleep Condition",
    xLabel: "Sleep Condition",
    yLabel: "Words Recalled (out of 20)",
    data: [
      { label: "Full Sleep", value: 15.3 },
      { label: "4-Hour Nap", value: 12.1 },
      { label: "Sleep Deprived", value: 8.7 },
    ],
  },
};

const SIM2_MC_SETS = [
  {
    id: "sim2-set1",
    setNum: 1,
    title: "Set 1 \u2014 Research Study: Signal Detection and Perception",
    passage: "Dr. Kim designed a study to examine factors affecting signal detection in a simulated air-traffic control task. Sixty participants monitored a radar screen for 90 minutes, pressing a button whenever they detected a faint blip representing an approaching aircraft. The signal strength was varied across three levels: weak, moderate, and strong. Participants were also assigned to either a high-motivation condition (told errors could cause simulated crashes) or low-motivation condition (told it was practice). Results showed that motivation significantly increased hit rates for weak signals but had minimal effect on strong signals. Response bias shifted more conservatively under high motivation, with fewer false alarms.",
    figureId: "sim2-fig2",
  },
  {
    id: "sim2-set2",
    setNum: 2,
    title: "Set 2 \u2014 Research Study: Sleep Architecture and Memory",
    passage: "Researchers at a university sleep lab investigated how different sleep conditions affect declarative memory consolidation. Sixty participants studied a list of 20 word pairs in the evening. They were randomly assigned to three groups: full night sleep (8 hours), a 4-hour nap, or total sleep deprivation. All participants were tested on recall of the word pairs the following morning. Polysomnography was used to monitor sleep stages throughout the night. Results showed that participants who slept a full night recalled significantly more words than those who napped, who in turn recalled significantly more than sleep-deprived participants. The amount of time spent in NREM Stage 3 (slow-wave sleep) was positively correlated with recall performance.",
    figureId: "sim2-fig5",
  },
  {
    id: "sim2-set3",
    setNum: 3,
    title: "Set 3 \u2014 Research Study: Emotion and Physiological Arousal",
    passage: "A team of psychologists investigated the relationship between physiological arousal and emotional experience. They recruited 80 participants and showed them emotion-eliciting film clips (fear, joy, sadness, or neutral). While watching, participants' heart rate, skin conductance, and facial muscle activity were measured using electromyography (EMG). After each clip, participants rated their emotional experience. Results supported the idea that different emotions produce distinct patterns of physiological arousal. Fear clips produced the highest heart rate and skin conductance increases, while sadness clips produced increased corrugator muscle activity (furrowed brow) without significant heart rate change.",
  },
  {
    id: "sim2-set4",
    setNum: 4,
    title: "Set 4 \u2014 Research Study: Stress Coping and Health Outcomes",
    passage: "Health psychologists conducted a 12-week study examining the effectiveness of different coping strategies on stress reduction in 120 college students during finals. Participants were randomly assigned to three coping groups: problem-focused coping (time management and study skills training), emotion-focused coping (relaxation and mindfulness exercises), and avoidant coping (distraction activities). Self-reported stress was measured at baseline and after the 12-week intervention using a validated stress scale (1-10). The problem-focused group showed the greatest reduction in stress, followed by the emotion-focused group. The avoidant coping group showed minimal improvement.",
    figureId: "sim2-fig1",
  },
  {
    id: "sim2-set5",
    setNum: 5,
    title: "Set 5 \u2014 Research Study: Experimental Design and Statistical Analysis",
    passage: "A research methods class analyzed a published study examining whether background noise affects test performance. The original researchers recruited 200 participants and randomly assigned them to four conditions: silence, white noise, music with lyrics, and music without lyrics. Each participant completed a 30-item math test and a 30-item reading comprehension test. The researchers reported that the effect of noise condition on math performance was statistically significant (p < .01), but the effect on reading comprehension was not significant (p = .23). The interaction between noise type and test type was also significant (p < .05), suggesting that the effect of noise depended on the type of test.",
  },
];

const SIM2_MC = [
  /* === Set 1: Sensation & Perception (Qs 1-15) === */
  { num: 1, set: 1, stem: "In Dr. Kim's study, signal detection theory would predict that the high-motivation condition leads to:", choices: ["A","a more liberal response criterion","B","a more conservative response criterion with fewer false alarms","C","an increase in sensory sensitivity","D","no change in response bias"], answer: "A" },
  { num: 2, set: 1, stem: "Which concept from signal detection theory refers to the minimum amount of stimulation needed to detect a stimulus 50% of the time?", choices: ["A","Difference threshold","B","Absolute threshold","C","Weber's law","D","Signal-to-noise ratio"], answer: "B" },
  { num: 3, set: 1, stem: "Weber's law states that the just noticeable difference (JND) is:", choices: ["A","a constant amount regardless of stimulus intensity","B","a constant proportion of the original stimulus","C","always equal to the absolute threshold","D","inversely proportional to the original stimulus"], answer: "C" },
  { num: 4, set: 1, stem: "A participant in Dr. Kim's study reports seeing a blip when none was present. This is an example of:", choices: ["A","a hit","B","a miss","C","a false alarm","D","a correct rejection"], answer: "A" },
  { num: 5, set: 1, stem: "The Gestalt principle of closure refers to the tendency to:", choices: ["A","group objects that are near each other","B","perceive complete figures even when parts are missing","C","perceive smooth, continuous patterns","D","group similar objects together"], answer: "B" },
  { num: 6, set: 1, stem: "Which theory of color vision best explains why people can see a yellow afterimage after staring at blue?", choices: ["A","Trichromatic theory","B","Place theory","C","Opponent-process theory","D","Feature detection theory"], answer: "C" },
  { num: 7, set: 1, stem: "Sensory adaptation is demonstrated when a person:", choices: ["A","learns to discriminate between two similar stimuli","B","stops noticing a constant odor after prolonged exposure","C","perceives an ambiguous figure in multiple ways","D","detects a faint stimulus in a noisy environment"], answer: "A" },
  { num: 8, set: 1, stem: "Binocular cues for depth perception include:", choices: ["A","linear perspective and texture gradient","B","retinal disparity and convergence","C","relative size and interposition","D","motion parallax and aerial perspective"], answer: "B" },
  { num: 9, set: 1, stem: "The McGurk effect demonstrates that:", choices: ["A","visual information can override auditory perception","B","hearing adapts to background noise","C","the vestibular system influences hearing","D","sound localization depends solely on auditory cues"], answer: "D" },
  { num: 10, set: 1, stem: "In the study, the independent variable is:", choices: ["A","the participants' hit rates","B","the signal strength and motivation level","C","the number of false alarms","D","the duration of the monitoring task"], answer: "A" },
  { num: 11, set: 1, stem: "Transduction of light into neural signals occurs primarily in the:", choices: ["A","cornea","B","lens","C","rods and cones of the retina","D","optic nerve"], answer: "C" },
  { num: 12, set: 1, stem: "The Gestalt principle of proximity predicts that people tend to:", choices: ["A","perceive objects that are close together as a group","B","see continuous patterns rather than discontinuous ones","C","fill in missing information to complete a figure","D","perceive similar objects as belonging together"], answer: "D" },
  { num: 13, set: 1, stem: "A person who cannot perceive pain due to a rare genetic condition would most likely be at risk because:", choices: ["A","pain serves as a warning signal for tissue damage","B","pain enhances sensory adaptation","C","the absence of pain increases perceptual set","D","pain is necessary for signal detection"], answer: "B" },
  { num: 14, set: 1, stem: "Top-down processing is best illustrated by:", choices: ["A","detecting a faint light in a dark room","B","using context to read a misspelled word correctly","C","noticing a loud sound in a quiet environment","D","the physical characteristics of a stimulus determining perception"], answer: "C" },
  { num: 15, set: 1, stem: "Gate-control theory suggests that pain perception can be reduced by:", choices: ["A","increasing attention to the painful stimulus","B","activity in large nerve fibers that close the spinal gate","C","reducing the production of endorphins","D","decreasing the absolute threshold for pain"], answer: "D" },

  /* === Set 2: States of Consciousness (Qs 16-30) === */
  { num: 16, set: 2, stem: "Based on the sleep study, the positive correlation between NREM Stage 3 and recall performance suggests that:", choices: ["A","dreams during REM sleep consolidate memories","B","slow-wave sleep plays a role in declarative memory consolidation","C","sleep deprivation has no effect on procedural memory","D","napping is as effective as full sleep for memory"], answer: "A" },
  { num: 17, set: 2, stem: "During which sleep stage do sleep spindles and K-complexes first appear?", choices: ["A","NREM Stage 1","B","NREM Stage 2","C","NREM Stage 3","D","REM sleep"], answer: "B" },
  { num: 18, set: 2, stem: "The activation-synthesis theory of dreaming proposes that dreams are:", choices: ["A","the brain's attempt to make sense of random neural activity during REM sleep","B","wish fulfillment of unconscious desires","C","a mechanism for processing emotional experiences","D","a direct replay of the day's events"], answer: "C" },
  { num: 19, set: 2, stem: "Hypnosis is most accurately described as:", choices: ["A","a deep sleep state with no awareness","B","a state of focused attention and heightened suggestibility","C","an unconscious state similar to general anesthesia","D","a form of operant conditioning"], answer: "A" },
  { num: 20, set: 2, stem: "Which neurotransmitter system is most directly affected by stimulant drugs such as amphetamines?", choices: ["A","GABA","B","Serotonin","C","Dopamine","D","Acetylcholine"], answer: "B" },
  { num: 21, set: 2, stem: "The sleep study's finding that napping improves memory compared to sleep deprivation supports the:", choices: ["A","restorative theory of sleep","B","information-processing theory of sleep","C","circadian rhythm hypothesis","D","dissociation theory of consciousness"], answer: "D" },
  { num: 22, set: 2, stem: "Alcohol is classified as a depressant because it:", choices: ["A","causes depression in most users","B","slows neural processing and reduces inhibition","C","increases dopamine to dangerous levels","D","primarily affects the sympathetic nervous system"], answer: "A" },
  { num: 23, set: 2, stem: "The suprachiasmatic nucleus (SCN) regulates circadian rhythms by:", choices: ["A","producing melatonin directly","B","responding to light information from the retina","C","controlling the release of cortisol from the adrenal glands","D","activating the parasympathetic nervous system during sleep"], answer: "B" },
  { num: 24, set: 2, stem: "A person who experiences excessive daytime sleepiness and sudden loss of muscle tone is most likely suffering from:", choices: ["A","insomnia","B","sleep apnea","C","narcolepsy","D","REM sleep behavior disorder"], answer: "D" },
  { num: 25, set: 2, stem: "The concept of tolerance in psychopharmacology refers to:", choices: ["A","the ability to use a drug without negative side effects","B","needing increasingly larger doses to achieve the same effect","C","psychological dependence on a substance","D","the body's immediate response to a new drug"], answer: "A" },
  { num: 26, set: 2, stem: "In the sleep study, the dependent variable is:", choices: ["A","the sleep condition assigned to each participant","B","the number of word pairs recalled","C","the use of polysomnography","D","the time of day participants were tested"], answer: "C" },
  { num: 27, set: 2, stem: "Delta waves are most characteristic of:", choices: ["A","alert wakefulness","B","REM sleep","C","NREM Stage 3 (deep sleep)","D","NREM Stage 1"], answer: "D" },
  { num: 28, set: 2, stem: "The dissociation theory of hypnosis, proposed by Hilgard, suggests that hypnosis:", choices: ["A","is entirely a social performance","B","involves a split in consciousness where part of the mind monitors behavior","C","is identical to deep sleep","D","only works on individuals with low intelligence"], answer: "B" },
  { num: 29, set: 2, stem: "Which of the following is a hallucinogen?", choices: ["A","Heroin","B","Cocaine","C","LSD","D","Methamphetamine"], answer: "C" },
  { num: 30, set: 2, stem: "Sleep deprivation has been shown to most significantly impair:", choices: ["A","procedural memory for well-practiced skills","B","automatic processing tasks","C","attention, decision-making, and emotional regulation","D","sensory transduction"], answer: "D" },

  /* === Set 3: Motivation & Emotion (Qs 31-45) === */
  { num: 31, set: 3, stem: "The film clip study's finding that different emotions produce distinct physiological patterns most directly supports:", choices: ["A","the Cannon-Bard theory of emotion","B","the James-Lange theory of emotion","C","the Schachter-Singer two-factor theory","D","the facial feedback hypothesis"], answer: "A" },
  { num: 32, set: 3, stem: "According to drive reduction theory, hunger is best understood as:", choices: ["A","a primary drive that motivates eating to restore homeostasis","B","an incentive that pulls behavior toward food","C","a learned response to environmental cues","D","an arousal state that optimizes performance"], answer: "B" },
  { num: 33, set: 3, stem: "The Schachter-Singer two-factor theory proposes that emotions require:", choices: ["A","only physiological arousal","B","both physiological arousal and cognitive interpretation","C","only cognitive appraisal without physiological change","D","facial expressions to determine the emotion"], answer: "C" },
  { num: 34, set: 3, stem: "According to Maslow's hierarchy, a person who has satisfied physiological and safety needs would next be motivated by:", choices: ["A","esteem needs","B","self-actualization needs","C","belongingness and love needs","D","cognitive needs"], answer: "A" },
  { num: 35, set: 3, stem: "The facial feedback hypothesis suggests that:", choices: ["A","we recognize emotions by observing others' faces","B","facial expressions can influence emotional experience","C","facial expressions are universal across cultures","D","cognitive appraisal always precedes facial expressions"], answer: "B" },
  { num: 36, set: 3, stem: "In the film clip study, which physiological measure best distinguished fear from sadness?", choices: ["A","Corrugator muscle activity","B","Heart rate and skin conductance","C","Pupil dilation","D","Respiratory rate"], answer: "D" },
  { num: 37, set: 3, stem: "The Yerkes-Dodson law predicts that performance on a difficult task is optimal at:", choices: ["A","high levels of arousal","B","low to moderate levels of arousal","C","the highest possible level of arousal","D","no arousal"], answer: "A" },
  { num: 38, set: 3, stem: "Intrinsic motivation is best defined as:", choices: ["A","behavior driven by external rewards or punishments","B","behavior driven by internal satisfaction or interest","C","the physiological need to maintain homeostasis","D","the instinctive drive to survive and reproduce"], answer: "C" },
  { num: 39, set: 3, stem: "The set-point theory of weight regulation suggests that:", choices: ["A","weight is entirely determined by caloric intake","B","the body has a natural weight range it works to maintain","C","psychological factors have no influence on eating behavior","D","metabolism is constant regardless of eating patterns"], answer: "D" },
  { num: 40, set: 3, stem: "Paul Ekman's research demonstrated that:", choices: ["A","emotional expressions vary completely across cultures","B","certain basic emotional expressions are universally recognized","C","emotions are entirely learned through social modeling","D","facial expressions play no role in emotional experience"], answer: "B" },
  { num: 41, set: 3, stem: "A student who studies hard because they find the subject genuinely fascinating is demonstrating:", choices: ["A","extrinsic motivation","B","overjustification effect","C","intrinsic motivation","D","drive reduction"], answer: "C" },
  { num: 42, set: 3, stem: "The overjustification effect occurs when:", choices: ["A","a person becomes more motivated after receiving unexpected rewards","B","external rewards decrease intrinsic motivation for an activity","C","arousal increases performance on simple tasks","D","physiological needs override psychological needs"], answer: "D" },
  { num: 43, set: 3, stem: "Which brain structure plays a key role in processing fear and threat detection?", choices: ["A","Hippocampus","B","Amygdala","C","Cerebellum","D","Corpus callosum"], answer: "B" },
  { num: 44, set: 3, stem: "Achievement motivation is highest in individuals who tend to:", choices: ["A","set extremely easy goals to ensure success","B","avoid all challenging situations","C","prefer tasks of moderate difficulty that offer a realistic challenge","D","set impossible goals to maximize effort"], answer: "C" },
  { num: 45, set: 3, stem: "The Garcia effect (conditioned taste aversion) challenges traditional learning theory because:", choices: ["A","it requires many pairings to establish the association","B","it can be established with a single pairing and long delay between CS and US","C","it only occurs with visual stimuli","D","it cannot be extinguished"], answer: "D" },

  /* === Set 4: Stress & Health Psychology (Qs 46-60) === */
  { num: 46, set: 4, stem: "In the coping study, which group showed the greatest reduction in stress?", choices: ["A","Problem-focused coping group","B","Emotion-focused coping group","C","Avoidant coping group","D","All groups showed equal reduction"], answer: "A" },
  { num: 47, set: 4, stem: "The general adaptation syndrome (GAS) includes which stages in order?", choices: ["A","Fight, flight, freeze","B","Denial, anger, acceptance","C","Alarm, resistance, exhaustion","D","Acute, subacute, chronic"], answer: "B" },
  { num: 48, set: 4, stem: "Type A personality is characterized by:", choices: ["A","relaxed, easygoing behavior","B","competitive, time-urgent, and hostile behavior","C","introverted and analytical thinking","D","high agreeableness and low neuroticism"], answer: "C" },
  { num: 49, set: 4, stem: "Biofeedback is a technique that:", choices: ["A","provides individuals with information about physiological processes to gain voluntary control","B","uses medication to reduce anxiety symptoms","C","involves systematic exposure to feared stimuli","D","measures brain wave patterns during sleep"], answer: "A" },
  { num: 50, set: 4, stem: "Psychoneuroimmunology studies the relationship between:", choices: ["A","personality types and career success","B","psychological factors, the nervous system, and immune function","C","psychoactive drugs and consciousness","D","motivation and achievement"], answer: "B" },
  { num: 51, set: 4, stem: "The coping study used random assignment, which means:", choices: ["A","participants chose which coping group to join","B","the researchers assigned participants to groups to minimize pre-existing differences","C","only a random subset of participants completed the study","D","the outcome measures were randomly selected"], answer: "D" },
  { num: 52, set: 4, stem: "Learned helplessness, as demonstrated by Seligman, occurs when:", choices: ["A","organisms learn to control their environment through positive reinforcement","B","organisms give up trying after repeated exposure to uncontrollable events","C","organisms become more persistent after facing challenges","D","organisms develop phobias through classical conditioning"], answer: "A" },
  { num: 53, set: 4, stem: "The concept of hardiness includes all of the following EXCEPT:", choices: ["A","commitment","B","control","C","challenge","D","conformity"], answer: "C" },
  { num: 54, set: 4, stem: "Social support is beneficial during stress because it:", choices: ["A","eliminates all sources of stress","B","provides emotional, informational, and tangible resources","C","reduces the need for any coping strategies","D","increases sympathetic nervous system arousal"], answer: "D" },
  { num: 55, set: 4, stem: "Health psychology emphasizes that illness is influenced by:", choices: ["A","only biological factors","B","only environmental factors","C","the interaction of biological, psychological, and social factors","D","only genetic predispositions"], answer: "A" },
  { num: 56, set: 4, stem: "Which hormone is most associated with the body's stress response?", choices: ["A","Melatonin","B","Insulin","C","Cortisol","D","Oxytocin"], answer: "C" },
  { num: 57, set: 4, stem: "Emotion-focused coping is most effective when:", choices: ["A","the stressor can be directly changed or eliminated","B","the stressor is beyond one's control","C","the person has strong social support","D","the stressor is related to work performance"], answer: "D" },
  { num: 58, set: 4, stem: "A limitation of the coping study is that stress was measured by:", choices: ["A","cortisol blood tests","B","physiological markers","C","self-report, which may be subject to response bias","D","observer ratings"], answer: "B" },
  { num: 59, set: 4, stem: "The tend-and-befriend response to stress is more commonly observed in:", choices: ["A","men under acute stress","B","women, possibly due to the hormone oxytocin","C","individuals with Type A personality","D","elderly populations"], answer: "C" },
  { num: 60, set: 4, stem: "Burnout is characterized by all of the following EXCEPT:", choices: ["A","emotional exhaustion","B","depersonalization","C","increased sense of personal accomplishment","D","reduced personal accomplishment"], answer: "D" },

  /* === Set 5: Research Methods & Statistics (Qs 61-75) === */
  { num: 61, set: 5, stem: "In the noise study, the finding that the interaction was significant (p < .05) means:", choices: ["A","the main effects must also be significant","B","the effect of noise type differed depending on the type of test","C","noise always impairs test performance","D","the results are not practically meaningful"], answer: "A" },
  { num: 62, set: 5, stem: "A correlation coefficient of r = -0.85 indicates:", choices: ["A","a weak positive relationship","B","a strong negative relationship","C","no relationship between variables","D","a causal relationship"], answer: "B" },
  { num: 63, set: 5, stem: "In the noise study, random assignment was used to:", choices: ["A","ensure the sample was representative of the population","B","increase the reliability of the test measures","C","control for confounding variables between groups","D","guarantee significant results"], answer: "C" },
  { num: 64, set: 5, stem: "A test with high reliability but low validity:", choices: ["A","measures the intended construct accurately but inconsistently","B","produces consistent results but does not measure what it claims to measure","C","is both accurate and consistent","D","cannot be standardized"], answer: "A" },
  { num: 65, set: 5, stem: "The null hypothesis in the noise study would state that:", choices: ["A","noise significantly affects test performance","B","there is no effect of noise condition on test performance","C","music with lyrics impairs reading comprehension","D","silence produces the best performance"], answer: "B" },
  { num: 66, set: 5, stem: "Which measure of central tendency is most affected by extreme scores?", choices: ["A","Mode","B","Median","C","Mean","D","Range"], answer: "C" },
  { num: 67, set: 5, stem: "A researcher who knows which participants are in the experimental group might inadvertently treat them differently. This threat is best addressed by:", choices: ["A","random sampling","B","a single-blind procedure","C","a double-blind procedure","D","stratified sampling"], answer: "A" },
  { num: 68, set: 5, stem: "Standard deviation is a measure of:", choices: ["A","central tendency","B","the average score in a distribution","C","the variability or spread of scores around the mean","D","the correlation between two variables"], answer: "B" },
  { num: 69, set: 5, stem: "A Type I error occurs when a researcher:", choices: ["A","fails to reject a false null hypothesis","B","rejects a true null hypothesis","C","replicates a previous study","D","uses an unreliable measure"], answer: "D" },
  { num: 70, set: 5, stem: "The principle of informed consent requires that participants:", choices: ["A","receive payment for their participation","B","be told the exact hypothesis before the study","C","be given enough information to make a voluntary decision about participation","D","agree to any procedures the researcher deems necessary"], answer: "A" },
  { num: 71, set: 5, stem: "In a positively skewed distribution:", choices: ["A","the mean is less than the median","B","the mean equals the median","C","the mean is greater than the median","D","the mode is greater than the mean"], answer: "C" },
  { num: 72, set: 5, stem: "A confounding variable is:", choices: ["A","the variable that is deliberately manipulated","B","an extraneous variable that systematically varies with the independent variable","C","the measured outcome of the experiment","D","a variable held constant across conditions"], answer: "D" },
  { num: 73, set: 5, stem: "Which research method allows researchers to establish cause-and-effect relationships?", choices: ["A","Case study","B","Naturalistic observation","C","Correlational study","D","Experiment"], answer: "B" },
  { num: 74, set: 5, stem: "The Institutional Review Board (IRB) is responsible for:", choices: ["A","publishing research findings","B","reviewing research proposals to protect human participants","C","funding psychological research","D","replicating experiments"], answer: "C" },
  { num: 75, set: 5, stem: "If the p-value for the noise study's main effect on math was p < .01, this means:", choices: ["A","there is a 99% chance the noise caused the effect","B","the probability of obtaining these results if the null hypothesis were true is less than 1%","C","the effect size is large","D","the results will replicate in every future study"], answer: "D" },
];

const SIM2_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "The Effects of an 8-Week Mindfulness Meditation Program on Salivary Cortisol Levels and Perceived Stress in College Students",
    citation: "Chen, L., Nakamura, T., & Patel, R. (2022). Journal of Health Psychology, 28(3), 412-425.",
    introduction: "This research study examines whether a structured mindfulness meditation program reduces physiological markers of stress, specifically salivary cortisol levels, in college students during a high-stress academic period.",
    participants: "A total of 84 undergraduate students at a mid-sized public university were recruited through flyers posted around campus. They participated voluntarily and received no compensation. The final sample was 58% women and 42% men. Race/ethnicity: 45% White/European American, 28% Asian/Asian American, 15% Hispanic/Latino/a, 8% Black/African American, and 4% Other. Age range: 18-24 (mean = 20.3, SD = 1.52).",
    method: "After providing informed consent, participants were randomly assigned to either the mindfulness meditation group (n = 42) or the waitlist control group (n = 42). The mindfulness group attended three 45-minute guided meditation sessions per week for 8 weeks. Sessions included body scan meditation, focused breathing, and loving-kindness meditation. The control group continued their regular routines and was offered the program after the study concluded.\n\nSalivary cortisol samples were collected weekly at the same time of day (9:00 AM) to control for circadian variation. Participants also completed the Perceived Stress Scale (PSS) at baseline, 4 weeks, and 8 weeks. Participants who missed more than two sessions were excluded from the final analysis.",
    results: "The mindfulness meditation group showed a significant decrease in cortisol levels over the 8-week period (from 18.2 nmol/L to 12.6 nmol/L), while the control group remained relatively stable (from 18.0 nmol/L to 18.0 nmol/L). PSS scores also decreased significantly in the meditation group compared to the control group. The difference between groups was statistically significant at week 4 (p < .05) and week 8 (p < .01).",
    dataTable: {
      title: "Mean Salivary Cortisol Levels (nmol/L) by Group Across 8 Weeks",
      headers: ["Week", "Mindfulness Group", "Control Group"],
      rows: [
        ["Baseline", "18.2", "18.0"],
        ["Week 4", "15.1", "18.0"],
        ["Week 8", "12.6", "18.0"],
      ],
    },
    footnotes: [
      "Salivary cortisol is a biomarker commonly used to measure physiological stress. Higher levels indicate greater stress activation.",
      "The Perceived Stress Scale (PSS) is a self-report measure that assesses the degree to which situations in one's life are appraised as stressful.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of stress reduction in the study." },
    { letter: "C", prompt: "Describe what the data indicate about cortisol levels in the mindfulness group compared to the control group at week 8." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the biopsychosocial model of health." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies the research method as an experiment (random assignment to conditions)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that stress reduction was operationally defined as a decrease in salivary cortisol levels and/or PSS scores over the 8-week period." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that the mindfulness group's cortisol decreased from 18.2 to 12.6 nmol/L while the control group remained at approximately 18.0 nmol/L, indicating the meditation program reduced physiological stress." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies informed consent, voluntary participation, or offering the program to the control group after the study." },
    { row: "E", category: "Generalizability", points: 1, description: "Uses specific participant demographics (college students, specific age range, racial composition) to evaluate generalizability." },
    { row: "F", category: "Argumentation", points: 2, description: "Full credit requires citing specific evidence AND explaining how the findings support or refute the biopsychosocial model (e.g., psychological intervention affecting biological markers)." },
  ],
};

const SIM2_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "The role of sleep in memory consolidation",
  instructions: "Using the sources provided, develop and justify an argument about the role of sleep in memory consolidation.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "Sleep-Dependent Memory Consolidation and the Role of Slow-Wave Sleep",
      citation: "Marshall, L., & Born, J. (2007). Trends in Cognitive Sciences, 11(10), 442-450.",
      summary: "Researchers reviewed evidence showing that slow-wave sleep (SWS) plays a critical role in consolidating declarative memories. During SWS, the hippocampus replays newly acquired memory traces, gradually transferring them to neocortical networks for long-term storage. Studies showed that participants who were selectively deprived of SWS showed impaired recall of word pairs learned before sleep, while their procedural memory remained relatively intact.",
    },
    {
      num: 2,
      title: "REM Sleep and Emotional Memory Processing",
      citation: "Walker, M. P., & van der Helm, E. (2009). Current Directions in Psychological Science, 18(2), 84-88.",
      summary: "This review found that REM sleep serves a unique function in processing emotional memories. Participants who slept (with normal REM periods) showed reduced emotional reactivity to negative images viewed previously, compared to those who stayed awake. The researchers proposed that REM sleep allows the brain to reprocess emotional experiences, retaining the informational content while reducing the emotional charge. Sleep-deprived participants showed increased amygdala reactivity (60% increase) when viewing negative images.",
    },
    {
      num: 3,
      title: "Napping and Its Effects on Declarative and Procedural Memory",
      citation: "Mednick, S. C., Nakayama, K., & Stickgold, R. (2003). Nature Neuroscience, 6(7), 697-698.",
      summary: "Researchers tested whether a 60-90 minute nap could benefit memory similarly to a full night of sleep. Participants learned a visual texture discrimination task (procedural) and a word-pair association task (declarative). Those who napped showed significant improvement on the texture task and maintained performance on word pairs, while non-nappers showed declining performance across the day. Naps containing both SWS and REM produced the greatest benefits.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific and defensible claim about sleep's role in memory consolidation." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited, specific evidence from two different sources to support the claim." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains how evidence supports the claim using AP Psychology concepts such as declarative vs. procedural memory, hippocampal consolidation, or information-processing theory of sleep." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim through psychological theory." },
  ],
};

const SIM2 = {
  id: "sim2",
  title: "Simulation 2 \u2014 Full Exam",
  badge: "Sim",
  hasMC: true,
  mcSets: SIM2_MC_SETS,
  mc: SIM2_MC,
  frqs: [SIM2_AAQ, SIM2_EBQ],
  figures: SIM2_FIGURES,
};

/* ═══════════════════════════════════════════════════════════════════
   SIMULATION 3
   ═══════════════════════════════════════════════════════════════════ */

const SIM3_FIGURES = {
  "sim3-fig1": {
    type: "groupedBar",
    title: "Mean Attention Score by Screen Time and Age Group",
    xLabel: "Daily Screen Time",
    yLabel: "Attention Score (out of 100)",
    legendLabels: ["Ages 6-8", "Ages 9-12"],
    colors: ["#a78bfa", "#f59e0b"],
    groups: [
      { label: "< 1 hour", values: [85, 88], suffix: "" },
      { label: "1-3 hours", values: [78, 82], suffix: "" },
      { label: "> 3 hours", values: [64, 71], suffix: "" },
    ],
  },
  "sim3-fig2": {
    type: "line",
    title: "Ebbinghaus Forgetting Curve",
    xLabel: "Time After Learning",
    yLabel: "% Retained",
    xLabels: ["0", "20 min", "1 hr", "9 hr", "1 day", "2 days", "6 days", "31 days"],
    series: [
      { label: "Retention", data: [100, 58, 44, 36, 33, 28, 25, 21], color: "#ef4444" },
    ],
  },
  "sim3-fig3": {
    type: "bar",
    title: "Mean IQ Scores by Rearing Condition",
    xLabel: "Rearing Condition",
    yLabel: "Mean IQ Score",
    data: [
      { label: "Enriched\nEnvironment", value: 112 },
      { label: "Standard\nEnvironment", value: 100 },
      { label: "Deprived\nEnvironment", value: 87 },
    ],
  },
  "sim3-fig4": {
    type: "table",
    title: "Neurotransmitter Involvement in Psychological Disorders",
    headers: ["Disorder", "Neurotransmitter", "Direction of Change"],
    rows: [
      ["Schizophrenia", "Dopamine", "Excess activity"],
      ["Depression", "Serotonin/Norepinephrine", "Deficiency"],
      ["Anxiety Disorders", "GABA", "Deficiency"],
      ["Parkinson's Disease", "Dopamine", "Deficiency"],
      ["Alzheimer's Disease", "Acetylcholine", "Deficiency"],
    ],
  },
  "sim3-fig5": {
    type: "groupedBar",
    title: "Attachment Styles in the Strange Situation",
    xLabel: "Attachment Style",
    yLabel: "% of Infants",
    legendLabels: ["American Sample", "Japanese Sample"],
    colors: ["#3b82f6", "#ec4899"],
    groups: [
      { label: "Secure", values: [62, 68], suffix: "%" },
      { label: "Avoidant", values: [23, 5], suffix: "%" },
      { label: "Anxious/\nAmbivalent", values: [15, 27], suffix: "%" },
    ],
  },
};

const SIM3_MC_SETS = [
  {
    id: "sim3-set1",
    setNum: 1,
    title: "Set 1 \u2014 Research Study: Neuroplasticity After Brain Injury",
    passage: "Researchers studied neuroplasticity in 50 patients who had suffered left-hemisphere strokes affecting their language areas. Patients were randomly assigned to intensive speech therapy (3 hours daily for 6 weeks) or standard care (1 hour weekly). Brain imaging (fMRI) was conducted before and after treatment. Results showed that the intensive therapy group demonstrated significantly greater language recovery, with fMRI revealing increased activation in right-hemisphere homologous regions. Younger patients (under 50) showed greater neuroplastic changes than older patients. The findings suggest the brain can reorganize neural pathways to compensate for damage, particularly with intensive early intervention.",
  },
  {
    id: "sim3-set2",
    setNum: 2,
    title: "Set 2 \u2014 Research Study: Taste Aversion and Latent Learning",
    passage: "Two classic learning phenomena were examined in a series of experiments. In the first experiment, rats were given a novel flavored solution followed by nausea-inducing radiation. After a single pairing, the rats avoided the flavored solution, demonstrating conditioned taste aversion. In the second experiment, three groups of rats navigated a maze over 10 days. Group 1 received food rewards from day 1, Group 2 received no rewards, and Group 3 received no rewards for days 1-10, then received rewards on days 11-17. Group 3 showed a dramatic decrease in errors on day 11, performing nearly as well as Group 1 by day 12, suggesting they had formed cognitive maps during the unrewarded trials.",
  },
  {
    id: "sim3-set3",
    setNum: 3,
    title: "Set 3 \u2014 Research Study: Serial Position Effect and Memory",
    passage: "Memory researchers investigated the serial position effect by presenting 80 participants with lists of 20 words at a rate of one word per second. After a 30-second delay filled with a distractor task (counting backwards), participants recalled as many words as possible. Results showed the classic U-shaped serial position curve: the first four words (primacy effect) and the last four words (recency effect) were recalled significantly better than middle-list words. When the delay was increased to 60 seconds, the recency effect disappeared while the primacy effect remained. This pattern supports the multi-store model of memory, which distinguishes between short-term and long-term memory storage.",
    figureId: "sim3-fig2",
  },
  {
    id: "sim3-set4",
    setNum: 4,
    title: "Set 4 \u2014 Research Study: Cross-Cultural Attachment Patterns",
    passage: "Developmental psychologists compared attachment patterns in American and Japanese infants using Ainsworth's Strange Situation. The researchers observed 60 American and 60 Japanese mother-infant pairs when infants were 12 months old. While both cultures showed a majority of securely attached infants, there were notable differences in insecure attachment styles. American infants were more likely to be classified as avoidant (23% vs. 5%), while Japanese infants were more likely to be classified as anxious/ambivalent (27% vs. 15%). The researchers noted that cultural practices, such as the rarity of mother-infant separation in Japanese culture, likely influenced these differences.",
    figureId: "sim3-fig5",
  },
  {
    id: "sim3-set5",
    setNum: 5,
    title: "Set 5 \u2014 Research Study: Diagnostic Reliability in Abnormal Psychology",
    passage: "A study examined the inter-rater reliability of DSM-5 diagnoses by having 30 clinical psychologists independently evaluate the same set of 50 patient case files. Each psychologist assigned diagnoses using DSM-5 criteria. Reliability was measured using Cohen's kappa coefficient. Results showed high reliability for schizophrenia spectrum disorders (kappa = 0.82) and bipolar disorder (kappa = 0.76), but lower reliability for generalized anxiety disorder (kappa = 0.54) and personality disorders (kappa = 0.47). The researchers concluded that diagnostic reliability varies considerably across disorder categories, raising concerns about the validity of less reliable diagnoses.",
    figureId: "sim3-fig4",
  },
];

const SIM3_MC = [
  /* === Set 1: Neuroscience & Brain (Qs 1-15) === */
  { num: 1, set: 1, stem: "The stroke study's finding that right-hemisphere regions became more active after left-hemisphere damage demonstrates:", choices: ["A","neuroplasticity and cortical reorganization","B","the all-or-none law of neural firing","C","the role of myelin in neural transmission","D","hemispheric specialization is absolute"], answer: "A" },
  { num: 2, set: 1, stem: "Which brain structure serves as the primary relay station for sensory information?", choices: ["A","Hypothalamus","B","Thalamus","C","Cerebellum","D","Medulla"], answer: "B" },
  { num: 3, set: 1, stem: "The endocrine system communicates through:", choices: ["A","electrical impulses along neurons","B","neurotransmitter release at synapses","C","hormones released into the bloodstream","D","reflexive arcs in the spinal cord"], answer: "C" },
  { num: 4, set: 1, stem: "In the stroke study, the independent variable was:", choices: ["A","the amount of language recovery","B","the patients' ages","C","fMRI activation patterns","D","the type of therapy (intensive vs. standard)"], answer: "D" },
  { num: 5, set: 1, stem: "The finding that younger patients showed greater neuroplastic changes supports the concept of:", choices: ["A","critical periods in brain development","B","the absolute refractory period","C","terminal buttons","D","lateralization being fixed at birth"], answer: "A" },
  { num: 6, set: 1, stem: "During an action potential, sodium ions:", choices: ["A","flow out of the neuron","B","rush into the neuron, causing depolarization","C","are actively pumped during the resting state","D","have no role in neural transmission"], answer: "B" },
  { num: 7, set: 1, stem: "The corpus callosum connects:", choices: ["A","the frontal and parietal lobes","B","the brain and spinal cord","C","the left and right cerebral hemispheres","D","the cerebellum and brainstem"], answer: "C" },
  { num: 8, set: 1, stem: "Which neurotransmitter is primarily involved in muscle contraction and is deficient in Alzheimer's disease?", choices: ["A","Serotonin","B","Dopamine","C","GABA","D","Acetylcholine"], answer: "D" },
  { num: 9, set: 1, stem: "The pituitary gland is sometimes called the 'master gland' because it:", choices: ["A","regulates the circadian rhythm","B","controls the release of hormones from other endocrine glands","C","produces all neurotransmitters","D","is the largest endocrine gland"], answer: "A" },
  { num: 10, set: 1, stem: "Broca's area is primarily responsible for:", choices: ["A","understanding spoken language","B","speech production","C","visual processing","D","emotional regulation"], answer: "B" },
  { num: 11, set: 1, stem: "The myelin sheath increases the speed of neural transmission by:", choices: ["A","producing more neurotransmitters","B","increasing the diameter of the axon","C","allowing electrical impulses to jump between nodes of Ranvier","D","reducing the refractory period to zero"], answer: "C" },
  { num: 12, set: 1, stem: "Damage to the cerebellum would most likely result in problems with:", choices: ["A","coordination, balance, and motor learning","B","language comprehension","C","emotional processing","D","memory consolidation"], answer: "A" },
  { num: 13, set: 1, stem: "The sympathetic nervous system activates the fight-or-flight response, while the parasympathetic nervous system:", choices: ["A","intensifies the stress response","B","controls voluntary muscle movements","C","promotes rest-and-digest functions","D","processes sensory information"], answer: "B" },
  { num: 14, set: 1, stem: "An fMRI measures brain activity by detecting:", choices: ["A","electrical activity on the scalp","B","changes in blood oxygenation levels","C","radioactive tracer uptake","D","magnetic properties of skull bones"], answer: "C" },
  { num: 15, set: 1, stem: "The hypothalamus plays a key role in regulating:", choices: ["A","language production","B","visual processing","C","spatial navigation","D","hunger, thirst, body temperature, and circadian rhythms"], answer: "D" },

  /* === Set 2: Learning (Qs 16-30) === */
  { num: 16, set: 2, stem: "The conditioned taste aversion study demonstrates that:", choices: ["A","classical conditioning can occur with a single pairing and long CS-US interval","B","operant conditioning requires immediate reinforcement","C","learning always requires multiple trials","D","taste aversion cannot be classically conditioned"], answer: "A" },
  { num: 17, set: 2, stem: "In the latent learning experiment, Group 3's sudden improvement on day 11 suggests:", choices: ["A","reinforcement is always necessary for learning","B","learning can occur without reinforcement but may not be demonstrated until motivated","C","extinction occurred during the unrewarded trials","D","the rats had no knowledge of the maze before day 11"], answer: "B" },
  { num: 18, set: 2, stem: "Tolman's concept of cognitive maps challenges strict behaviorism because it suggests that:", choices: ["A","learning is purely stimulus-response","B","reinforcement is the only factor in learning","C","organisms form mental representations of their environment","D","classical conditioning explains all spatial learning"], answer: "C" },
  { num: 19, set: 2, stem: "A token economy used in a psychiatric hospital is based on the principles of:", choices: ["A","classical conditioning","B","psychoanalytic theory","C","cognitive learning theory","D","operant conditioning"], answer: "D" },
  { num: 20, set: 2, stem: "Learned helplessness occurs when an organism:", choices: ["A","learns a new skill through observation","B","receives reinforcement on a variable schedule","C","acquires a phobia through classical conditioning","D","stops trying to escape after repeated uncontrollable aversive events"], answer: "A" },
  { num: 21, set: 2, stem: "In taste aversion, the fact that nausea becomes associated with taste rather than with visual or auditory cues demonstrates:", choices: ["A","equipotentiality","B","biological preparedness in learning","C","stimulus generalization","D","spontaneous recovery"], answer: "B" },
  { num: 22, set: 2, stem: "A child who avoids touching a hot stove after being burned once is demonstrating:", choices: ["A","classical conditioning","B","latent learning","C","observational learning","D","one-trial learning through punishment"], answer: "D" },
  { num: 23, set: 2, stem: "Bandura's Bobo doll experiment demonstrated that children:", choices: ["A","only learn through direct reinforcement","B","cannot learn aggressive behaviors from models","C","learn and imitate aggressive behavior by observing adult models","D","require rewards to display learned behaviors"], answer: "C" },
  { num: 24, set: 2, stem: "Shaping in operant conditioning involves:", choices: ["A","punishing unwanted behaviors","B","reinforcing successive approximations of a target behavior","C","presenting the CS without the US","D","blocking conditioned responses"], answer: "A" },
  { num: 25, set: 2, stem: "In classical conditioning, the unconditioned response (UR) is:", choices: ["A","a learned reaction to a previously neutral stimulus","B","a natural, unlearned reaction to the unconditioned stimulus","C","the stimulus that naturally triggers a response","D","the neutral stimulus before conditioning"], answer: "B" },
  { num: 26, set: 2, stem: "Extinction in operant conditioning occurs when:", choices: ["A","a behavior increases after punishment","B","a conditioned stimulus is paired with a new unconditioned stimulus","C","spontaneous recovery eliminates the learned response","D","reinforcement for a behavior is discontinued and the behavior decreases"], answer: "D" },
  { num: 27, set: 2, stem: "A variable-interval schedule of reinforcement provides reinforcement for:", choices: ["A","the first response after a fixed number of responses","B","every response","C","the first response after varying amounts of time","D","a set number of responses that changes"], answer: "A" },
  { num: 28, set: 2, stem: "The concept of instinctive drift suggests that:", choices: ["A","all animals can be trained to perform any behavior","B","biological predispositions can interfere with conditioned behaviors","C","instincts have no influence on learning","D","only human learning is affected by biology"], answer: "B" },
  { num: 29, set: 2, stem: "Higher-order conditioning involves:", choices: ["A","pairing a new neutral stimulus with an established conditioned stimulus","B","directly pairing two unconditioned stimuli","C","using punishment to suppress a conditioned response","D","reinforcing only the closest approximation to the target behavior"], answer: "C" },
  { num: 30, set: 2, stem: "A fixed-ratio schedule would be best exemplified by:", choices: ["A","a person checking email at random intervals","B","receiving a paycheck every two weeks","C","a slot machine paying out unpredictably","D","getting paid for every 10 items assembled"], answer: "D" },

  /* === Set 3: Memory (Qs 31-45) === */
  { num: 31, set: 3, stem: "The finding that the primacy effect persisted after a longer delay while the recency effect disappeared supports the distinction between:", choices: ["A","explicit and implicit memory","B","short-term memory and long-term memory","C","episodic and semantic memory","D","retrograde and anterograde amnesia"], answer: "B" },
  { num: 32, set: 3, stem: "The serial position effect demonstrates that people tend to:", choices: ["A","remember items from the beginning and end of a list better than middle items","B","recall the most emotionally significant items first","C","remember all items equally when given enough time","D","forget items in a random pattern"], answer: "A" },
  { num: 33, set: 3, stem: "Flashbulb memories are:", choices: ["A","always perfectly accurate recordings of events","B","vivid, detailed memories of emotionally significant events that may contain inaccuracies","C","a type of procedural memory","D","memories that fade within seconds"], answer: "C" },
  { num: 34, set: 3, stem: "According to Ebbinghaus's forgetting curve, the greatest amount of forgetting occurs:", choices: ["A","gradually over many years","B","at a constant rate over time","C","most rapidly shortly after learning, then levels off","D","only after sleep deprivation"], answer: "D" },
  { num: 35, set: 3, stem: "The multi-store model of memory proposes that information flows from:", choices: ["A","long-term memory to sensory memory to short-term memory","B","sensory memory to short-term memory to long-term memory","C","working memory directly to implicit memory","D","procedural memory to declarative memory"], answer: "B" },
  { num: 36, set: 3, stem: "Retroactive interference occurs when:", choices: ["A","old information interferes with learning new information","B","new information interferes with retrieval of old information","C","memories decay over time without interference","D","encoding failure prevents memory formation"], answer: "C" },
  { num: 37, set: 3, stem: "The spacing effect demonstrates that:", choices: ["A","massed practice is superior to distributed practice","B","studying all at once produces the best results","C","distributed practice over time leads to better retention than massed practice","D","the amount of time studying does not affect recall"], answer: "D" },
  { num: 38, set: 3, stem: "Semantic memory stores:", choices: ["A","personal experiences and events","B","general knowledge and facts","C","motor skills and habits","D","sensory impressions lasting milliseconds"], answer: "A" },
  { num: 39, set: 3, stem: "In the serial position study, the distractor task was used to:", choices: ["A","increase participant motivation","B","test procedural memory","C","prevent rehearsal and clear short-term memory","D","improve encoding of the word list"], answer: "C" },
  { num: 40, set: 3, stem: "The misinformation effect, studied by Loftus, demonstrates that:", choices: ["A","memory is always accurate for emotional events","B","post-event information can alter memories of the original event","C","leading questions have no effect on eyewitness testimony","D","memories are stored as exact recordings"], answer: "D" },
  { num: 41, set: 3, stem: "Chunking improves short-term memory by:", choices: ["A","increasing the absolute capacity of short-term memory","B","organizing information into meaningful units to hold more","C","transferring information directly to long-term memory","D","eliminating the need for rehearsal"], answer: "B" },
  { num: 42, set: 3, stem: "Source amnesia refers to:", choices: ["A","forgetting where, when, or how information was acquired","B","being unable to form new memories","C","losing memories from before a traumatic event","D","remembering false events as real"], answer: "A" },
  { num: 43, set: 3, stem: "Proactive interference occurs when:", choices: ["A","new learning disrupts recall of old information","B","old information disrupts recall of new information","C","memories are not encoded in the first place","D","retrieval cues are always effective"], answer: "C" },
  { num: 44, set: 3, stem: "Procedural memory is a type of:", choices: ["A","explicit memory","B","episodic memory","C","semantic memory","D","implicit memory"], answer: "D" },
  { num: 45, set: 3, stem: "The encoding specificity principle states that:", choices: ["A","all retrieval cues are equally effective","B","memory retrieval is most effective when the retrieval context matches the encoding context","C","encoding always requires conscious effort","D","context has no effect on memory retrieval"], answer: "B" },

  /* === Set 4: Developmental Psychology (Qs 46-60) === */
  { num: 46, set: 4, stem: "The cross-cultural attachment study found that Japanese infants showed more anxious/ambivalent attachment, most likely because:", choices: ["A","Japanese infants are genetically more anxious","B","Japanese caregiving practices involve less mother-infant separation","C","the Strange Situation is culturally biased toward Western norms","D","both B and C are plausible explanations"], answer: "A" },
  { num: 47, set: 4, stem: "According to Vygotsky, scaffolding refers to:", choices: ["A","the biological maturation of cognitive abilities","B","a child's private speech during problem-solving","C","temporary support provided by a more skilled person to help a learner","D","the stage of formal operational thinking"], answer: "C" },
  { num: 48, set: 4, stem: "Piaget's concept of assimilation involves:", choices: ["A","modifying existing schemas to incorporate new information","B","interpreting new information in terms of existing schemas","C","creating entirely new schemas from scratch","D","abandoning old schemas permanently"], answer: "D" },
  { num: 49, set: 4, stem: "According to Erikson, the primary challenge of young adulthood is:", choices: ["A","identity vs. role confusion","B","generativity vs. stagnation","C","integrity vs. despair","D","intimacy vs. isolation"], answer: "B" },
  { num: 50, set: 4, stem: "Ainsworth's Strange Situation primarily measures:", choices: ["A","infant attachment security based on reunion behavior with the caregiver","B","the infant's cognitive development","C","the infant's temperament independent of caregiving","D","language development milestones"], answer: "A" },
  { num: 51, set: 4, stem: "Vygotsky's zone of proximal development is the range between:", choices: ["A","sensorimotor and preoperational stages","B","what a child can do alone and what they can do with guidance","C","concrete and formal operations","D","assimilation and accommodation"], answer: "C" },
  { num: 52, set: 4, stem: "Cross-sectional studies of aging are limited because they:", choices: ["A","take too long to complete","B","require following the same participants over time","C","may confound age effects with cohort effects","D","can only study one age group at a time"], answer: "D" },
  { num: 53, set: 4, stem: "Object permanence develops during Piaget's:", choices: ["A","sensorimotor stage","B","preoperational stage","C","concrete operational stage","D","formal operational stage"], answer: "A" },
  { num: 54, set: 4, stem: "Kohlberg's postconventional level of moral reasoning is characterized by:", choices: ["A","obedience to avoid punishment","B","conformity to social expectations","C","reasoning based on self-chosen ethical principles","D","seeking rewards and approval from others"], answer: "C" },
  { num: 55, set: 4, stem: "Harlow's monkey experiments demonstrated that:", choices: ["A","food is the primary basis for infant attachment","B","contact comfort was more important than feeding for attachment","C","wire mothers produced securely attached infants","D","monkeys cannot form attachments to inanimate objects"], answer: "D" },
  { num: 56, set: 4, stem: "The cross-cultural attachment study suggests that attachment theory:", choices: ["A","is entirely universal across all cultures","B","may need to account for cultural variations in caregiving practices","C","has no validity outside Western cultures","D","only applies to human infants, not other primates"], answer: "B" },
  { num: 57, set: 4, stem: "Adolescent egocentrism, as described by Elkind, includes:", choices: ["A","the inability to conserve quantity","B","lack of object permanence","C","the imaginary audience and personal fable","D","the concrete operational inability to think abstractly"], answer: "C" },
  { num: 58, set: 4, stem: "Teratogens are:", choices: ["A","genetic abnormalities present at conception","B","agents that can cause birth defects during prenatal development","C","hormones that promote fetal growth","D","nutrients essential for brain development"], answer: "D" },
  { num: 59, set: 4, stem: "The concept of temperament suggests that:", choices: ["A","personality is entirely shaped by environment","B","infants are born with characteristic emotional reactivity and intensity","C","attachment style determines temperament","D","temperament is identical across all cultures"], answer: "A" },
  { num: 60, set: 4, stem: "Piaget's formal operational stage is characterized by the ability to:", choices: ["A","think symbolically and engage in pretend play","B","reason about abstract and hypothetical concepts","C","perform concrete mental operations","D","demonstrate object permanence"], answer: "B" },

  /* === Set 5: Abnormal Psychology (Qs 61-75) === */
  { num: 61, set: 5, stem: "In the diagnostic reliability study, the lower kappa values for personality disorders suggest:", choices: ["A","personality disorders are less severe than other disorders","B","clinicians have more difficulty agreeing on personality disorder diagnoses","C","personality disorders do not actually exist","D","the DSM-5 criteria for personality disorders are too specific"], answer: "A" },
  { num: 62, set: 5, stem: "Generalized anxiety disorder (GAD) is characterized by:", choices: ["A","sudden, intense episodes of fear","B","persistent, excessive worry about a variety of topics","C","fear of specific objects or situations","D","intrusive, unwanted thoughts and repetitive behaviors"], answer: "B" },
  { num: 63, set: 5, stem: "The diathesis-stress model proposes that psychological disorders result from:", choices: ["A","only genetic factors","B","only environmental stressors","C","the interaction of a genetic predisposition and environmental stressors","D","random chance"], answer: "C" },
  { num: 64, set: 5, stem: "Positive symptoms of schizophrenia include:", choices: ["A","flat affect and social withdrawal","B","reduced speech and anhedonia","C","poverty of thought","D","hallucinations and delusions"], answer: "D" },
  { num: 65, set: 5, stem: "The DSM-5 classifies disorders based on:", choices: ["A","descriptive criteria and symptom patterns","B","the presumed biological cause of each disorder","C","psychoanalytic interpretations of unconscious conflict","D","a single theoretical perspective"], answer: "A" },
  { num: 66, set: 5, stem: "Bipolar disorder is characterized by:", choices: ["A","persistent depressed mood only","B","alternating episodes of mania and depression","C","multiple distinct personality states","D","chronic anxiety without mood disturbance"], answer: "B" },
  { num: 67, set: 5, stem: "The reliability study found the highest agreement for schizophrenia diagnoses, likely because:", choices: ["A","schizophrenia is the most common disorder","B","schizophrenia symptoms are the mildest","C","schizophrenia has distinctive and observable symptoms like hallucinations and delusions","D","all clinicians specialize in schizophrenia"], answer: "C" },
  { num: 68, set: 5, stem: "Obsessive-compulsive disorder (OCD) is characterized by:", choices: ["A","persistent unwanted thoughts and repetitive behaviors to reduce anxiety","B","extreme fear of social situations","C","episodes of depersonalization and derealization","D","inability to form attachments"], answer: "A" },
  { num: 69, set: 5, stem: "Post-traumatic stress disorder (PTSD) symptoms include:", choices: ["A","grandiose delusions and flight of ideas","B","flashbacks, nightmares, and hypervigilance after traumatic events","C","compulsive checking and counting rituals","D","chronic, free-floating anxiety about many topics"], answer: "B" },
  { num: 70, set: 5, stem: "Major depressive disorder differs from normal sadness in that it:", choices: ["A","lasts briefly and resolves on its own","B","involves persistent depressed mood and functional impairment for at least two weeks","C","only occurs after a significant loss","D","does not affect appetite or sleep"], answer: "C" },
  { num: 71, set: 5, stem: "Cohen's kappa in the reliability study measures:", choices: ["A","the severity of symptoms","B","the validity of diagnoses","C","agreement between raters beyond what would be expected by chance","D","the prevalence of each disorder"], answer: "D" },
  { num: 72, set: 5, stem: "Antisocial personality disorder is characterized by:", choices: ["A","fear of abandonment and unstable relationships","B","grandiosity and need for admiration","C","pervasive disregard for and violation of others' rights","D","social inhibition and feelings of inadequacy"], answer: "A" },
  { num: 73, set: 5, stem: "The medical model of psychological disorders views abnormal behavior as:", choices: ["A","a result of supernatural forces","B","a product of learned maladaptive behaviors","C","a disease with biological causes that can be diagnosed and treated","D","entirely determined by social and cultural factors"], answer: "B" },
  { num: 74, set: 5, stem: "Comorbidity in psychological disorders refers to:", choices: ["A","the prognosis for recovery","B","the co-occurrence of two or more disorders in the same person","C","the mortality rate associated with a disorder","D","the genetic basis of a disorder"], answer: "C" },
  { num: 75, set: 5, stem: "A key criticism of the DSM system is that:", choices: ["A","it is too scientific in its approach","B","it does not include enough disorders","C","diagnostic labels may stigmatize individuals and influence how they are perceived","D","it never changes or updates its criteria"], answer: "D" },
];

const SIM3_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "Screen Time and Sustained Attention in Elementary School Children: A Longitudinal Study",
    citation: "Rodriguez, A., Kim, S. H., & Thompson, J. (2023). Developmental Psychology, 59(5), 891-904.",
    introduction: "This study investigated whether daily screen time (non-educational) affects sustained attention in elementary school children over a one-year period.",
    participants: "A total of 240 children from 12 elementary schools in two school districts were recruited. Parental consent was obtained for all participants. The sample included children ages 6-12 (mean = 8.7, SD = 1.84), 52% girls and 48% boys. Race/ethnicity: 40% White, 25% Hispanic/Latino, 20% Black/African American, 10% Asian/Asian American, 5% Other.",
    method: "Parents reported their children's daily non-educational screen time at baseline and every 3 months. Children were categorized into three groups: low (< 1 hour/day), moderate (1-3 hours/day), or high (> 3 hours/day). Sustained attention was measured using the Continuous Performance Test (CPT) at baseline and at 12 months. The CPT requires children to press a button when a target stimulus appears and withhold responses to non-targets over a 14-minute period. Age and socioeconomic status were controlled as covariates.",
    results: "Children in the high screen time group showed significantly lower attention scores at 12 months (mean = 67.5) compared to the low screen time group (mean = 86.5). The moderate group fell between (mean = 80.0). Younger children (ages 6-8) showed a larger effect than older children (ages 9-12). The interaction between age group and screen time was statistically significant (p < .01).",
    dataTable: {
      title: "Mean Attention Scores by Screen Time Group and Age at 12-Month Follow-Up",
      headers: ["Screen Time Group", "Ages 6-8", "Ages 9-12", "Overall"],
      rows: [
        ["Low (< 1 hr/day)", "85", "88", "86.5"],
        ["Moderate (1-3 hrs/day)", "78", "82", "80.0"],
        ["High (> 3 hrs/day)", "64", "71", "67.5"],
      ],
    },
    footnotes: [
      "Attention scores are from the Continuous Performance Test (CPT), with higher scores indicating better sustained attention. Maximum score = 100.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of sustained attention in the study." },
    { letter: "C", prompt: "Describe what the data indicate about the relationship between screen time and attention scores for younger children compared to older children." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the claim that screen time causes attention deficits in children." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies as a quasi-experiment or longitudinal correlational study (children were not randomly assigned to screen time groups)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that sustained attention was operationally defined as the score on the Continuous Performance Test (CPT)." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that both age groups showed lower attention with more screen time, but younger children (ages 6-8) showed a larger decrease in attention scores compared to older children." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies parental consent, voluntary participation, or protection from harm." },
    { row: "E", category: "Generalizability", points: 1, description: "Uses sample characteristics to evaluate generalizability (e.g., multiple schools, diverse demographics, but limited to two school districts)." },
    { row: "F", category: "Argumentation", points: 2, description: "Full credit requires evidence AND reasoning about whether correlation/quasi-experiment can establish causation. Must address the limitation that children were not randomly assigned to screen time conditions." },
  ],
};

const SIM3_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "The relative contributions of nature and nurture to intelligence",
  instructions: "Using the sources provided, develop and justify an argument about the relative contributions of nature and nurture to intelligence.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "IQ Concordance Rates in Twin Studies",
      citation: "Bouchard, T. J., & McGue, M. (1981). Science, 212(4498), 1055-1059.",
      summary: "This landmark review analyzed 111 studies of IQ correlations among family members. Identical (monozygotic) twins reared together showed a correlation of .86 in IQ scores, while identical twins reared apart showed a correlation of .72. Fraternal (dizygotic) twins reared together showed a correlation of .60. Non-twin siblings reared together showed a correlation of .47. The heritability estimate for IQ was approximately .50-.80, suggesting a substantial genetic component, though environmental factors also contributed significantly.",
    },
    {
      num: 2,
      title: "The Effects of Adoption on IQ: The French Adoption Studies",
      citation: "Duyme, M., Dumaret, A. C., & Tomkiewicz, S. (1999). Proceedings of the National Academy of Sciences, 96(15), 8790-8794.",
      summary: "Researchers studied 65 children who were adopted between ages 4 and 6 from abusive or neglectful homes into high-SES adoptive families. Children's IQ scores were measured before adoption and again in adolescence. The mean IQ before adoption was 77 (borderline intellectual functioning). After adoption, the mean IQ was 91, a gain of 14 points. Children adopted into the highest-SES families showed the greatest gains (an average increase of 19.5 IQ points), while those adopted into lower-SES adoptive homes gained only 8 points.",
    },
    {
      num: 3,
      title: "Environmental Enrichment and Cognitive Development",
      citation: "Ramey, C. T., & Ramey, S. L. (1998). Preventive Medicine, 27(2), 224-232.",
      summary: "The Carolina Abecedarian Project provided intensive early childhood education to children from low-income families starting from infancy. Children in the intervention group (n = 57) received full-time, year-round educational activities from birth to age 5. A control group (n = 54) received standard community services. By age 5, the intervention group had a mean IQ of 101.6 compared to 94.4 in the control group. At age 21, the intervention group had higher reading and math scores and were more likely to attend college (36% vs. 14%).",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific claim about the relative contributions of nature and nurture to intelligence." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited evidence from two different sources." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains evidence using AP Psychology concepts such as heritability, twin studies, adoption studies, environmental enrichment, gene-environment interaction, or Flynn effect." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim." },
  ],
};

const SIM3 = {
  id: "sim3",
  title: "Simulation 3 \u2014 Full Exam",
  badge: "Sim",
  hasMC: true,
  mcSets: SIM3_MC_SETS,
  mc: SIM3_MC,
  frqs: [SIM3_AAQ, SIM3_EBQ],
  figures: SIM3_FIGURES,
};

/* ═══════════════════════════════════════════════════════════════════
   SIMULATION 4
   ═══════════════════════════════════════════════════════════════════ */

const SIM4_FIGURES = {
  "sim4-fig1": {
    type: "groupedBar",
    title: "Mean Reading Comprehension Scores by Music Condition",
    xLabel: "Background Music Condition",
    yLabel: "Comprehension Score (out of 30)",
    legendLabels: ["Easy Passage", "Difficult Passage"],
    colors: ["#10b981", "#8b5cf6"],
    groups: [
      { label: "Silence", values: [24.1, 18.6], suffix: "" },
      { label: "Classical", values: [23.5, 17.2], suffix: "" },
      { label: "Pop with Lyrics", values: [20.8, 13.4], suffix: "" },
    ],
  },
  "sim4-fig2": {
    type: "bar",
    title: "Percentage of Participants Using Each Problem-Solving Strategy",
    xLabel: "Strategy Type",
    yLabel: "% of Participants",
    data: [
      { label: "Algorithm", value: 28 },
      { label: "Heuristic", value: 45 },
      { label: "Insight", value: 17 },
      { label: "Trial & Error", value: 10 },
    ],
  },
  "sim4-fig3": {
    type: "table",
    title: "Comparison of Major Personality Theories",
    headers: ["Theory", "Key Figure", "Core Concept", "Assessment Method"],
    rows: [
      ["Psychodynamic", "Freud", "Unconscious conflicts", "Projective tests"],
      ["Trait", "Allport/Big Five", "Stable dispositions", "Self-report inventories"],
      ["Humanistic", "Rogers/Maslow", "Self-actualization", "Q-sort technique"],
      ["Social-Cognitive", "Bandura", "Reciprocal determinism", "Behavioral assessment"],
    ],
  },
  "sim4-fig4": {
    type: "groupedBar",
    title: "Depression Symptom Reduction by Treatment Type (12 Weeks)",
    xLabel: "Treatment Condition",
    yLabel: "Mean BDI Score Reduction",
    legendLabels: ["Mild Depression", "Severe Depression"],
    colors: ["#fbbf24", "#ef4444"],
    groups: [
      { label: "CBT Only", values: [8.2, 10.5], suffix: "" },
      { label: "Medication Only", values: [7.8, 12.1], suffix: "" },
      { label: "Combined", values: [10.4, 15.3], suffix: "" },
      { label: "Placebo", values: [2.1, 1.8], suffix: "" },
    ],
  },
  "sim4-fig5": {
    type: "line",
    title: "Attitude Change Over Time by Persuasion Route",
    xLabel: "Weeks After Message",
    yLabel: "Attitude Score (1-10)",
    xLabels: ["0", "1", "2", "4", "8", "12"],
    series: [
      { label: "Central Route", data: [5.0, 7.2, 7.4, 7.3, 7.1, 7.0], color: "#3b82f6" },
      { label: "Peripheral Route", data: [5.0, 7.0, 6.5, 5.8, 5.3, 5.1], color: "#f97316" },
    ],
  },
};

const SIM4_MC_SETS = [
  {
    id: "sim4-set1",
    setNum: 1,
    title: "Set 1 \u2014 Research Study: Problem-Solving Strategies and Decision-Making",
    passage: "Researchers examined how people approach complex problems by presenting 200 participants with a series of logic puzzles. Participants were categorized based on their predominant strategy: algorithmic (systematic, step-by-step), heuristic (mental shortcuts), insight (sudden realization), or trial-and-error. Results showed that participants using heuristic strategies solved problems fastest but made more errors, while algorithmic approaches took longer but produced more accurate solutions. Insight solutions were associated with high creativity scores. The study also found that framing effects significantly influenced decision-making: when a medical treatment was described as having a 90% survival rate, 80% of participants chose it, but when described as having a 10% mortality rate, only 50% chose it.",
    figureId: "sim4-fig2",
  },
  {
    id: "sim4-set2",
    setNum: 2,
    title: "Set 2 \u2014 Research Study: Intelligence Testing and Predictive Validity",
    passage: "A school district evaluated the predictive validity of its intelligence testing program by tracking 500 students over 10 years. Students took a standardized IQ test in 5th grade, and their academic achievement, college enrollment, and job performance were assessed at ages 18 and 25. The correlation between IQ scores and academic grades was r = .50, between IQ and college enrollment was r = .55, and between IQ and job performance was r = .25. The researchers also found that socioeconomic status moderated the relationship between IQ and outcomes, with stronger correlations in higher-SES groups. They noted that IQ tests measure analytical intelligence but may not capture creative or practical intelligence.",
  },
  {
    id: "sim4-set3",
    setNum: 3,
    title: "Set 3 \u2014 Research Study: Personality Assessment Across Cultures",
    passage: "Cross-cultural psychologists administered the Big Five personality inventory to 1,200 participants across 6 countries. Results confirmed that the five-factor structure (openness, conscientiousness, extraversion, agreeableness, and neuroticism) emerged across all cultures studied, though mean scores differed. East Asian participants scored higher on neuroticism and lower on extraversion compared to North American participants. The researchers also compared self-report inventory results with projective test results (Rorschach inkblots) and found low correlations between the two assessment methods, raising questions about convergent validity.",
    figureId: "sim4-fig3",
  },
  {
    id: "sim4-set4",
    setNum: 4,
    title: "Set 4 \u2014 Research Study: Persuasion and Attitude Change",
    passage: "Social psychologists investigated how different persuasion routes affect the durability of attitude change. Participants read messages about a health policy. In the central route condition, the message contained strong logical arguments and statistical evidence. In the peripheral route condition, the message featured an attractive, celebrity spokesperson with weak arguments. Immediately after reading, both groups showed similar attitude change. However, at follow-up assessments over 12 weeks, the central route group maintained their attitude change while the peripheral route group gradually returned to their original attitudes. The researchers also found that participants with high need for cognition were more persuaded by central route messages.",
    figureId: "sim4-fig5",
  },
  {
    id: "sim4-set5",
    setNum: 5,
    title: "Set 5 \u2014 Research Study: Comparing Treatments for Depression",
    passage: "A large randomized controlled trial compared four treatment conditions for depression: cognitive-behavioral therapy (CBT) alone, antidepressant medication alone, combined CBT and medication, and a placebo control. A total of 320 participants diagnosed with major depressive disorder were randomly assigned to conditions. Depression severity was measured using the Beck Depression Inventory (BDI) at baseline and after 12 weeks. Results showed that the combined treatment produced the greatest symptom reduction overall, though medication alone was more effective than CBT alone for severe depression. CBT alone was more effective than medication alone for mild depression. All active treatments significantly outperformed placebo.",
    figureId: "sim4-fig4",
  },
];

const SIM4_MC = [
  /* === Set 1: Thinking & Language (Qs 1-15) === */
  { num: 1, set: 1, stem: "The framing effect demonstrated in the study illustrates that decision-making is influenced by:", choices: ["A","the amount of information available","B","how choices are presented or worded","C","the decision-maker's intelligence","D","random chance"], answer: "C" },
  { num: 2, set: 1, stem: "A person who can only think of using a hammer to pound nails, failing to consider using it as a doorstop, is demonstrating:", choices: ["A","the availability heuristic","B","functional fixedness","C","confirmation bias","D","the representativeness heuristic"], answer: "B" },
  { num: 3, set: 1, stem: "The Sapir-Whorf hypothesis (linguistic relativity) suggests that:", choices: ["A","all languages share a universal grammar","B","language development follows the same stages across cultures","C","thought is independent of language","D","language influences how we think and perceive the world"], answer: "D" },
  { num: 4, set: 1, stem: "Confirmation bias leads people to:", choices: ["A","seek information that supports their existing beliefs","B","change their beliefs when presented with contradictory evidence","C","use algorithms rather than heuristics","D","overestimate the probability of rare events"], answer: "A" },
  { num: 5, set: 1, stem: "Divergent thinking, which involves generating many possible solutions, is most closely associated with:", choices: ["A","intelligence testing","B","creativity","C","algorithmic problem-solving","D","functional fixedness"], answer: "B" },
  { num: 6, set: 1, stem: "The anchoring bias occurs when people:", choices: ["A","rely too heavily on the first piece of information encountered","B","judge probability based on how easily examples come to mind","C","perceive patterns in random events","D","assume a small sample represents the population"], answer: "C" },
  { num: 7, set: 1, stem: "In the problem-solving study, the finding that heuristics were faster but less accurate than algorithms suggests:", choices: ["A","algorithms are always superior to heuristics","B","heuristics trade accuracy for efficiency","C","insight is the most effective strategy","D","trial-and-error never works"], answer: "A" },
  { num: 8, set: 1, stem: "Overconfidence bias is demonstrated when:", choices: ["A","people are more confident in their judgments than their accuracy warrants","B","people consistently underestimate their abilities","C","experts never make errors in judgment","D","decision-making improves with more confidence"], answer: "D" },
  { num: 9, set: 1, stem: "Noam Chomsky argued that children acquire language because they possess:", choices: ["A","classical conditioning mechanisms","B","a behaviorist language system","C","an innate language acquisition device (LAD)","D","superior memory compared to adults"], answer: "C" },
  { num: 10, set: 1, stem: "The representativeness heuristic leads people to:", choices: ["A","judge the probability of events based on stereotypical resemblance","B","make decisions based on the most available information","C","systematically evaluate all possible outcomes","D","anchor their judgments to initial information"], answer: "B" },
  { num: 11, set: 1, stem: "Telegraphic speech in language development is characterized by:", choices: ["A","babbling that mimics the rhythm of adult speech","B","one-word utterances that convey whole sentences","C","two-word phrases that convey meaning without grammatical markers","D","full sentences with proper grammar"], answer: "C" },
  { num: 12, set: 1, stem: "Belief perseverance refers to:", choices: ["A","updating beliefs whenever new evidence is presented","B","abandoning beliefs after seeing contradictory evidence","C","forming beliefs based only on statistical evidence","D","clinging to beliefs even after the evidence for them has been refuted"], answer: "D" },
  { num: 13, set: 1, stem: "An algorithm guarantees a solution because it:", choices: ["A","uses the fastest method available","B","relies on intuition and past experience","C","systematically explores all possible solutions","D","is based on mental shortcuts"], answer: "A" },
  { num: 14, set: 1, stem: "The study found that insight solutions correlated with creativity scores, suggesting that insight:", choices: ["A","is purely random","B","involves restructuring the problem representation","C","requires more time than algorithmic approaches","D","is the least effective strategy"], answer: "B" },
  { num: 15, set: 1, stem: "Mental set is a barrier to problem-solving because it:", choices: ["A","encourages creative thinking","B","leads people to apply previously successful strategies even when they are no longer appropriate","C","eliminates the use of heuristics","D","increases the accuracy of algorithms"], answer: "B" },

  /* === Set 2: Intelligence & Testing (Qs 16-30) === */
  { num: 16, set: 2, stem: "The moderate correlation (r = .50) between IQ and academic grades suggests that:", choices: ["A","IQ perfectly predicts academic performance","B","IQ has no relationship to academic performance","C","IQ explains some but not all of the variance in grades","D","the study had poor methodology"], answer: "C" },
  { num: 17, set: 2, stem: "Spearman's g-factor refers to:", choices: ["A","a specific ability in one domain","B","a general intelligence factor underlying all cognitive abilities","C","Gardner's theory of multiple intelligences","D","emotional intelligence"], answer: "B" },
  { num: 18, set: 2, stem: "Gardner's theory of multiple intelligences differs from the g-factor model by proposing that:", choices: ["A","intelligence is a single, unitary ability","B","intelligence consists of several independent types of ability","C","only logical-mathematical intelligence matters","D","intelligence cannot be measured"], answer: "B" },
  { num: 19, set: 2, stem: "The finding that SES moderated the IQ-outcome relationship suggests:", choices: ["A","IQ tests are perfectly valid for all populations","B","socioeconomic factors influence how intelligence translates to outcomes","C","SES has no effect on educational achievement","D","IQ tests measure only crystallized intelligence"], answer: "D" },
  { num: 20, set: 2, stem: "Sternberg's triarchic theory includes all of the following EXCEPT:", choices: ["A","analytical intelligence","B","creative intelligence","C","practical intelligence","D","emotional intelligence"], answer: "B" },
  { num: 21, set: 2, stem: "Test-retest reliability is established by:", choices: ["A","having different people score the same test","B","comparing scores on two halves of the same test","C","comparing results from multiple test formats","D","administering the same test to the same people at different times"], answer: "D" },
  { num: 22, set: 2, stem: "The weaker correlation between IQ and job performance (r = .25) compared to IQ and academic grades suggests that:", choices: ["A","IQ is irrelevant to job success","B","job performance depends on many factors beyond analytical intelligence","C","IQ tests have no predictive validity","D","the correlation is too strong to be meaningful"], answer: "B" },
  { num: 23, set: 2, stem: "Stereotype threat can affect test performance by:", choices: ["A","motivating members of stigmatized groups to perform better","B","lowering performance when individuals are aware of negative stereotypes about their group","C","having no effect on standardized test scores","D","improving the validity of intelligence tests"], answer: "A" },
  { num: 24, set: 2, stem: "Content validity refers to whether a test:", choices: ["A","predicts future performance","B","correlates with other measures of the same construct","C","adequately samples the domain it is intended to measure","D","produces consistent results over time"], answer: "C" },
  { num: 25, set: 2, stem: "The Flynn effect refers to the finding that:", choices: ["A","IQ scores have been rising over successive generations","B","IQ scores have been declining in recent decades","C","intelligence is entirely genetic","D","cultural factors have no effect on IQ"], answer: "D" },
  { num: 26, set: 2, stem: "A test that measures what it claims to measure has:", choices: ["A","reliability","B","standardization","C","norming","D","validity"], answer: "D" },
  { num: 27, set: 2, stem: "Intellectual disability is defined by both significantly below-average intellectual functioning AND:", choices: ["A","a criminal record","B","deficits in adaptive behavior before age 18","C","a score below 85 on any IQ test","D","physical disabilities"], answer: "B" },
  { num: 28, set: 2, stem: "The normal distribution of IQ scores has a mean of 100 and a standard deviation of 15. This means approximately 68% of people score between:", choices: ["A","70 and 130","B","55 and 145","C","85 and 115","D","90 and 110"], answer: "C" },
  { num: 29, set: 2, stem: "Predictive validity is demonstrated when a test:", choices: ["A","measures a broad range of content","B","produces the same results over time","C","is standardized on a large sample","D","predicts future behavior or performance"], answer: "D" },
  { num: 30, set: 2, stem: "A culturally biased test is problematic because it:", choices: ["A","is too easy for everyone","B","measures knowledge or skills more familiar to one cultural group","C","has high reliability","D","was standardized on a diverse sample"], answer: "D" },

  /* === Set 3: Personality (Qs 31-45) === */
  { num: 31, set: 3, stem: "The low correlation between Big Five self-reports and Rorschach results raises concerns about:", choices: ["A","the reliability of the Big Five","B","convergent validity between assessment methods","C","the cultural generalizability of personality","D","the stability of personality traits"], answer: "B" },
  { num: 32, set: 3, stem: "In Freud's psychoanalytic theory, the ego operates according to the:", choices: ["A","pleasure principle","B","reality principle","C","morality principle","D","unconscious principle"], answer: "A" },
  { num: 33, set: 3, stem: "Bandura's concept of reciprocal determinism proposes that behavior is influenced by the interaction of:", choices: ["A","id, ego, and superego","B","conscious and unconscious forces","C","the person, the environment, and behavior","D","nature and nurture exclusively"], answer: "C" },
  { num: 34, set: 3, stem: "The Big Five factor of conscientiousness is characterized by:", choices: ["A","sociability and positive emotions","B","imagination and intellectual curiosity","C","organization, dependability, and self-discipline","D","trust and cooperation"], answer: "A" },
  { num: 35, set: 3, stem: "The Rorschach inkblot test is considered a projective test because:", choices: ["A","it uses standardized, objective scoring","B","participants project unconscious thoughts onto ambiguous stimuli","C","it measures the Big Five traits directly","D","it has high test-retest reliability"], answer: "A" },
  { num: 36, set: 3, stem: "Rogers believed that psychological problems arise from:", choices: ["A","unconscious sexual and aggressive drives","B","incongruence between the real self and ideal self","C","faulty reinforcement contingencies","D","genetic predispositions to mental illness"], answer: "A" },
  { num: 37, set: 3, stem: "The finding that the Big Five structure emerged across all 6 countries supports:", choices: ["A","the idea that personality traits are culturally universal","B","the psychodynamic model of personality","C","the idea that personality is entirely learned","D","humanistic theory of self-actualization"], answer: "B" },
  { num: 38, set: 3, stem: "Freud's defense mechanism of sublimation involves:", choices: ["A","refusing to acknowledge a threatening situation","B","attributing one's own feelings to another person","C","reverting to an earlier developmental stage","D","channeling unacceptable impulses into socially acceptable activities"], answer: "D" },
  { num: 39, set: 3, stem: "Self-efficacy, as described by Bandura, refers to:", choices: ["A","one's overall self-esteem","B","the unconscious need for achievement","C","an individual's belief in their ability to succeed in specific situations","D","the degree to which a person is introverted or extraverted"], answer: "D" },
  { num: 40, set: 3, stem: "The trait perspective assumes that personality:", choices: ["A","is entirely determined by unconscious drives","B","changes dramatically from situation to situation","C","consists of stable characteristics that predict behavior across situations","D","is solely a product of reinforcement history"], answer: "C" },
  { num: 41, set: 3, stem: "Maslow's hierarchy places self-actualization at the top, which he described as:", choices: ["A","meeting basic survival needs","B","achieving financial security","C","realizing one's full potential","D","gaining the approval of others"], answer: "A" },
  { num: 42, set: 3, stem: "The MMPI-2 is an example of a:", choices: ["A","projective personality test","B","self-report personality inventory with validity scales","C","behavioral observation technique","D","humanistic assessment tool"], answer: "B" },
  { num: 43, set: 3, stem: "Freud proposed that the superego develops during the:", choices: ["A","oral stage","B","anal stage","C","phallic stage","D","latency stage"], answer: "C" },
  { num: 44, set: 3, stem: "Locus of control, proposed by Rotter, refers to:", choices: ["A","the defense mechanism of projection","B","whether one believes outcomes are controlled by internal effort or external forces","C","the Big Five factor of neuroticism","D","Freud's reality principle"], answer: "C" },
  { num: 45, set: 3, stem: "The cross-cultural finding that East Asian participants scored higher on neuroticism may reflect:", choices: ["A","actual cultural differences in emotional experience or response styles","B","that neuroticism is a uniquely Western construct","C","measurement error in all personality tests","D","that the Big Five model has no validity"], answer: "A" },

  /* === Set 4: Social Psychology (Qs 46-60) === */
  { num: 46, set: 4, stem: "The elaboration likelihood model predicts that attitude change via the central route is more lasting because:", choices: ["A","attractive sources are more persuasive","B","peripheral cues are more memorable","C","the audience does not pay attention","D","it involves deeper cognitive processing of arguments"], answer: "D" },
  { num: 47, set: 4, stem: "Cognitive dissonance theory predicts that after making a difficult decision, a person will:", choices: ["A","feel satisfied regardless of the outcome","B","experience discomfort and justify the chosen option while devaluing the rejected one","C","always change the decision","D","feel indifferent about both options"], answer: "D" },
  { num: 48, set: 4, stem: "The fundamental attribution error is the tendency to:", choices: ["A","attribute others' behavior to dispositional factors while underestimating situational factors","B","attribute one's own behavior to dispositional factors","C","make accurate attributions for strangers","D","overestimate situational factors for others' behavior"], answer: "D" },
  { num: 49, set: 4, stem: "Prejudice is to discrimination as:", choices: ["A","behavior is to attitude","B","attitude is to attitude","C","attitude is to behavior","D","behavior is to behavior"], answer: "C" },
  { num: 50, set: 4, stem: "The study found that high need for cognition was associated with greater central route persuasion, suggesting that:", choices: ["A","all people are equally persuaded by strong arguments","B","individual differences affect susceptibility to different persuasion strategies","C","peripheral cues are always more effective","D","need for cognition has no effect on persuasion"], answer: "C" },
  { num: 51, set: 4, stem: "Deindividuation is most likely to occur when:", choices: ["A","a person is uniquely identifiable in a group","B","individual anonymity is high and accountability is low","C","group size is very small","D","people are acting alone"], answer: "A" },
  { num: 52, set: 4, stem: "The mere exposure effect suggests that:", choices: ["A","first impressions determine all future attitudes","B","repeated exposure to a stimulus tends to increase liking for it","C","familiarity breeds contempt","D","persuasion requires strong arguments"], answer: "A" },
  { num: 53, set: 4, stem: "Zimbardo's Stanford prison experiment demonstrated:", choices: ["A","that personality traits fully determine behavior","B","the power of social roles and situational forces on behavior","C","that prisoners are inherently different from guards","D","that conformity only occurs in real prisons"], answer: "B" },
  { num: 54, set: 4, stem: "The contact hypothesis proposes that prejudice can be reduced when:", choices: ["A","groups are kept separate","B","one group has authority over another","C","members of different groups interact under conditions of equal status and common goals","D","stereotypes are reinforced through media"], answer: "D" },
  { num: 55, set: 4, stem: "The peripheral route condition showed declining attitude change over time because:", choices: ["A","the arguments were too strong","B","the central processing was too deep","C","attitude change based on superficial cues fades without substantive cognitive support","D","the participants forgot the topic entirely"], answer: "D" },
  { num: 56, set: 4, stem: "The foot-in-the-door technique works by:", choices: ["A","starting with a large request followed by a smaller one","B","making a small request first, then following with a larger one","C","presenting two equally sized requests simultaneously","D","threatening negative consequences for non-compliance"], answer: "A" },
  { num: 57, set: 4, stem: "Self-serving bias is the tendency to:", choices: ["A","attribute successes to internal factors and failures to external factors","B","blame oneself for all outcomes","C","make accurate judgments about one's abilities","D","attribute all outcomes to luck"], answer: "A" },
  { num: 58, set: 4, stem: "Groupthink is characterized by:", choices: ["A","open debate and dissent","B","individual critical thinking within groups","C","conformity pressure that suppresses dissent and leads to poor decisions","D","increased creativity in decision-making"], answer: "D" },
  { num: 59, set: 4, stem: "The just-world hypothesis leads people to:", choices: ["A","believe that victims must have deserved their misfortune","B","provide help to anyone in need","C","question the fairness of all institutions","D","reject all stereotypes"], answer: "B" },
  { num: 60, set: 4, stem: "Social comparison theory suggests that people evaluate their abilities and opinions by:", choices: ["A","relying solely on self-assessment","B","comparing themselves to others","C","ignoring others' performance","D","always choosing the least competent comparison group"], answer: "A" },

  /* === Set 5: Treatment of Disorders (Qs 61-75) === */
  { num: 61, set: 5, stem: "The finding that combined treatment was most effective overall supports:", choices: ["A","an integrated approach addressing both cognitive and biological factors","B","the idea that medication alone is always best","C","the superiority of psychotherapy for all conditions","D","the placebo effect as the primary mechanism of recovery"], answer: "A" },
  { num: 62, set: 5, stem: "Systematic desensitization is based on:", choices: ["A","operant conditioning principles","B","psychoanalytic theory","C","classical conditioning and counterconditioning","D","humanistic therapy approaches"], answer: "C" },
  { num: 63, set: 5, stem: "SSRIs (selective serotonin reuptake inhibitors) treat depression by:", choices: ["A","increasing dopamine production","B","blocking GABA receptors","C","increasing serotonin availability in the synapse","D","reducing norepinephrine levels"], answer: "C" },
  { num: 64, set: 5, stem: "The placebo group's minimal improvement demonstrates that:", choices: ["A","placebos are as effective as real treatments","B","expectation alone produces limited symptom reduction compared to active treatments","C","the study was flawed","D","depression resolves without any intervention"], answer: "C" },
  { num: 65, set: 5, stem: "Electroconvulsive therapy (ECT) is most commonly used for:", choices: ["A","mild anxiety disorders","B","severe, treatment-resistant depression","C","schizophrenia as a first-line treatment","D","personality disorders"], answer: "B" },
  { num: 66, set: 5, stem: "Cognitive-behavioral therapy (CBT) focuses on:", choices: ["A","unconscious conflicts and dream analysis","B","building unconditional positive regard","C","identifying and changing maladaptive thoughts and behaviors","D","prescribing psychotropic medications"], answer: "C" },
  { num: 67, set: 5, stem: "The study found CBT was more effective than medication for mild depression, suggesting:", choices: ["A","medication should never be used for depression","B","cognitive factors may be more central in mild cases","C","CBT has no biological effects","D","placebos are superior to CBT"], answer: "A" },
  { num: 68, set: 5, stem: "Psychoanalytic therapy aims to:", choices: ["A","modify observable behaviors through reinforcement","B","bring unconscious conflicts into conscious awareness","C","teach relaxation techniques","D","prescribe medication for symptom relief"], answer: "B" },
  { num: 69, set: 5, stem: "Antipsychotic medications primarily work by:", choices: ["A","increasing serotonin levels","B","enhancing GABA activity","C","blocking dopamine receptors","D","stimulating norepinephrine production"], answer: "C" },
  { num: 70, set: 5, stem: "Community psychology emphasizes:", choices: ["A","long-term inpatient treatment","B","prevention and community-based intervention","C","individual psychoanalysis","D","pharmacological treatment only"], answer: "B" },
  { num: 71, set: 5, stem: "Exposure therapy treats phobias by:", choices: ["A","providing insight into unconscious fears","B","gradually exposing the client to the feared stimulus in a safe environment","C","prescribing anxiolytic medication","D","avoiding the feared stimulus entirely"], answer: "A" },
  { num: 72, set: 5, stem: "The Beck Depression Inventory (BDI) used in this study is a:", choices: ["A","self-report measure of depression severity","B","projective personality test","C","neuroimaging technique","D","biological marker of depression"], answer: "A" },
  { num: 73, set: 5, stem: "Lithium is primarily used to treat:", choices: ["A","schizophrenia","B","generalized anxiety disorder","C","obsessive-compulsive disorder","D","bipolar disorder"], answer: "D" },
  { num: 74, set: 5, stem: "Token economies are based on:", choices: ["A","classical conditioning","B","operant conditioning using secondary reinforcers","C","psychodynamic theory","D","humanistic principles"], answer: "B" },
  { num: 75, set: 5, stem: "A limitation of the treatment study is that:", choices: ["A","it used random assignment","B","it included a control group","C","participants and therapists could not be blinded to the psychotherapy condition","D","it measured outcomes at multiple time points"], answer: "C" },
];

const SIM4_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "The Effects of Background Music on Reading Comprehension: The Role of Lyrical Content and Task Difficulty",
    citation: "Harris, N. G., Okonkwo, E., & Park, J. (2021). Applied Cognitive Psychology, 35(4), 982-994.",
    introduction: "This study investigated whether background music affects reading comprehension performance and whether the effect depends on the presence of lyrics and the difficulty of the reading passage.",
    participants: "A total of 180 undergraduate students at a state university participated for course credit. The sample was 55% women and 45% men. Race/ethnicity: 48% White, 22% Hispanic/Latino, 18% Black/African American, 8% Asian/Asian American, 4% Other. Age range: 18-25 (mean = 19.8, SD = 1.45).",
    method: "After providing informed consent, participants were randomly assigned to one of three background music conditions: silence (control), classical instrumental music, or pop music with lyrics. All participants completed two reading comprehension passages (one easy, one difficult) followed by 15 multiple-choice questions per passage (30 total). The music was played at a constant 65 dB throughout the task. Easy and difficult passages were counterbalanced. Reading time was also recorded.",
    results: "There was a significant main effect of music condition on comprehension scores (p < .01). Participants in the silence condition scored highest (mean = 21.4), followed by classical music (mean = 20.4), and pop with lyrics (mean = 17.1). The effect was more pronounced for difficult passages. The interaction between music condition and passage difficulty was significant (p < .05). For easy passages, scores did not differ significantly between silence and classical music conditions.",
    dataTable: {
      title: "Mean Reading Comprehension Scores by Condition and Passage Difficulty",
      headers: ["Condition", "Easy Passage (out of 15)", "Difficult Passage (out of 15)", "Total (out of 30)"],
      rows: [
        ["Silence", "24.1", "18.6", "21.4"],
        ["Classical Music", "23.5", "17.2", "20.4"],
        ["Pop with Lyrics", "20.8", "13.4", "17.1"],
      ],
    },
    footnotes: [
      "Comprehension scores represent the number of correctly answered multiple-choice questions. Higher scores indicate better comprehension.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of reading comprehension in the study." },
    { letter: "C", prompt: "Describe what the data indicate about the effect of pop music with lyrics compared to silence on difficult passage comprehension." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the limited capacity model of attention." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies as an experiment (random assignment to music conditions)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that reading comprehension was operationally defined as the number of correctly answered multiple-choice questions on the reading passages." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that participants listening to pop with lyrics scored lower (13.4) on difficult passages compared to silence (18.6), a difference of 5.2 points." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies informed consent, voluntary participation, or debriefing." },
    { row: "E", category: "Generalizability", points: 1, description: "Uses participant demographics to evaluate generalizability." },
    { row: "F", category: "Argumentation", points: 2, description: "Full credit requires citing evidence and explaining how lyrics compete for limited attentional resources, especially during demanding tasks." },
  ],
};

const SIM4_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "The effectiveness of different therapeutic approaches for treating depression",
  instructions: "Using the sources provided, develop and justify an argument about the effectiveness of different therapeutic approaches for treating depression.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "Cognitive Behavioral Therapy vs. Pharmacotherapy for Depression: A Meta-Analysis",
      citation: "Cuijpers, P., et al. (2013). Journal of Affective Disorders, 152, 169-177.",
      summary: "This meta-analysis of 115 studies found that CBT and antidepressant medication were equally effective for treating moderate depression, with both producing effect sizes of approximately d = 0.67 compared to placebo controls. However, CBT showed lower relapse rates at 12-month follow-up (31%) compared to medication (57% after discontinuation). Patients who received CBT also reported greater perceived control over their symptoms.",
    },
    {
      num: 2,
      title: "Combination Treatment for Depression: A Randomized Trial",
      citation: "Keller, M. B., et al. (2000). New England Journal of Medicine, 342(20), 1462-1470.",
      summary: "In a 12-week trial of 681 adults with chronic major depression, combined CBT and antidepressant medication (nefazodone) produced a response rate of 85%, compared to 55% for medication alone and 52% for CBT alone. The combined approach was particularly effective for patients with severe depression and those with childhood trauma histories.",
    },
    {
      num: 3,
      title: "Behavioral Activation vs. Cognitive Therapy for Depression",
      citation: "Dimidjian, S., et al. (2006). Journal of Consulting and Clinical Psychology, 74(4), 658-670.",
      summary: "Researchers compared behavioral activation (BA), cognitive therapy (CT), and antidepressant medication for moderate-to-severe depression. For severely depressed participants, BA and medication were equally effective and both were superior to CT. For moderately depressed participants, all three treatments were equally effective. BA was also the simplest to implement and required less therapist training than CT.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific claim about therapeutic effectiveness for depression." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited evidence from two different sources." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains evidence using AP Psychology concepts such as cognitive restructuring, behavioral activation, neurotransmitter theories, or the biopsychosocial model." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim." },
  ],
};

const SIM4 = {
  id: "sim4",
  title: "Simulation 4 \u2014 Full Exam",
  badge: "Sim",
  hasMC: true,
  mcSets: SIM4_MC_SETS,
  mc: SIM4_MC,
  frqs: [SIM4_AAQ, SIM4_EBQ],
  figures: SIM4_FIGURES,
};

/* ═══════════════════════════════════════════════════════════════════
   SIMULATION 5
   ═══════════════════════════════════════════════════════════════════ */

const SIM5_FIGURES = {
  "sim5-fig1": {
    type: "line",
    title: "Action Potential Stages",
    xLabel: "Time (ms)",
    yLabel: "Membrane Potential (mV)",
    xLabels: ["0", "0.5", "1.0", "1.5", "2.0", "2.5", "3.0", "3.5"],
    series: [
      { label: "Potential", data: [-70, -70, -55, 40, -80, -70, -70, -70], color: "#ef4444" },
    ],
  },
  "sim5-fig2": {
    type: "groupedBar",
    title: "Mean Self-Esteem Scores by Social Media Use",
    xLabel: "Daily Social Media Use",
    yLabel: "Self-Esteem Score (10-50)",
    legendLabels: ["Boys", "Girls"],
    colors: ["#3b82f6", "#ec4899"],
    groups: [
      { label: "< 1 hour", values: [38.2, 36.5], suffix: "" },
      { label: "1-3 hours", values: [35.1, 31.8], suffix: "" },
      { label: "> 3 hours", values: [32.4, 26.3], suffix: "" },
    ],
  },
  "sim5-fig3": {
    type: "table",
    title: "Dual-Process Theory Comparison",
    headers: ["Feature", "System 1 (Fast)", "System 2 (Slow)"],
    rows: [
      ["Speed", "Fast, automatic", "Slow, deliberate"],
      ["Effort", "Low effort", "High effort"],
      ["Awareness", "Unconscious", "Conscious"],
      ["Capacity", "High capacity", "Limited capacity"],
      ["Examples", "Facial recognition, driving familiar routes", "Solving math problems, planning"],
    ],
  },
  "sim5-fig4": {
    type: "bar",
    title: "Compliance Rates by Influence Technique",
    xLabel: "Technique",
    yLabel: "% Compliance",
    data: [
      { label: "Control\n(Direct Request)", value: 24 },
      { label: "Foot-in-\nthe-Door", value: 53 },
      { label: "Door-in-\nthe-Face", value: 48 },
      { label: "Low-Ball", value: 56 },
    ],
  },
  "sim5-fig5": {
    type: "groupedBar",
    title: "ACE Score and Adult Health Outcomes",
    xLabel: "ACE Score",
    yLabel: "% with Condition",
    legendLabels: ["Depression", "Substance Abuse", "Heart Disease"],
    colors: ["#8b5cf6", "#f59e0b", "#ef4444"],
    groups: [
      { label: "0 ACEs", values: [8, 5, 3], suffix: "%" },
      { label: "1-3 ACEs", values: [18, 14, 8], suffix: "%" },
      { label: "4+ ACEs", values: [35, 28, 15], suffix: "%" },
    ],
  },
};

const SIM5_MC_SETS = [
  {
    id: "sim5-set1",
    setNum: 1,
    title: "Set 1 \u2014 Research Study: Neural Transmission and Hemispheric Specialization",
    passage: "Neuroscientists studied hemispheric specialization by presenting stimuli to split-brain patients whose corpus callosum had been severed. When images were presented to the left visual field (right hemisphere), patients could not verbally identify them but could pick up the corresponding object with their left hand. When images were presented to the right visual field (left hemisphere), patients could name the objects verbally. The researchers also recorded action potentials from individual neurons, finding that myelinated neurons transmitted signals at 120 m/s compared to 2 m/s for unmyelinated neurons. Genetic analysis showed that variations in genes affecting myelin production correlated with processing speed differences.",
    figureId: "sim5-fig1",
  },
  {
    id: "sim5-set2",
    setNum: 2,
    title: "Set 2 \u2014 Research Study: Color Perception and Depth Cues",
    passage: "Vision researchers investigated how monocular and binocular depth cues contribute to depth perception accuracy. Participants judged distances in a virtual environment under three conditions: binocular cues only (retinal disparity and convergence), monocular cues only (linear perspective, texture gradient, relative size, interposition), or both cues available. Results showed that binocular cues alone produced accurate depth judgments for near objects (within 6 meters) but declined for distant objects. Monocular cues were more accurate for distant objects. Combined cues produced the best performance at all distances. The researchers also tested color perception, finding support for both trichromatic theory (at the receptor level) and opponent-process theory (at the neural processing level).",
  },
  {
    id: "sim5-set3",
    setNum: 3,
    title: "Set 3 \u2014 Research Study: Working Memory and Decision Biases",
    passage: "Cognitive psychologists examined how working memory capacity affects susceptibility to cognitive biases. Participants completed a working memory span task, then made decisions in scenarios designed to elicit the anchoring bias, framing effect, and sunk cost fallacy. Results showed that participants with higher working memory capacity were less susceptible to the sunk cost fallacy but equally susceptible to the anchoring bias as low-capacity participants. The researchers proposed that System 2 (deliberate) processing can override some biases when cognitive resources are available, but other biases operate through System 1 (automatic) processes that are resistant to deliberate correction.",
    figureId: "sim5-fig3",
  },
  {
    id: "sim5-set4",
    setNum: 4,
    title: "Set 4 \u2014 Research Study: Social Influence Compliance Techniques",
    passage: "Social psychologists compared the effectiveness of three compliance techniques against a direct-request control condition. In the foot-in-the-door condition, participants first agreed to a small request (wearing a pin) before being asked the target request (volunteering for 3 hours). In the door-in-the-face condition, an extreme request (volunteering weekly for a year) preceded the target request. In the low-ball condition, participants agreed to volunteer, then were told additional requirements. A total of 240 participants were randomly assigned across conditions. The low-ball technique produced the highest compliance (56%), followed by foot-in-the-door (53%) and door-in-the-face (48%), all significantly higher than direct request (24%).",
    figureId: "sim5-fig4",
  },
  {
    id: "sim5-set5",
    setNum: 5,
    title: "Set 5 \u2014 Research Study: Psychological Disorders and Diagnostic Challenges",
    passage: "Clinicians examined diagnostic challenges across several disorder categories. For dissociative identity disorder (DID), inter-rater reliability was low (kappa = .41), with disagreement about whether alters represented true dissociation or suggestibility effects. For somatic symptom disorder, clinicians struggled to determine when physical complaints without medical explanation constituted a disorder. Eating disorder diagnoses showed high reliability for anorexia nervosa (kappa = .78) but lower reliability for binge eating disorder (kappa = .56). The study highlighted that disorders on the boundary between normal variation and pathology present the greatest diagnostic challenges.",
  },
];

const SIM5_MC = [
  /* === Set 1: Biological Bases (Qs 1-15) === */
  { num: 1, set: 1, stem: "In the split-brain study, the left hemisphere's ability to verbally name objects but the right hemisphere's inability to do so demonstrates:", choices: ["A","that the right hemisphere controls all language","B","that the left hemisphere has no spatial abilities","C","hemispheric lateralization of language to the left hemisphere","D","that both hemispheres process language equally"], answer: "C" },
  { num: 2, set: 1, stem: "During the depolarization phase of an action potential:", choices: ["A","potassium ions rush out of the neuron","B","sodium ions rush into the neuron, making the interior more positive","C","the neuron returns to resting potential","D","no ion movement occurs"], answer: "B" },
  { num: 3, set: 1, stem: "The finding that myelinated neurons transmit signals 60 times faster than unmyelinated neurons is explained by:", choices: ["A","saltatory conduction along nodes of Ranvier","B","increased neurotransmitter release","C","larger axon diameter only","D","stronger resting potential"], answer: "A" },
  { num: 4, set: 1, stem: "The all-or-none law states that:", choices: ["A","neurons can fire at different intensities depending on the stimulus","B","neurotransmitters either bind to all receptors or none","C","the strength of a neural impulse is constant once threshold is reached","D","a neuron fires in response to any stimulus"], answer: "D" },
  { num: 5, set: 1, stem: "The split-brain patient can pick up an object with the left hand when it is shown to the left visual field because:", choices: ["A","the left visual field projects to the right hemisphere, which controls the left hand","B","the left hemisphere controls the left hand","C","both hemispheres process all visual input equally","D","the corpus callosum transmits the information"], answer: "A" },
  { num: 6, set: 1, stem: "Reuptake is the process by which:", choices: ["A","neurotransmitters are released into the synapse","B","receptor sites are created on the postsynaptic neuron","C","the presynaptic neuron fires an action potential","D","excess neurotransmitters are reabsorbed by the presynaptic neuron"], answer: "D" },
  { num: 7, set: 1, stem: "The threshold of excitation refers to:", choices: ["A","the maximum firing rate of a neuron","B","the resting potential of -70 mV","C","the strongest possible action potential","D","the minimum level of stimulation needed to trigger an action potential"], answer: "D" },
  { num: 8, set: 1, stem: "Genetic variations affecting myelin production correlating with processing speed differences supports:", choices: ["A","the idea that genes influence neural efficiency","B","the nurture-only perspective on intelligence","C","that environment alone determines brain function","D","that myelin has no functional role"], answer: "B" },
  { num: 9, set: 1, stem: "The left hemisphere is typically dominant for:", choices: ["A","spatial reasoning and face recognition","B","emotional expression and musical ability","C","language, logic, and analytical processing","D","holistic processing of information"], answer: "C" },
  { num: 10, set: 1, stem: "An excitatory neurotransmitter makes the postsynaptic neuron:", choices: ["A","less likely to fire","B","return to resting potential immediately","C","more likely to fire by depolarizing it","D","release inhibitory signals"], answer: "C" },
  { num: 11, set: 1, stem: "The absolute refractory period is when:", choices: ["A","the neuron can fire if given a stronger-than-normal stimulus","B","the neuron cannot fire regardless of the strength of stimulation","C","the neuron is at resting potential","D","neurotransmitter release is at maximum"], answer: "B" },
  { num: 12, set: 1, stem: "Agonist drugs work by:", choices: ["A","mimicking or enhancing the effect of a neurotransmitter","B","blocking receptor sites","C","preventing neurotransmitter production","D","destroying synaptic vesicles"], answer: "A" },
  { num: 13, set: 1, stem: "The occipital lobe is primarily responsible for:", choices: ["A","motor control","B","visual processing","C","auditory processing","D","language production"], answer: "B" },
  { num: 14, set: 1, stem: "The fact that split-brain patients can function normally in daily life suggests:", choices: ["A","the corpus callosum is unnecessary","B","the hemispheres can adapt and compensate to some degree","C","hemispheric specialization does not exist","D","all tasks require both hemispheres equally"], answer: "B" },
  { num: 15, set: 1, stem: "During the resting potential, the inside of the neuron is:", choices: ["A","positively charged relative to the outside","B","electrically neutral","C","rapidly oscillating between positive and negative","D","negatively charged at approximately -70 mV"], answer: "D" },

  /* === Set 2: Sensation & Perception II (Qs 16-30) === */
  { num: 16, set: 2, stem: "The finding that binocular cues work best for near objects and monocular cues for far objects suggests:", choices: ["A","binocular cues are always superior","B","depth perception relies on different cue types depending on distance","C","monocular cues are irrelevant for near objects","D","binocular cues have no upper distance limit"], answer: "B" },
  { num: 17, set: 2, stem: "Retinal disparity provides depth information because:", choices: ["A","each eye receives a slightly different image due to their separation","B","the lens changes shape to focus on objects","C","the optic nerve crosses at the optic chiasm","D","rods and cones process depth differently"], answer: "D" },
  { num: 18, set: 2, stem: "The trichromatic theory of color vision explains color perception at the level of:", choices: ["A","the visual cortex","B","the optic nerve","C","retinal cone receptors (red, green, blue)","D","the lateral geniculate nucleus"], answer: "C" },
  { num: 19, set: 2, stem: "Size constancy allows us to:", choices: ["A","see objects as maintaining their size despite changes in retinal image size","B","perceive objects as always the same color","C","detect motion in peripheral vision","D","focus on near and far objects equally"], answer: "C" },
  { num: 20, set: 2, stem: "Inattentional blindness occurs when:", choices: ["A","a person has damage to the visual cortex","B","attention is diverted from a stimulus","C","the retina cannot process all incoming information","D","people fail to notice an unexpected stimulus because their attention is focused elsewhere"], answer: "D" },
  { num: 21, set: 2, stem: "Change blindness demonstrates that:", choices: ["A","people always detect changes in their visual environment","B","visual memory is perfect","C","attention is needed to perceive changes","D","people often fail to detect changes in scenes when the change occurs during a brief disruption"], answer: "D" },
  { num: 22, set: 2, stem: "Linear perspective is a monocular depth cue in which:", choices: ["A","parallel lines appear to converge with distance","B","closer objects block the view of objects behind them","C","distant objects appear higher in the visual field","D","texture becomes finer with distance"], answer: "A" },
  { num: 23, set: 2, stem: "The opponent-process theory of color vision explains:", choices: ["A","how rods function in dim light","B","the perception of depth through binocular cues","C","afterimages and the processing of color in opponent pairs","D","how the cochlea detects sound frequency"], answer: "C" },
  { num: 24, set: 2, stem: "Convergence is a binocular depth cue that relies on:", choices: ["A","the difference in images between the two eyes","B","the movement of objects across the visual field","C","the relative size of objects","D","the inward turning of the eyes when focusing on near objects"], answer: "D" },
  { num: 25, set: 2, stem: "Feature detection theory proposes that the visual cortex contains neurons that:", choices: ["A","process entire complex scenes simultaneously","B","respond selectively to specific features like edges, angles, and movement","C","only detect color information","D","function identically to retinal cells"], answer: "B" },
  { num: 26, set: 2, stem: "The phi phenomenon is an illusion of:", choices: ["A","depth in a flat image","B","color in a black-and-white image","C","size constancy failure","D","apparent movement from a rapid sequence of stationary images"], answer: "D" },
  { num: 27, set: 2, stem: "Selective attention is best demonstrated by:", choices: ["A","hearing every conversation in a crowded room simultaneously","B","processing all visual information equally","C","focusing on one voice while filtering out background noise","D","having perfect recall of all stimuli"], answer: "C" },
  { num: 28, set: 2, stem: "Perceptual set refers to:", choices: ["A","the physical characteristics of a stimulus","B","the limits of sensory receptors","C","a predisposition to perceive something in a certain way based on expectations","D","the adaptation of sensory receptors to constant stimulation"], answer: "C" },
  { num: 29, set: 2, stem: "The study's finding that combined cues produced the best performance supports:", choices: ["A","the idea that multiple sources of information are integrated for accurate perception","B","the idea that only binocular cues matter for depth","C","that monocular cues are always unreliable","D","that depth perception is entirely innate"], answer: "B" },
  { num: 30, set: 2, stem: "Place theory explains pitch perception for:", choices: ["A","all sound frequencies equally","B","high-frequency sounds based on the location of vibration on the basilar membrane","C","only very low-frequency sounds","D","sounds processed in the visual cortex"], answer: "B" },

  /* === Set 3: Cognition II (Qs 31-45) === */
  { num: 31, set: 3, stem: "The finding that higher working memory capacity reduced susceptibility to the sunk cost fallacy supports:", choices: ["A","the idea that System 2 processing can override some biases","B","that all cognitive biases are automatic and unavoidable","C","that working memory has no effect on decision-making","D","that the sunk cost fallacy is a System 1 process"], answer: "A" },
  { num: 32, set: 3, stem: "The working memory model proposed by Baddeley includes all of the following components EXCEPT:", choices: ["A","the phonological loop","B","the visuospatial sketchpad","C","the central executive","D","the sensory register"], answer: "C" },
  { num: 33, set: 3, stem: "System 1 thinking, as described in dual-process theory, is characterized by:", choices: ["A","slow, deliberate, logical processing","B","conscious, effortful reasoning","C","high working memory demands","D","fast, automatic, intuitive processing"], answer: "D" },
  { num: 34, set: 3, stem: "The anchoring bias affecting both high and low working memory participants suggests:", choices: ["A","anchoring operates through automatic System 1 processes","B","anchoring only affects people with low intelligence","C","working memory capacity prevents all biases","D","the anchoring bias can be easily eliminated"], answer: "A" },
  { num: 35, set: 3, stem: "Metacognition refers to:", choices: ["A","the automatic processing of sensory information","B","memory for motor skills","C","thinking about and monitoring one's own thinking processes","D","the capacity of sensory memory"], answer: "C" },
  { num: 36, set: 3, stem: "The sunk cost fallacy involves:", choices: ["A","making decisions based on future costs and benefits only","B","ignoring all previous investments","C","continuing an endeavor because of previously invested resources regardless of future prospects","D","accurately weighing all relevant information"], answer: "C" },
  { num: 37, set: 3, stem: "The central executive in working memory is responsible for:", choices: ["A","storing phonological information","B","coordinating attention and managing the flow of information","C","maintaining visual and spatial information","D","storing long-term memories"], answer: "B" },
  { num: 38, set: 3, stem: "The availability heuristic leads to errors because:", choices: ["A","people consider all possible outcomes equally","B","people use systematic algorithms","C","events that are easily remembered are judged as more likely","D","people always overestimate rare events"], answer: "C" },
  { num: 39, set: 3, stem: "Prospective memory involves:", choices: ["A","remembering to perform an action in the future","B","recalling events from the past","C","recognizing familiar faces","D","the automatic retrieval of well-learned facts"], answer: "B" },
  { num: 40, set: 3, stem: "The study's finding that high working memory protected against some biases but not others supports:", choices: ["A","the idea that cognitive biases are entirely random","B","System 1 processing is always superior","C","the dual-process model of cognition","D","that deliberate reasoning cannot override any bias"], answer: "C" },
  { num: 41, set: 3, stem: "The peak-end rule in memory suggests that:", choices: ["A","all moments of an experience contribute equally to the memory","B","people judge experiences based on the most intense moment and the ending","C","the beginning of an experience is most important for memory","D","duration is the primary factor in how experiences are remembered"], answer: "B" },
  { num: 42, set: 3, stem: "Kahneman and Tversky's research demonstrated that people frequently:", choices: ["A","make perfectly rational decisions","B","violate principles of rational choice due to cognitive biases","C","always choose the option with the highest expected value","D","are immune to framing effects"], answer: "B" },
  { num: 43, set: 3, stem: "The phonological loop in working memory is responsible for:", choices: ["A","processing visual information","B","coordinating information from multiple sources","C","temporarily storing and rehearsing verbal/acoustic information","D","transferring memories to long-term storage"], answer: "C" },
  { num: 44, set: 3, stem: "The Dunning-Kruger effect refers to the tendency for:", choices: ["A","experts to overestimate their knowledge","B","people with low ability to overestimate their competence","C","everyone to accurately assess their skills","D","high-ability individuals to underestimate their performance more than they overestimate it"], answer: "B" },
  { num: 45, set: 3, stem: "An example of System 2 processing would be:", choices: ["A","recognizing a friend's face","B","solving a complex algebra problem","C","reading a familiar word","D","driving on a well-known route"], answer: "B" },

  /* === Set 4: Social Influence II (Qs 46-60) === */
  { num: 46, set: 4, stem: "The foot-in-the-door technique works because of:", choices: ["A","fear of punishment","B","normative social influence","C","self-perception theory and the desire for consistency","D","obedience to authority"], answer: "C" },
  { num: 47, set: 4, stem: "Zimbardo's Stanford prison experiment demonstrated the power of:", choices: ["A","personality traits in determining behavior","B","genetics in shaping aggression","C","individual differences in intelligence","D","social roles and situational forces on behavior"], answer: "D" },
  { num: 48, set: 4, stem: "The door-in-the-face technique relies on:", choices: ["A","the norm of reciprocity after a concession","B","cognitive dissonance reduction","C","deindividuation","D","obedience to authority"], answer: "A" },
  { num: 49, set: 4, stem: "Cognitive dissonance is most likely to occur when:", choices: ["A","a person's behavior contradicts their attitudes","B","a person agrees with group consensus","C","external rewards are very large","D","a person is unaware of their behavior"], answer: "B" },
  { num: 50, set: 4, stem: "The low-ball technique was most effective in the study because:", choices: ["A","participants were unaware of the study","B","the initial commitment created pressure to follow through","C","participants were offered large rewards","D","the technique used fear appeals"], answer: "C" },
  { num: 51, set: 4, stem: "In Milgram's obedience study, what factor most increased obedience?", choices: ["A","proximity of the experimenter giving orders","B","the learner being in the same room","C","participants having prior military experience","D","the study being conducted at a less prestigious institution"], answer: "A" },
  { num: 52, set: 4, stem: "Informational social influence is most likely when:", choices: ["A","the situation is clear and unambiguous","B","the person is trying to be liked by the group","C","there is no time pressure","D","the situation is ambiguous and the person looks to others for guidance"], answer: "D" },
  { num: 53, set: 4, stem: "The compliance study used random assignment to ensure:", choices: ["A","pre-existing differences between groups were minimized","B","participants chose their preferred condition","C","the sample was representative of all cultures","D","every participant experienced every condition"], answer: "A" },
  { num: 54, set: 4, stem: "Group polarization occurs when:", choices: ["A","group discussion leads members to adopt more extreme positions","B","groups always make moderate decisions","C","individuals become less extreme after group discussion","D","groups make random decisions"], answer: "C" },
  { num: 55, set: 4, stem: "The control group in the compliance study (direct request) serves to:", choices: ["A","provide a baseline for comparison with the compliance techniques","B","increase the sample size","C","test the effect of authority","D","measure personality differences"], answer: "A" },
  { num: 56, set: 4, stem: "Normative social influence involves conforming to:", choices: ["A","gain accurate information about reality","B","gain social approval and avoid rejection","C","obey authority figures","D","reduce cognitive dissonance"], answer: "B" },
  { num: 57, set: 4, stem: "Social facilitation theory predicts that the presence of others will:", choices: ["A","always improve performance","B","improve performance on well-learned tasks and impair performance on difficult tasks","C","always impair performance","D","have no effect on performance"], answer: "B" },
  { num: 58, set: 4, stem: "The bystander effect is reduced when:", choices: ["A","there are more bystanders present","B","the situation is ambiguous","C","no one knows the victim","D","the bystander has relevant training or the victim is clearly in need"], answer: "A" },
  { num: 59, set: 4, stem: "The concept of diffusion of responsibility explains why:", choices: ["A","people help more when they are alone","B","individuals are less likely to help when others are present because each assumes someone else will act","C","group members always take responsibility","D","helping increases with group size"], answer: "B" },
  { num: 60, set: 4, stem: "The Asch conformity experiments found that conformity increased when:", choices: ["A","the correct answer was obvious and the group was small","B","the group was unanimous and the task was ambiguous","C","participants had high self-esteem","D","the experimenter was absent"], answer: "A" },

  /* === Set 5: Psychological Disorders II (Qs 61-75) === */
  { num: 61, set: 5, stem: "The low inter-rater reliability for dissociative identity disorder suggests:", choices: ["A","DID is the most well-understood disorder","B","DID has the most reliable diagnostic criteria","C","all clinicians agree on DID diagnoses","D","there is significant disagreement about how to identify and classify DID"], answer: "A" },
  { num: 62, set: 5, stem: "Somatic symptom disorder involves:", choices: ["A","a complete loss of identity","B","alternating episodes of mania and depression","C","multiple distinct personality states","D","excessive focus on physical symptoms causing significant distress"], answer: "D" },
  { num: 63, set: 5, stem: "Anorexia nervosa is characterized by:", choices: ["A","restriction of food intake leading to significantly low body weight","B","recurrent episodes of binge eating followed by purging","C","excessive eating without purging","D","fear of gaining weight only during adolescence"], answer: "A" },
  { num: 64, set: 5, stem: "Borderline personality disorder is characterized by:", choices: ["A","grandiosity and need for admiration","B","disregard for and violation of others' rights","C","social inhibition and feelings of inadequacy","D","instability in relationships, self-image, and emotions with impulsivity"], answer: "D" },
  { num: 65, set: 5, stem: "The study found higher reliability for anorexia nervosa than for binge eating disorder, likely because:", choices: ["A","anorexia has more observable physical signs","B","binge eating disorder is more common","C","anorexia is a milder condition","D","anorexia has more distinctive and observable diagnostic criteria"], answer: "D" },
  { num: 66, set: 5, stem: "Dissociative identity disorder (DID) is controversial because:", choices: ["A","it is the most common psychological disorder","B","it has a clear biological cause","C","it is easily diagnosed with brain imaging","D","debate exists about whether it results from trauma or suggestibility"], answer: "A" },
  { num: 67, set: 5, stem: "Narcissistic personality disorder includes:", choices: ["A","a pattern of grandiosity, need for admiration, and lack of empathy","B","extreme social withdrawal and flat affect","C","chronic feelings of emptiness and self-harm","D","obsessive need for order and control"], answer: "A" },
  { num: 68, set: 5, stem: "The diagnostic challenge for somatic symptom disorder is:", choices: ["A","the symptoms are always clearly caused by a medical condition","B","determining when physical complaints without full medical explanation constitute a mental disorder","C","it only occurs in elderly populations","D","it has the highest inter-rater reliability"], answer: "D" },
  { num: 69, set: 5, stem: "Bulimia nervosa differs from anorexia nervosa in that individuals with bulimia:", choices: ["A","engage in binge-purge cycles but may maintain near-normal weight","B","always have significantly low body weight","C","never purge after eating","D","have no concern about body shape or weight"], answer: "A" },
  { num: 70, set: 5, stem: "The study highlights that disorders on the boundary between normal variation and pathology:", choices: ["A","are the easiest to diagnose","B","have perfect inter-rater reliability","C","present the greatest diagnostic challenges","D","should not be included in the DSM"], answer: "C" },
  { num: 71, set: 5, stem: "Conversion disorder (functional neurological symptom disorder) involves:", choices: ["A","multiple personality states","B","persistent anxiety about health","C","excessive eating patterns","D","neurological symptoms like blindness or paralysis without a neurological cause"], answer: "D" },
  { num: 72, set: 5, stem: "Avoidant personality disorder is characterized by:", choices: ["A","dramatic, attention-seeking behavior","B","social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation","C","disregard for social norms","D","extreme need for control and perfectionism"], answer: "D" },
  { num: 73, set: 5, stem: "The biopsychosocial model would explain eating disorders as resulting from:", choices: ["A","genetic factors alone","B","cultural pressures alone","C","the interaction of genetic vulnerabilities, psychological factors, and sociocultural influences","D","only individual personality traits"], answer: "C" },
  { num: 74, set: 5, stem: "A key limitation of the DSM categorical approach is that:", choices: ["A","it provides clear boundaries between normal and abnormal","B","it ignores symptoms entirely","C","it forces continuous symptoms into discrete categories","D","it has too few diagnostic categories"], answer: "A" },
  { num: 75, set: 5, stem: "The reliability study suggests that clinical diagnosis would benefit from:", choices: ["A","eliminating all diagnostic categories","B","relying solely on self-report measures","C","clearer and more specific diagnostic criteria for less reliable categories","D","using only biological markers for diagnosis"], answer: "A" },
];

const SIM5_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "Social Media Use and Self-Esteem in Adolescents: A Longitudinal Study of Gender Differences",
    citation: "Williams, T. R., Zhang, M., & Delgado, S. (2023). Journal of Youth and Adolescence, 52(8), 1641-1658.",
    introduction: "This study examined whether daily social media use is associated with changes in self-esteem among adolescents, and whether the relationship differs between boys and girls.",
    participants: "A total of 420 adolescents from 8 middle schools participated. The sample was 51% girls and 49% boys. Age range: 12-15 (mean = 13.4, SD = 0.92). Race/ethnicity: 38% White, 28% Hispanic/Latino, 20% Black/African American, 9% Asian/Asian American, 5% Other. Parental consent and student assent were obtained.",
    method: "This was a longitudinal study conducted over one academic year. At baseline and 9 months later, participants completed the Rosenberg Self-Esteem Scale (10-50, higher = higher self-esteem) and reported average daily social media use. Participants were categorized into low (< 1 hr), moderate (1-3 hrs), and high (> 3 hrs) use groups. Baseline self-esteem, SES, and grade level were controlled as covariates.",
    results: "Higher social media use was associated with lower self-esteem at follow-up. The effect was significantly stronger for girls. Girls in the high-use group showed a mean self-esteem score of 26.3 compared to 36.5 for girls in the low-use group. Boys showed a smaller difference: 32.4 (high) vs. 38.2 (low). The gender x social media interaction was significant (p < .01).",
    dataTable: {
      title: "Mean Self-Esteem Scores at 9-Month Follow-Up by Gender and Social Media Use",
      headers: ["Social Media Use", "Boys", "Girls"],
      rows: [
        ["Low (< 1 hr/day)", "38.2", "36.5"],
        ["Moderate (1-3 hrs/day)", "35.1", "31.8"],
        ["High (> 3 hrs/day)", "32.4", "26.3"],
      ],
    },
    footnotes: [
      "Self-esteem was measured using the Rosenberg Self-Esteem Scale (range 10-50), with higher scores indicating higher self-esteem.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of self-esteem in the study." },
    { letter: "C", prompt: "Describe what the data indicate about the relationship between social media use and self-esteem for girls compared to boys." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes social comparison theory." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies as a longitudinal correlational study (not a true experiment because participants were not randomly assigned to social media use levels)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that self-esteem was operationally defined as the score on the Rosenberg Self-Esteem Scale." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that both boys and girls showed lower self-esteem with more social media use, but girls showed a larger decrease (10.2-point difference) compared to boys (5.8-point difference)." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies parental consent and student assent, voluntary participation, or confidentiality." },
    { row: "E", category: "Generalizability", points: 1, description: "Uses sample characteristics to evaluate generalizability." },
    { row: "F", category: "Argumentation", points: 2, description: "Full credit requires evidence AND explanation of how social comparison theory (comparing oneself to idealized images on social media) explains the self-esteem findings, particularly for girls." },
  ],
};

const SIM5_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "The impact of early childhood experiences on later development",
  instructions: "Using the sources provided, develop and justify an argument about the impact of early childhood experiences on later development.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "The Relationship of Adverse Childhood Experiences to Adult Health Status",
      citation: "Felitti, V. J., et al. (1998). American Journal of Preventive Medicine, 14(4), 245-258.",
      summary: "The ACE Study surveyed 17,000 adults about childhood adversity (abuse, neglect, household dysfunction). Researchers found a dose-response relationship: as ACE scores increased, so did the risk of depression (8% with 0 ACEs vs. 35% with 4+ ACEs), substance abuse (5% vs. 28%), and heart disease (3% vs. 15%). Each additional ACE increased the odds of attempted suicide by 60%. The results persisted after controlling for age, gender, race, and education.",
    },
    {
      num: 2,
      title: "Effects of Early Intervention on Intellectual and Academic Achievement",
      citation: "Campbell, F. A., et al. (2002). Developmental Psychology, 38(1), 143-160.",
      summary: "Follow-up data from the Carolina Abecedarian Project showed that children who received intensive early education from birth to age 5 had significantly higher IQ scores, reading achievement, and math achievement at age 21 compared to the control group. The intervention group was also more likely to attend a four-year college (36% vs. 14%) and less likely to become teen parents (26% vs. 45%).",
    },
    {
      num: 3,
      title: "Attachment Security in Infancy and Early Adulthood",
      citation: "Waters, E., Merrick, S., Treboux, D., Crowell, J., & Albersheim, L. (2000). Child Development, 71(3), 684-689.",
      summary: "This 20-year longitudinal study found that 72% of adults received the same attachment classification (secure, avoidant, or anxious) that they had been given as infants in the Strange Situation. However, for those who experienced significant negative life events (loss of parent, parental divorce, life-threatening illness, abuse), attachment classification was much more likely to change. Only 44% of those with negative life events maintained the same classification, suggesting both continuity and susceptibility to change.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific claim about the impact of early childhood experiences on later development." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited evidence from two different sources." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains evidence using AP Psychology concepts such as attachment theory, critical periods, resilience, ACEs, or epigenetics." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim." },
  ],
};

const SIM5 = {
  id: "sim5",
  title: "Simulation 5 \u2014 Full Exam",
  badge: "Sim",
  hasMC: true,
  mcSets: SIM5_MC_SETS,
  mc: SIM5_MC,
  frqs: [SIM5_AAQ, SIM5_EBQ],
  figures: SIM5_FIGURES,
};

/* ═══════════════════════════════════════════════════════════════════
   SIMULATION 6
   ═══════════════════════════════════════════════════════════════════ */

const SIM6_FIGURES = {
  "sim6-fig1": {
    type: "groupedBar",
    title: "Mean Test Scores by Study Strategy",
    xLabel: "Study Strategy",
    yLabel: "Test Score (%)",
    legendLabels: ["Immediate Test", "1-Week Delayed Test"],
    colors: ["#06b6d4", "#8b5cf6"],
    groups: [
      { label: "Massed\nPractice", values: [78, 52], suffix: "%" },
      { label: "Spaced\nPractice", values: [75, 71], suffix: "%" },
      { label: "Practice\nTesting", values: [80, 76], suffix: "%" },
    ],
  },
  "sim6-fig2": {
    type: "bar",
    title: "Mean Classroom Behavior Score by Reinforcement Condition",
    xLabel: "Condition",
    yLabel: "Behavior Score (out of 20)",
    data: [
      { label: "Positive\nReinforcement", value: 16.8 },
      { label: "Negative\nReinforcement", value: 14.2 },
      { label: "Punishment", value: 11.5 },
      { label: "Control", value: 10.3 },
    ],
  },
  "sim6-fig3": {
    type: "table",
    title: "Individualism vs. Collectivism Dimensions",
    headers: ["Dimension", "Individualist Cultures", "Collectivist Cultures"],
    rows: [
      ["Self-Concept", "Independent, autonomous", "Interdependent, connected"],
      ["Goals", "Personal achievement", "Group harmony"],
      ["Attribution", "Dispositional (internal)", "Situational (external)"],
      ["Communication", "Direct, explicit", "Indirect, contextual"],
      ["Relationships", "Many shallow connections", "Fewer deep connections"],
    ],
  },
  "sim6-fig4": {
    type: "line",
    title: "Intrinsic Motivation Over Time by Reward Condition",
    xLabel: "Session",
    yLabel: "Time Spent on Task (min)",
    xLabels: ["Baseline", "During Reward", "After Reward Removed"],
    series: [
      { label: "Expected Reward", data: [12.5, 18.2, 8.3], color: "#ef4444" },
      { label: "Unexpected Reward", data: [12.3, 17.8, 13.1], color: "#22c55e" },
      { label: "No Reward", data: [12.4, 12.8, 12.5], color: "#3b82f6" },
    ],
  },
  "sim6-fig5": {
    type: "groupedBar",
    title: "Moral Reasoning Stage by Age Group",
    xLabel: "Age Group",
    yLabel: "% at Stage",
    legendLabels: ["Preconventional", "Conventional", "Postconventional"],
    colors: ["#f59e0b", "#3b82f6", "#10b981"],
    groups: [
      { label: "Children\n(7-10)", values: [70, 25, 5], suffix: "%" },
      { label: "Adolescents\n(13-16)", values: [20, 60, 20], suffix: "%" },
      { label: "Adults\n(25-40)", values: [10, 50, 40], suffix: "%" },
    ],
  },
};

const SIM6_MC_SETS = [
  {
    id: "sim6-set1",
    setNum: 1,
    title: "Set 1 \u2014 Research Study: Change Blindness and Inattentional Blindness",
    passage: "Perception researchers conducted two experiments on visual awareness. In Experiment 1, participants watched a video of people passing a basketball and were asked to count the passes. During the video, a person in a gorilla suit walked through the scene. Results showed that 50% of participants failed to notice the gorilla (inattentional blindness). In Experiment 2, participants viewed pairs of alternating photographs with a brief blank screen between them. Despite the images differing in one major detail (e.g., a building changing color), participants took an average of 10.4 alternations to detect the change. The researchers also studied how meditation practitioners performed, finding that experienced meditators detected changes 40% faster than non-meditators.",
  },
  {
    id: "sim6-set2",
    setNum: 2,
    title: "Set 2 \u2014 Research Study: Testing Effect and Spacing in Learning",
    passage: "Educational psychologists compared three study strategies: massed practice (studying material repeatedly in one session), spaced practice (distributing study across multiple sessions), and practice testing (taking practice tests between study sessions). A total of 150 college students studied scientific passages and were tested immediately and one week later. On the immediate test, practice testing produced the highest scores (80%), followed by massed practice (78%) and spaced practice (75%). However, on the delayed test, practice testing showed the best retention (76%), followed by spaced practice (71%), while massed practice showed dramatic forgetting (52%). The results highlight the distinction between short-term performance and long-term retention.",
    figureId: "sim6-fig1",
  },
  {
    id: "sim6-set3",
    setNum: 3,
    title: "Set 3 \u2014 Research Study: Intrinsic Motivation and the Overjustification Effect",
    passage: "Researchers tested the overjustification effect in 90 preschool children who showed initial interest in drawing. Children were randomly assigned to three conditions: expected reward (promised a certificate before drawing), unexpected reward (given a certificate after drawing without prior knowledge), or no reward. During the baseline, children spent approximately 12.5 minutes drawing during free play. After the reward phase, the expected reward group spent significantly less time drawing during free play (8.3 minutes) compared to both the unexpected reward group (13.1 minutes) and the no reward group (12.5 minutes). The results supported self-determination theory's prediction that external rewards can undermine intrinsic motivation.",
    figureId: "sim6-fig4",
  },
  {
    id: "sim6-set4",
    setNum: 4,
    title: "Set 4 \u2014 Research Study: Moral Reasoning Across Development",
    passage: "Developmental psychologists administered moral dilemmas to 180 participants across three age groups: children (7-10 years), adolescents (13-16 years), and adults (25-40 years). Responses were coded according to Kohlberg's stages of moral development. As predicted, children were predominantly at the preconventional level (70%), adolescents at the conventional level (60%), and adults showed the highest rates of postconventional reasoning (40%). However, the researchers found that moral reasoning did not always predict moral behavior, and cultural background significantly influenced which moral principles participants emphasized.",
    figureId: "sim6-fig5",
  },
  {
    id: "sim6-set5",
    setNum: 5,
    title: "Set 5 \u2014 Research Study: Cross-Cultural Differences in Psychological Processes",
    passage: "Cross-cultural psychologists examined how cultural background influences attribution, emotional expression, and self-concept. Participants from the United States (individualist culture) and Japan (collectivist culture) read scenarios describing successes and failures. American participants made more internal attributions for success and external attributions for failure (self-serving bias), while Japanese participants showed the opposite pattern (self-effacing bias). Display rules for emotional expression also differed: Japanese participants were more likely to mask negative emotions in social situations. Self-concept measures showed that American participants endorsed more independent self-construals while Japanese participants endorsed more interdependent self-construals.",
    figureId: "sim6-fig3",
  },
];

const SIM6_MC = [
  /* === Set 1: Consciousness & Perception (Qs 1-15) === */
  { num: 1, set: 1, stem: "The finding that 50% of participants failed to notice the gorilla demonstrates:", choices: ["A","change blindness","B","sensory adaptation","C","signal detection failure","D","inattentional blindness"], answer: "D" },
  { num: 2, set: 1, stem: "Change blindness in Experiment 2 occurred because:", choices: ["A","focused attention is required to detect changes during visual disruptions","B","the photographs were identical","C","participants had visual impairments","D","the changes were too small to perceive"], answer: "A" },
  { num: 3, set: 1, stem: "The finding that meditators detected changes faster suggests that:", choices: ["A","meditation impairs visual processing","B","mindfulness training may enhance attentional awareness","C","meditation only affects auditory processing","D","non-meditators have superior perception"], answer: "B" },
  { num: 4, set: 1, stem: "According to the information-processing theory of dreams, dreams serve to:", choices: ["A","fulfill unconscious wishes","B","consolidate and process information from the day","C","have no functional purpose","D","prepare the body for waking activities"], answer: "B" },
  { num: 5, set: 1, stem: "Meditation has been shown to:", choices: ["A","eliminate all stress permanently","B","replace the need for sleep","C","reduce anxiety, improve attention, and promote well-being","D","have no measurable psychological effects"], answer: "C" },
  { num: 6, set: 1, stem: "Lucid dreaming is defined as:", choices: ["A","dreaming that occurs only during NREM sleep","B","dreams that are forgotten immediately upon waking","C","the inability to dream","D","awareness that one is dreaming while still asleep"], answer: "A" },
  { num: 7, set: 1, stem: "The cocktail party effect demonstrates:", choices: ["A","selective attention to relevant auditory stimuli","B","that people cannot process any information at a party","C","change blindness in auditory processing","D","the absolute threshold for sound"], answer: "A" },
  { num: 8, set: 1, stem: "Circadian rhythm disruption from jet lag occurs because:", choices: ["A","the suprachiasmatic nucleus needs time to adjust to new light-dark cycles","B","air travel eliminates the need for sleep","C","the body immediately adjusts to new time zones","D","jet lag only affects mood, not sleep"], answer: "C" },
  { num: 9, set: 1, stem: "The brief blank screen between photos in the change blindness experiment:", choices: ["A","enhanced participants' ability to detect changes","B","had no effect on change detection","C","made changes easier to detect through transient signals","D","disrupted the transient signal that would normally draw attention to the change"], answer: "D" },
  { num: 10, set: 1, stem: "Hypnagogic hallucinations occur during:", choices: ["A","REM sleep","B","the transition from wakefulness to sleep","C","deep sleep","D","the transition from sleep to wakefulness"], answer: "B" },
  { num: 11, set: 1, stem: "The divided attention required by the basketball-counting task in Experiment 1:", choices: ["A","improved participants' ability to notice unexpected stimuli","B","had no effect on awareness","C","caused participants to miss the unexpected gorilla","D","made the task easier to complete"], answer: "C" },
  { num: 12, set: 1, stem: "Sleep inertia refers to:", choices: ["A","the inability to fall asleep","B","excessive sleep during the day","C","the period of impaired performance and grogginess after waking","D","the tendency to sleep at the same time each night"], answer: "C" },
  { num: 13, set: 1, stem: "Mindfulness-based stress reduction (MBSR) has been shown to:", choices: ["A","replace medical treatment entirely","B","reduce symptoms of anxiety, depression, and chronic pain","C","be effective only for people who already meditate","D","increase cortisol levels"], answer: "B" },
  { num: 14, set: 1, stem: "The research on meditation and change detection supports the idea that:", choices: ["A","attention is entirely automatic and cannot be trained","B","meditation has no cognitive benefits","C","attentional capacities can be improved through practice","D","change blindness cannot be reduced"], answer: "C" },
  { num: 15, set: 1, stem: "Consciousness is best described as:", choices: ["A","a single, unified state that does not vary","B","only present during waking hours","C","irrelevant to psychological functioning","D","our awareness of ourselves and our environment, which varies in levels"], answer: "D" },

  /* === Set 2: Learning & Memory III (Qs 16-30) === */
  { num: 16, set: 2, stem: "The dramatic drop in massed practice scores from immediate to delayed testing (78% to 52%) demonstrates:", choices: ["A","the testing effect","B","the spacing effect","C","encoding specificity","D","the illusion of competence created by massed study"], answer: "D" },
  { num: 17, set: 2, stem: "The testing effect works because:", choices: ["A","tests cause anxiety that improves memory","B","retrieving information strengthens memory traces more than re-reading","C","testing replaces the need for study","D","tests only measure recognition, not recall"], answer: "B" },
  { num: 18, set: 2, stem: "Proactive interference occurs when:", choices: ["A","new information disrupts recall of old information","B","retroactive interference strengthens old memories","C","old information disrupts learning or recall of new information","D","encoding failure prevents memory formation"], answer: "C" },
  { num: 19, set: 2, stem: "Schema theory proposes that:", choices: ["A","memory is an exact recording of events","B","schemas have no effect on memory encoding","C","existing knowledge structures influence how new information is encoded and retrieved","D","all memories are equally accessible"], answer: "C" },
  { num: 20, set: 2, stem: "The spacing effect suggests that studying should be:", choices: ["A","distributed across multiple sessions over time","B","concentrated in one intensive session","C","done only immediately before a test","D","avoided entirely in favor of testing"], answer: "A" },
  { num: 21, set: 2, stem: "The study shows that practice testing outperformed spaced practice on both tests, which supports:", choices: ["A","the idea that passive review is most effective","B","massed practice as the best strategy","C","retrieval practice as a powerful learning strategy","D","that timing of study does not matter"], answer: "C" },
  { num: 22, set: 2, stem: "Retroactive interference is demonstrated when:", choices: ["A","learning French vocabulary interferes with previously learned Spanish vocabulary","B","knowing Spanish interferes with learning French","C","both old and new languages are forgotten equally","D","no interference occurs between languages"], answer: "D" },
  { num: 23, set: 2, stem: "The generation effect suggests that memory is enhanced when:", choices: ["A","information is passively received","B","learners generate or produce the information themselves","C","material is read multiple times","D","encoding occurs without effort"], answer: "C" },
  { num: 24, set: 2, stem: "Elaborative rehearsal improves memory compared to maintenance rehearsal because it:", choices: ["A","involves simply repeating information","B","requires less cognitive effort","C","is faster than maintenance rehearsal","D","creates deeper, more meaningful connections to existing knowledge"], answer: "D" },
  { num: 25, set: 2, stem: "The massed practice group's high immediate score but low delayed score illustrates:", choices: ["A","that cramming creates durable learning","B","the difference between short-term performance and long-term retention","C","that spacing is harmful to learning","D","the superiority of massed practice"], answer: "B" },
  { num: 26, set: 2, stem: "Interleaving practice (mixing different types of problems) has been shown to:", choices: ["A","impair learning and performance on all measures","B","have no effect on long-term retention","C","improve discrimination between problem types and long-term retention","D","only benefit motor skills"], answer: "A" },
  { num: 27, set: 2, stem: "The desirable difficulties framework proposes that:", choices: ["A","learning should always be easy to be effective","B","challenges during learning that require effort can enhance long-term retention","C","difficulty always impairs learning","D","students should avoid all testing"], answer: "D" },
  { num: 28, set: 2, stem: "Encoding specificity predicts that memory retrieval is best when:", choices: ["A","the retrieval context matches the encoding context","B","information is tested in a completely different environment","C","no contextual cues are provided","D","arousal levels are very high"], answer: "A" },
  { num: 29, set: 2, stem: "The independent variable in the study was:", choices: ["A","the test scores","B","the study strategy (massed, spaced, or practice testing)","C","the delay between study and test","D","the type of passage content"], answer: "B" },
  { num: 30, set: 2, stem: "Transfer-appropriate processing suggests that memory is best when:", choices: ["A","study and test require similar cognitive processes","B","study always involves visual imagery","C","information is encoded at a shallow level","D","testing format does not matter"], answer: "B" },

  /* === Set 3: Emotion & Motivation II (Qs 31-45) === */
  { num: 31, set: 3, stem: "The expected reward group's decrease in drawing time after rewards were removed demonstrates:", choices: ["A","positive reinforcement","B","classical conditioning","C","the overjustification effect","D","intrinsic motivation increase"], answer: "C" },
  { num: 32, set: 3, stem: "Self-determination theory identifies three basic psychological needs:", choices: ["A","autonomy, competence, and relatedness","B","food, shelter, and safety","C","power, achievement, and affiliation","D","esteem, belonging, and self-actualization"], answer: "A" },
  { num: 33, set: 3, stem: "The unexpected reward group maintained their drawing time because:", choices: ["A","they never received any reward","B","the unexpected reward did not undermine their internal attribution for drawing","C","unexpected rewards always increase motivation","D","they were forced to continue drawing"], answer: "B" },
  { num: 34, set: 3, stem: "Display rules refer to:", choices: ["A","the universal expression of all emotions","B","cultural norms governing how and when emotions should be expressed","C","the inability to express emotions","D","biological constraints on facial expressions"], answer: "B" },
  { num: 35, set: 3, stem: "Emotional intelligence includes the ability to:", choices: ["A","suppress all emotions","B","only recognize one's own emotions","C","perceive, understand, manage, and use emotions effectively","D","increase IQ through emotional training"], answer: "C" },
  { num: 36, set: 3, stem: "The study supports self-determination theory because:", choices: ["A","external rewards always enhance motivation","B","punishment was the most effective motivator","C","rewards had no effect on behavior","D","expected external rewards undermined intrinsic motivation by reducing perceived autonomy"], answer: "D" },
  { num: 37, set: 3, stem: "Flow, as described by Csikszentmihalyi, occurs when:", choices: ["A","a person is completely bored with a task","B","challenge level far exceeds skill level","C","skill level far exceeds the challenge","D","there is an optimal match between challenge and skill level"], answer: "A" },
  { num: 38, set: 3, stem: "Extrinsic motivation involves:", choices: ["A","engaging in a behavior for its own inherent satisfaction","B","performing a behavior to obtain an external reward or avoid punishment","C","a state of complete autonomy","D","the absence of any reward system"], answer: "B" },
  { num: 39, set: 3, stem: "The broaden-and-build theory of positive emotions proposes that:", choices: ["A","positive emotions narrow attention to immediate threats","B","positive emotions broaden thought-action repertoires and build personal resources","C","only negative emotions are functional","D","positive emotions have no adaptive value"], answer: "B" },
  { num: 40, set: 3, stem: "The no reward control group's stable drawing time across all phases shows:", choices: ["A","intrinsic motivation remains stable without external reward interference","B","that external rewards always help","C","that children have no interest in drawing","D","the testing effect"], answer: "A" },
  { num: 41, set: 3, stem: "Cognitive appraisal theory of emotion emphasizes:", choices: ["A","that emotions are purely physiological","B","that facial expressions cause emotions","C","that emotions occur simultaneously with physiological arousal","D","how people interpret situations determines their emotional experience"], answer: "D" },
  { num: 42, set: 3, stem: "Incentive theory of motivation focuses on:", choices: ["A","internal physiological drives","B","external stimuli that pull behavior toward goals","C","arousal levels only","D","instinctive behaviors"], answer: "B" },
  { num: 43, set: 3, stem: "The James-Lange theory would predict that:", choices: ["A","emotions and physiological responses occur simultaneously","B","cognitive appraisal determines the emotion","C","specific physiological responses precede and cause the emotional experience","D","facial expressions alone determine emotions"], answer: "C" },
  { num: 44, set: 3, stem: "The operational definition of intrinsic motivation in the study was:", choices: ["A","the amount of reward received","B","time spent drawing during free play without external incentives","C","children's verbal reports of enjoyment","D","the number of drawings produced during the reward phase"], answer: "A" },
  { num: 45, set: 3, stem: "Self-efficacy influences motivation by:", choices: ["A","having no effect on behavior","B","decreasing persistence after failure","C","affecting how much effort people invest and how long they persist","D","only influencing physical performance"], answer: "C" },

  /* === Set 4: Development II (Qs 46-60) === */
  { num: 46, set: 4, stem: "The finding that 70% of children used preconventional moral reasoning while 40% of adults used postconventional reasoning supports Kohlberg's claim that:", choices: ["A","moral reasoning does not change with age","B","all adults reach the postconventional level","C","children are morally superior to adults","D","moral reasoning generally progresses through stages with development"], answer: "D" },
  { num: 47, set: 4, stem: "A teratogen that affects prenatal development during the embryonic period (weeks 3-8) is most likely to cause:", choices: ["A","minor behavioral changes only","B","no developmental effects","C","genetic mutations","D","major structural birth defects because organs are forming"], answer: "D" },
  { num: 48, set: 4, stem: "The finding that moral reasoning did not always predict moral behavior suggests:", choices: ["A","Kohlberg's stages are perfectly predictive","B","moral reasoning and moral action are always aligned","C","behavior is influenced by many factors beyond reasoning level","D","moral behavior cannot be studied scientifically"], answer: "A" },
  { num: 49, set: 4, stem: "Gender schema theory proposes that children:", choices: ["A","have no awareness of gender before adolescence","B","develop gender identity solely through biological maturation","C","are passive recipients of gender socialization","D","actively construct gender categories that influence their perception and behavior"], answer: "A" },
  { num: 50, set: 4, stem: "Emerging adulthood, as described by Arnett, is characterized by:", choices: ["A","complete independence and settled identity","B","the period between childhood and adolescence","C","identity exploration, instability, and self-focus between ages 18-25","D","retirement and life review"], answer: "C" },
  { num: 51, set: 4, stem: "Kohlberg's theory has been criticized for:", choices: ["A","being too focused on emotional development","B","ignoring all cultural influences","C","having too few stages","D","cultural and gender bias, and overemphasizing justice-based reasoning"], answer: "D" },
  { num: 52, set: 4, stem: "Fetal alcohol spectrum disorders result from:", choices: ["A","genetic mutations","B","maternal alcohol consumption during pregnancy","C","paternal smoking","D","exposure to loud noise during pregnancy"], answer: "B" },
  { num: 53, set: 4, stem: "Gilligan criticized Kohlberg's theory for:", choices: ["A","having too many stages","B","overemphasizing cultural differences","C","focusing on justice reasoning and undervaluing care-based reasoning more common in women","D","being too focused on young children"], answer: "D" },
  { num: 54, set: 4, stem: "The cultural influence on moral reasoning found in the study supports the idea that:", choices: ["A","moral development is identical across all cultures","B","biology alone determines moral reasoning","C","environment and culture have no effect on morality","D","culture shapes which moral principles are emphasized"], answer: "A" },
  { num: 55, set: 4, stem: "Piaget's preoperational stage (ages 2-7) is characterized by:", choices: ["A","logical thinking about abstract concepts","B","object permanence as the main achievement","C","symbolic thinking but egocentrism and lack of conservation","D","systematic hypothesis testing"], answer: "C" },
  { num: 56, set: 4, stem: "Erikson's generativity vs. stagnation stage occurs during:", choices: ["A","adolescence","B","young adulthood","C","middle adulthood","D","late adulthood"], answer: "C" },
  { num: 57, set: 4, stem: "Prenatal exposure to stress hormones has been linked to:", choices: ["A","no effects on the developing fetus","B","improved cognitive development","C","only positive outcomes","D","increased risk of anxiety and behavioral problems in childhood"], answer: "D" },
  { num: 58, set: 4, stem: "Adolescent brain development is characterized by:", choices: ["A","the prefrontal cortex maturing before the limbic system","B","complete brain maturation by age 12","C","the prefrontal cortex continuing to develop into the mid-20s, after the limbic system matures","D","no significant changes after puberty"], answer: "C" },
  { num: 59, set: 4, stem: "The moral reasoning study used a cross-sectional design, which means:", choices: ["A","the same participants were followed over many years","B","different age groups were studied at the same time","C","only one age group was tested","D","participants were randomly assigned to age groups"], answer: "A" },
  { num: 60, set: 4, stem: "Erikson's integrity vs. despair stage involves:", choices: ["A","forming intimate relationships","B","reflecting on one's life and feeling either satisfaction or regret","C","developing a sense of industry","D","establishing a career identity"], answer: "B" },

  /* === Set 5: Applied Psychology (Qs 61-75) === */
  { num: 61, set: 5, stem: "The cross-cultural attribution findings show that Americans made more internal attributions for success, which reflects:", choices: ["A","the just-world hypothesis","B","cognitive dissonance","C","the self-serving bias common in individualist cultures","D","the fundamental attribution error only"], answer: "C" },
  { num: 62, set: 5, stem: "Industrial/organizational psychology focuses on:", choices: ["A","treating mental disorders in the workplace","B","prescribing medication for work-related stress","C","diagnosing personality disorders among workers","D","applying psychological principles to workplace behavior, productivity, and well-being"], answer: "D" },
  { num: 63, set: 5, stem: "The Japanese participants' self-effacing bias (external attributions for success) reflects:", choices: ["A","a lack of self-awareness","B","collectivist values that emphasize modesty and group harmony","C","lower intelligence","D","a Western attribution pattern"], answer: "B" },
  { num: 64, set: 5, stem: "Forensic psychology applies psychological knowledge to:", choices: ["A","legal and criminal justice systems","B","agricultural productivity","C","architectural design","D","athletic performance"], answer: "A" },
  { num: 65, set: 5, stem: "Display rules differing between cultures demonstrates that:", choices: ["A","emotions are entirely biologically determined","B","emotional expression has no cultural component","C","all cultures express emotions identically","D","cultural norms shape how emotions are expressed, even if basic emotions are universal"], answer: "D" },
  { num: 66, set: 5, stem: "Health psychology differs from clinical psychology in that it focuses on:", choices: ["A","preventing illness and promoting health behaviors","B","only diagnosing mental disorders","C","prescribing psychotropic medication","D","performing brain surgery"], answer: "A" },
  { num: 67, set: 5, stem: "Independent self-construal, more common in individualist cultures, emphasizes:", choices: ["A","one's unique attributes, personal goals, and autonomy","B","group identity and social obligations","C","conformity to social norms","D","interdependence with family members"], answer: "A" },
  { num: 68, set: 5, stem: "Cross-cultural research is important because it:", choices: ["A","confirms that all psychological findings are universal","B","has no relevance to Western psychology","C","only applies to non-Western populations","D","tests whether psychological theories apply across different cultural contexts"], answer: "A" },
  { num: 69, set: 5, stem: "The emic approach in cross-cultural psychology:", choices: ["A","assumes all cultures are identical","B","studies behavior from within a specific culture's perspective","C","applies Western models to all cultures","D","ignores cultural differences entirely"], answer: "B" },
  { num: 70, set: 5, stem: "Positive psychology, founded by Seligman, focuses on:", choices: ["A","only treating mental illness","B","diagnosing personality disorders","C","studying strengths, well-being, and optimal human functioning","D","prescribing medication for happiness"], answer: "C" },
  { num: 71, set: 5, stem: "The cross-cultural study's finding about different self-concepts supports the idea that:", choices: ["A","self-concept is entirely biologically determined","B","culture has no influence on identity","C","all humans have identical self-concepts","D","culture fundamentally shapes how individuals define themselves"], answer: "D" },
  { num: 72, set: 5, stem: "Organizational behavior management (OBM) applies:", choices: ["A","psychoanalytic theory to workplace conflicts","B","behavioral principles to improve workplace performance and safety","C","humanistic therapy to all employees","D","personality testing as the sole hiring criterion"], answer: "B" },
  { num: 73, set: 5, stem: "The etic approach in cross-cultural psychology:", choices: ["A","studies behavior from within a specific culture only","B","rejects all cross-cultural comparisons","C","focuses on culture-specific phenomena","D","seeks to identify universal psychological processes across cultures"], answer: "D" },
  { num: 74, set: 5, stem: "The study's finding about Japanese masking of negative emotions illustrates:", choices: ["A","that Japanese participants have no negative emotions","B","how display rules differ across cultures","C","that emotional masking is unhealthy in all contexts","D","that emotions are not universal"], answer: "B" },
  { num: 75, set: 5, stem: "A limitation of cross-cultural research comparing two countries is:", choices: ["A","it provides perfect generalizability","B","cultural variation within each country is not captured","C","it eliminates all confounding variables","D","it is always too expensive to conduct"], answer: "A" },
];

const SIM6_AAQ = {
  num: 1,
  type: "aaq",
  title: "Article Analysis Question",
  points: 7,
  suggestedTime: 25,
  study: {
    title: "A Comparison of Positive Reinforcement and Mild Punishment on Classroom Behavior in Elementary School Students",
    citation: "Mitchell, D. A., Rivera, C., & Park, H. (2022). Journal of Applied Behavior Analysis, 55(2), 298-312.",
    introduction: "This study compared the effectiveness of positive reinforcement and mild punishment in improving on-task classroom behavior in elementary school children.",
    participants: "A total of 96 students from four third-grade classrooms at two elementary schools participated. Parental consent was obtained. The sample was 52% boys and 48% girls. Race/ethnicity: 42% White, 30% Hispanic/Latino, 18% Black/African American, 7% Asian/Asian American, 3% Other. Age range: 8-10 (mean = 8.6, SD = 0.62).",
    method: "Classrooms were randomly assigned to one of four conditions: positive reinforcement (stickers and verbal praise for on-task behavior), negative reinforcement (removal of an undesired task when on-task behavior was displayed), mild punishment (loss of 1 minute of recess for off-task behavior), or control (no intervention). The intervention lasted 4 weeks. Trained observers recorded on-task behavior using a standardized behavioral checklist (0-20 scale) during 30-minute observation periods, three times per week. Inter-rater reliability was high (kappa = .89).",
    results: "The positive reinforcement group showed the highest mean behavior scores (16.8), followed by negative reinforcement (14.2), punishment (11.5), and control (10.3). The difference between positive reinforcement and control was statistically significant (p < .001). The difference between punishment and control was not statistically significant (p = .15). Positive reinforcement was also associated with improved student affect and engagement.",
    dataTable: {
      title: "Mean On-Task Behavior Scores by Condition (4-Week Average)",
      headers: ["Condition", "Mean Behavior Score (out of 20)", "SD"],
      rows: [
        ["Positive Reinforcement", "16.8", "2.3"],
        ["Negative Reinforcement", "14.2", "3.1"],
        ["Punishment", "11.5", "3.8"],
        ["Control", "10.3", "4.0"],
      ],
    },
    footnotes: [
      "On-task behavior was scored on a 0-20 scale using a standardized behavioral checklist. Higher scores indicate more on-task behavior.",
    ],
  },
  parts: [
    { letter: "A", prompt: "Identify the research method used in the study." },
    { letter: "B", prompt: "State the operational definition of on-task behavior in the study." },
    { letter: "C", prompt: "Describe what the data indicate about the effectiveness of positive reinforcement compared to punishment." },
    { letter: "D", prompt: "Identify at least one ethical guideline applied by the researchers." },
    { letter: "E", prompt: "Explain the extent to which the research findings may or may not be generalizable using specific and relevant evidence from the study." },
    { letter: "F", prompt: "Explain how at least one of the research findings supports or refutes the claim that reinforcement is more effective than punishment for behavior modification." },
  ],
  rubric: [
    { row: "A", category: "Research Method", points: 1, description: "Correctly identifies as an experiment (classrooms randomly assigned to conditions)." },
    { row: "B", category: "Operational Definition", points: 1, description: "States that on-task behavior was operationally defined as the score on the standardized behavioral checklist (0-20 scale)." },
    { row: "C", category: "Data Interpretation", points: 1, description: "Describes that positive reinforcement (16.8) produced significantly higher behavior scores than punishment (11.5), a difference of 5.3 points, and that punishment was not significantly different from control." },
    { row: "D", category: "Ethics", points: 1, description: "Identifies parental consent, use of mild punishment, or high inter-rater reliability as methodological rigor." },
    { row: "E", category: "Generalizability", points: 1, description: "Uses sample characteristics to evaluate generalizability." },
    { row: "F", category: "Argumentation", points: 2, description: "Full credit requires citing specific evidence and explaining how reinforcement's superiority aligns with operant conditioning principles." },
  ],
};

const SIM6_EBQ = {
  num: 2,
  type: "ebq",
  title: "Evidence-Based Question",
  points: 7,
  suggestedTime: 45,
  topic: "The role of culture in shaping psychological processes",
  instructions: "Using the sources provided, develop and justify an argument about the role of culture in shaping psychological processes.\n\nA. Propose a specific and defensible claim based in psychological science that responds to the question.\n\nB.\n  i. Support your claim using at least one piece of specific and relevant evidence from one of the sources.\n  ii. Explain how the evidence from Part B(i) supports your claim using a psychological perspective, theory, concept, or research finding learned in AP Psychology.\n\nC.\n  i. Support your claim using an additional piece of specific and relevant evidence from a different source than the one that was used in Part B(i).\n  ii. Explain how the evidence from Part C(i) supports your claim using a different psychological perspective, theory, concept, or research finding learned in AP Psychology than the one that was used in Part B(ii).\n\nFor Parts B and C, you must cite the source you used.",
  sources: [
    {
      num: 1,
      title: "Culture and the Self: Implications for Cognition, Emotion, and Motivation",
      citation: "Markus, H. R., & Kitayama, S. (1991). Psychological Review, 98(2), 224-253.",
      summary: "This seminal paper proposed that people in individualist cultures (e.g., U.S.) develop independent self-construals, viewing themselves as unique, autonomous agents. People in collectivist cultures (e.g., Japan) develop interdependent self-construals, defining themselves through social roles and relationships. These different self-construals influence cognition (individualists focus on objects, collectivists focus on context), emotion (individualists value ego-focused emotions like pride, collectivists value other-focused emotions like empathy), and motivation (individualists pursue personal goals, collectivists pursue group harmony).",
    },
    {
      num: 2,
      title: "Cultural Syndromes and Subjective Well-Being",
      citation: "Triandis, H. C. (2000). In E. Diener & E. M. Suh (Eds.), Culture and Subjective Well-Being, MIT Press.",
      summary: "Triandis described cultural syndromes as shared patterns of beliefs, attitudes, and behaviors that characterize a cultural group. He found that subjective well-being was predicted by different factors across cultures: in individualist cultures, self-esteem and personal freedom were the strongest predictors, while in collectivist cultures, fulfilling social norms and maintaining harmonious relationships predicted well-being. In tight cultures (strong social norms with low tolerance for deviance), conformity predicted well-being. In loose cultures (weak norms, high tolerance for deviance), personal expression predicted well-being.",
    },
    {
      num: 3,
      title: "Adapting CBT for Culturally Diverse Clients",
      citation: "Hwang, W. C. (2006). Psychotherapy: Theory, Research, Practice, Training, 43(4), 573-581.",
      summary: "This paper reviewed how standard Western psychotherapy approaches need adaptation for culturally diverse clients. Key findings included: therapy dropout rates were 50% higher for ethnic minority clients using standard CBT compared to culturally adapted CBT. Culturally adapted therapy incorporated cultural values, communication styles, and family involvement. For collectivist clients, involving family in treatment improved outcomes by 35% compared to individual-only treatment. The paper argued that effective therapy must consider the client's cultural context, including beliefs about mental illness, help-seeking behavior, and the role of the family.",
    },
  ],
  rubric: [
    { row: "A", category: "Claim", points: 1, description: "Proposes a specific claim about culture's role in shaping psychological processes." },
    { row: "B", category: "Evidence from Sources", points: 2, description: "Uses correctly cited evidence from two different sources." },
    { row: "C", category: "Reasoning/Application", points: 2, description: "Explains evidence using AP Psychology concepts such as individualism/collectivism, self-construal, cultural syndromes, display rules, or the emic/etic distinction." },
    { row: "D", category: "Additional Reasoning", points: 2, description: "Provides additional reasoning connecting evidence to claim." },
  ],
};

const SIM6 = {
  id: "sim6",
  title: "Simulation 6 \u2014 Full Exam",
  badge: "Sim",
  hasMC: true,
  mcSets: SIM6_MC_SETS,
  mc: SIM6_MC,
  frqs: [SIM6_AAQ, SIM6_EBQ],
  figures: SIM6_FIGURES,
};

/* ═══════════════════════════════════════════════════════════
   OFFICIAL 2024 — Set 1 (Old format: 2 concept-application FRQs)
   ═══════════════════════════════════════════════════════════ */
const OFFICIAL_2024_SET1 = {
  id: "official-2024-set1",
  title: "2024 Official — Set 1",
  badge: "Official",
  hasMC: false,
  figures: {
    "o24s1-fig1": {
      type: "bar",
      title: "Mean Quiz Scores by Paper Color",
      xLabel: "Paper Color",
      yLabel: "Mean Quiz Score",
      data: [
        { label: "White Paper", value: 5.2 },
        { label: "Yellow Paper", value: 7.8 },
      ],
      note: "Results were statistically significant (p < 0.05)",
    },
  },
  frqs: [
    {
      num: 1, type: "aaq", legacyFRQ: true,
      title: "Concept Application — Gavin at the Museum",
      points: 7,
      suggestedTime: 25,
      study: {
        title: "Gavin at the Science Museum",
        citation: "2024 AP Psychology FRQ — Set 1, Question 1",
        introduction: "Gavin's parents took him to his favorite science museum, and he explored all of the exhibits. One of the interactive exhibits featured glass marbles. He grabbed a large marble and tried to bounce it on the ground. At one point during the visit, he became separated from his parents, and it took a few minutes for them to find him. Later that night, he drew a colorful picture of the exhibits at the museum. The next day, Gavin brought his picture with him to preschool. While his grandmother drove, Gavin talked to her about the picture.",
        participants: "",
        method: "",
        results: "",
      },
      parts: [
        { letter: "A", prompt: "Explain how Jean Piaget's concept of assimilation could relate to Gavin's experience with the glass marble." },
        { letter: "B", prompt: "Explain how egocentrism could relate to how Gavin interacted with his grandmother in the car." },
        { letter: "C", prompt: "Explain how avoidant attachment could relate to Gavin when he was separated from his parents." },
        { letter: "D", prompt: "Explain how the serial position effect could relate to Gavin in this scenario." },
        { letter: "E", prompt: "Explain how the motor cortex could relate to Gavin in this scenario." },
        { letter: "F", prompt: "Explain how a cognitive map could relate to Gavin in this scenario." },
        { letter: "G", prompt: "Explain how cones in the retina could relate to Gavin in this scenario." },
      ],
      rubric: [
        { row: "A", category: "Assimilation", points: 1, description: "Gavin tried to bounce the glass marble because he assimilated it into his existing schema for rubber/bouncy balls." },
        { row: "B", category: "Egocentrism", points: 1, description: "Gavin assumes his grandmother can see the picture he is describing even though she is driving and cannot look at it — he cannot take her perspective." },
        { row: "C", category: "Avoidant Attachment", points: 1, description: "Gavin showed little distress when separated from his parents, consistent with avoidant attachment." },
        { row: "D", category: "Serial Position Effect", points: 1, description: "Gavin is more likely to recall exhibits he saw first (primacy) or last (recency) at the museum." },
        { row: "E", category: "Motor Cortex", points: 1, description: "The motor cortex controls voluntary movement — Gavin used it to grab the marble, draw the picture, or bounce the marble." },
        { row: "F", category: "Cognitive Map", points: 1, description: "Gavin could have formed a mental representation of the museum layout to navigate between exhibits." },
        { row: "G", category: "Cones", points: 1, description: "Cones in the retina detect color and fine detail — Gavin used them to see the colorful exhibits and draw his colorful picture." },
      ],
    },
    {
      num: 2, type: "ebq", legacyFRQ: true,
      title: "Concept Application — Professor Gonzalez's Study",
      points: 7,
      suggestedTime: 25,
      topic: "Paper color and memory performance",
      study: {
        title: "Professor Gonzalez's Paper Color Experiment",
        citation: "2024 AP Psychology FRQ — Set 1, Question 2",
        introduction: "Professor Gonzalez hypothesizes that students will remember more information from his detailed course description if it is printed on yellow paper than if it is printed on standard white paper. To test this hypothesis, he put the names of all his students into a bowl, then drew out names to assign them to two different groups. He gave one group of the students in his class a course description printed on white paper, and gave the other group of students a course description printed on yellow paper. Students were instructed to thoroughly read the description outside of class in preparation for their next class. In the next class, he gave all students a ten-question quiz asking them about the information found on the course description. Professor Gonzalez then compared the number of correct answers for each group of students. The statistically significant results are depicted in the graph.",
        participants: "",
        method: "",
        results: "",
      },
      figureId: "o24s1-fig1",
      parts: [
        { letter: "A", prompt: "State the operational definition of the dependent variable." },
        { letter: "B", prompt: "Identify the experimental group." },
        { letter: "C", prompt: "In addition to the manipulation of an independent variable, identify the procedure Professor Gonzalez used to make this study a true experiment." },
        { letter: "D", prompt: "Explain how the data as presented in the graph do or do not support Professor Gonzalez's hypothesis." },
        { letter: "E", prompt: "Explain how context-dependent memory might relate to a student's performance on any quiz." },
        { letter: "F", prompt: "Explain how the Yerkes-Dodson law might relate to a student's performance on any quiz." },
        { letter: "G", prompt: "Explain how a low level of the Big Five trait of conscientiousness might relate to a student's performance on any quiz." },
      ],
      rubric: [
        { row: "A", category: "Operational Definition of DV", points: 1, description: "The number of correct answers on the ten-question quiz about the course description." },
        { row: "B", category: "Experimental Group", points: 1, description: "The group that received the course description printed on yellow paper." },
        { row: "C", category: "True Experiment", points: 1, description: "Random assignment — Professor Gonzalez randomly drew names from a bowl to assign students to groups." },
        { row: "D", category: "Data Interpretation", points: 1, description: "The data support the hypothesis because the yellow paper group scored higher than the white paper group, and the results were statistically significant." },
        { row: "E", category: "Context-Dependent Memory", points: 1, description: "A student might perform better on a quiz if the study environment matches the testing environment." },
        { row: "F", category: "Yerkes-Dodson Law", points: 1, description: "Moderate arousal leads to optimal performance; too little or too much anxiety/stress would hurt quiz performance." },
        { row: "G", category: "Conscientiousness", points: 1, description: "A student low in conscientiousness might be less organized, less diligent in studying, leading to poorer quiz performance." },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   OFFICIAL 2024 — Set 2 (Old format: 2 concept-application FRQs)
   ═══════════════════════════════════════════════════════════ */
const OFFICIAL_2024_SET2 = {
  id: "official-2024-set2",
  title: "2024 Official — Set 2",
  badge: "Official",
  hasMC: false,
  figures: {
    "o24s2-fig1": {
      type: "bar",
      title: "Mean Anxiety Ratings by Condition",
      xLabel: "Condition",
      yLabel: "Mean Anxiety Rating (1-8)",
      data: [
        { label: "Motivational\nStatements", value: 2.8 },
        { label: "Neutral\nStatements", value: 5.6 },
      ],
      note: "Results were statistically significant (p < 0.05). Scale: 1 = low anxiety, 8 = high anxiety.",
    },
  },
  frqs: [
    {
      num: 1, type: "aaq", legacyFRQ: true,
      title: "Concept Application — Claire's Championship Game",
      points: 7,
      suggestedTime: 25,
      study: {
        title: "Claire's Championship Basketball Game",
        citation: "2024 AP Psychology FRQ — Set 2, Question 1",
        introduction: "Claire's sports team made it to the championship basketball game. To play the game, the teammates will need to work together to move a ball toward their own goal. They must then aim carefully to throw the ball into a hoop that is elevated about 10 feet off the ground. The winner is the team that gets the ball into the hoop the most times.",
        participants: "",
        method: "Claire's team won the championship game. Ten years later, the team got together for a reunion at the gym where the game was originally held. At the reunion, they discussed the championship game.",
        results: "",
      },
      parts: [
        { letter: "A", prompt: "Explain how retinal disparity might help Claire be successful during the game." },
        { letter: "B", prompt: "Explain how intrinsic motivation might help Claire be successful during the game." },
        { letter: "C", prompt: "Explain how social facilitation might help Claire be successful during the game." },
        { letter: "D", prompt: "Explain how kinesthetic sense might help Claire be successful during the game." },
        { letter: "E", prompt: "Explain how context-dependent memory might influence Claire's recollection of the game at the reunion." },
        { letter: "F", prompt: "Explain how self-serving bias might influence Claire's recollection of the game at the reunion." },
        { letter: "G", prompt: "Explain how retroactive interference might influence Claire's recollection of the game at the reunion." },
      ],
      rubric: [
        { row: "A", category: "Retinal Disparity", points: 1, description: "Retinal disparity helps judge depth/distance — Claire uses it to aim the ball at the hoop and judge distances on the court." },
        { row: "B", category: "Intrinsic Motivation", points: 1, description: "Claire plays because she enjoys the game itself, not just for external rewards." },
        { row: "C", category: "Social Facilitation", points: 1, description: "Claire performs better on well-practiced skills because of the audience/crowd at the championship." },
        { row: "D", category: "Kinesthetic Sense", points: 1, description: "Kinesthetic sense provides awareness of body position and movement, helping Claire coordinate shooting, running, and passing." },
        { row: "E", category: "Context-Dependent Memory", points: 1, description: "Being in the same gym (context) where the game took place helps Claire recall more details about the championship." },
        { row: "F", category: "Self-Serving Bias", points: 1, description: "Claire may attribute the team's success to her own skill while attributing any mistakes to external factors." },
        { row: "G", category: "Retroactive Interference", points: 1, description: "New experiences and memories from the past 10 years may interfere with Claire's ability to accurately recall the championship game." },
      ],
    },
    {
      num: 2, type: "ebq", legacyFRQ: true,
      title: "Concept Application — Dr. Dawson's Study",
      points: 7,
      suggestedTime: 25,
      topic: "Motivational statements and test anxiety",
      study: {
        title: "Dr. Dawson's Motivational Statements Experiment",
        citation: "2024 AP Psychology FRQ — Set 2, Question 2",
        introduction: "Dr. Dawson is a psychologist who believes that students who read motivational statements before a test will experience lower levels of anxiety as compared with students who read neutral statements. To examine this belief, he conducted a study. In the study, he randomly assigned half of the participants to read motivational statements and the other half to read neutral statements. Immediately after reading the statements, all of the students completed a survey about their current level of anxiety (1 = low; 8 = high) and then took the test. Dr. Dawson found statistically significant results that are depicted in the graph.",
        participants: "",
        method: "",
        results: "",
      },
      figureId: "o24s2-fig1",
      parts: [
        { letter: "A", prompt: "State a valid operational definition of the dependent variable in this study." },
        { letter: "B", prompt: "Identify the control group in this study." },
        { letter: "C", prompt: "Explain why the study would be considered an experiment." },
        { letter: "D", prompt: "Explain how the results of the study do or do not support Dr. Dawson's hypothesis." },
        { letter: "E", prompt: "Explain how external locus of control might relate to the students who performed poorly on the test." },
        { letter: "F", prompt: "Explain how stage one of Selye's general adaptation syndrome might relate to the students who performed poorly on the test." },
        { letter: "G", prompt: "Explain how crystallized intelligence might relate to the students who performed poorly on the test." },
      ],
      rubric: [
        { row: "A", category: "Operational Definition of DV", points: 1, description: "The participants' self-reported anxiety rating on a scale of 1 (low) to 8 (high)." },
        { row: "B", category: "Control Group", points: 1, description: "The group that read neutral statements." },
        { row: "C", category: "Experiment Justification", points: 1, description: "It is an experiment because Dr. Dawson randomly assigned participants to conditions (manipulation of IV + random assignment)." },
        { row: "D", category: "Data Interpretation", points: 1, description: "The results support the hypothesis — the motivational statements group had lower anxiety ratings than the neutral statements group." },
        { row: "E", category: "External Locus of Control", points: 1, description: "Students with external locus of control believe outcomes are beyond their control, leading to less effort and poorer performance." },
        { row: "F", category: "GAS Stage 1 (Alarm)", points: 1, description: "The alarm stage activates the sympathetic nervous system/fight-or-flight, which can interfere with cognitive performance on the test." },
        { row: "G", category: "Crystallized Intelligence", points: 1, description: "Students with low crystallized intelligence (accumulated knowledge/vocabulary) would have difficulty on a vocabulary test." },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   OFFICIAL 2023 — Set 1 (Old format: 2 concept-application FRQs)
   ═══════════════════════════════════════════════════════════ */
const OFFICIAL_2023_SET1_FIGURES = {
  "o23s1-table": {
    type: "table",
    title: "Electric Cars Sold by Store",
    headers: ["Month", "Store A (supportive)", "Store B (strict)", "Store C (distant)"],
    rows: [
      ["January", "9", "7", "3"],
      ["February", "7", "8", "2"],
      ["March", "9", "5", "5"],
      ["April", "5", "3", "4"],
      ["May", "5", "2", "1"],
    ],
  },
};

const OFFICIAL_2023_SET1 = {
  id: "official-2023-set1",
  title: "2023 Official — Set 1",
  badge: "Official",
  hasMC: false,
  figures: OFFICIAL_2023_SET1_FIGURES,
  frqs: [
    {
      num: 1, type: "aaq", legacyFRQ: true,
      title: "Concept Application — Steve's Morning",
      points: 7,
      suggestedTime: 25,
      study: {
        title: "Steve Making Breakfast",
        citation: "2023 AP Psychology FRQ — Set 1, Question 1",
        introduction: "Steve is in the kitchen happily making breakfast for his four children, who are all playing together in the living room. After hearing a loud crash, Steve becomes quite upset and rushes into the living room, where he sees a lamp shattered on the floor. The children are watching television, and no one is trying to clean up the lamp.\n\nInstead of asking the children what happened, Steve immediately turns off the television and sends them all outside to rake the large amount of leaves in the backyard. Steve stays irritable for the rest of the day.",
        participants: "",
        method: "",
        results: "",
      },
      parts: [
        { letter: "A", prompt: "Explain how soundwave amplitude relates to the scenario." },
        { letter: "B", prompt: "Explain how procedural memory relates to the scenario." },
        { letter: "C", prompt: "Explain how diffusion of responsibility relates to the scenario." },
        { letter: "D", prompt: "Explain how dispositional attribution relates to the scenario." },
        { letter: "E", prompt: "Explain how ghrelin relates to the scenario." },
        { letter: "F", prompt: "Explain how the authoritarian parenting style relates to the scenario." },
        { letter: "G", prompt: "Explain how Steve's high level of the Big Five trait of neuroticism relates to the scenario." },
      ],
      rubric: [
        { row: "A", category: "Soundwave Amplitude", points: 1, description: "The loud crash had high amplitude soundwaves, which is why Steve heard it from the kitchen." },
        { row: "B", category: "Procedural Memory", points: 1, description: "Steve uses procedural memory (implicit) for the well-practiced skill of making breakfast." },
        { row: "C", category: "Diffusion of Responsibility", points: 1, description: "None of the four children clean up because each assumes another sibling will do it." },
        { row: "D", category: "Dispositional Attribution", points: 1, description: "Steve attributes the broken lamp to the children's behavior (internal/dispositional) rather than situational factors." },
        { row: "E", category: "Ghrelin", points: 1, description: "Ghrelin is a hunger hormone — Steve may be making breakfast because ghrelin signals are triggering hunger for him or the children." },
        { row: "F", category: "Authoritarian Parenting", points: 1, description: "Steve demonstrates authoritarian parenting by demanding obedience without explanation — he sends children outside without asking what happened." },
        { row: "G", category: "Neuroticism", points: 1, description: "Steve's high neuroticism is shown by his intense emotional reaction to the crash and remaining irritable for the rest of the day." },
      ],
    },
    {
      num: 2, type: "ebq", legacyFRQ: true,
      title: "Concept Application — Michael's Car Sales Study",
      points: 7,
      suggestedTime: 25,
      topic: "Management styles and car sales",
      study: {
        title: "Michael's Electric Car Sales Study",
        citation: "2023 AP Psychology FRQ — Set 1, Question 2",
        introduction: "Michael is the regional manager for a car company and needs to give a presentation to the president of the company about how different management styles might relate to the total number of sales of the company's new electric car. He hires an industrial/organizational psychologist to study three stores, each in a different city. Each store's manager has their own distinct management style:\n- Store A: supportive style (open and warm)\n- Store B: strict style (rigid and severe)\n- Store C: distant style (permissive and disengaged), managed by Michael's good friend\n\nThe number of electric cars sold at each store over a five-month period is shown in the table.",
        participants: "",
        method: "",
        results: "",
        dataTable: {
          title: "Electric Cars Sold by Store",
          headers: ["Month", "Store A (supportive)", "Store B (strict)", "Store C (distant)"],
          rows: [
            ["January", "9", "7", "3"],
            ["February", "7", "8", "2"],
            ["March", "9", "5", "5"],
            ["April", "5", "3", "4"],
            ["May", "5", "2", "1"],
          ],
        },
      },
      parts: [
        { letter: "A", prompt: "Explain why this study is not a true experiment." },
        { letter: "B", prompt: "Identify the implied dependent variable for the study if the study had been a true experiment." },
        { letter: "C", prompt: "Calculate the mean of Store B's sales." },
        { letter: "D", prompt: "Explain why the location of the store is a confounding variable in this study." },
        { letter: "E", prompt: "Explain how the halo effect could influence Michael's interpretation of the findings." },
        { letter: "F", prompt: "Explain why the hiring of an industrial/organizational psychologist was appropriate for this study." },
        { letter: "G", prompt: "Explain how Michael could use positive reinforcement to help him finish his presentation by the deadline." },
      ],
      rubric: [
        { row: "A", category: "Not a True Experiment", points: 1, description: "There was no random assignment of managers to stores, and the IV (management style) was not manipulated by the researcher." },
        { row: "B", category: "Dependent Variable", points: 1, description: "The number of electric cars sold at each store." },
        { row: "C", category: "Mean Calculation", points: 1, description: "Store B mean = (7 + 8 + 5 + 3 + 2) / 5 = 25 / 5 = 5.0" },
        { row: "D", category: "Confounding Variable", points: 1, description: "Each store is in a different city, so differences in sales could be due to location factors rather than management style." },
        { row: "E", category: "Halo Effect", points: 1, description: "Michael might view Store C's results more favorably because the manager is his good friend — his positive feelings about the person bias his judgment." },
        { row: "F", category: "I/O Psychology", points: 1, description: "I/O psychologists specialize in workplace behavior, management effectiveness, and organizational productivity — directly relevant to this study." },
        { row: "G", category: "Positive Reinforcement", points: 1, description: "Michael could reward himself with something pleasant (e.g., a treat, break) after completing sections of the presentation to increase the behavior of working on it." },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   OFFICIAL 2023 — Set 2 (Old format: 2 concept-application FRQs)
   ═══════════════════════════════════════════════════════════ */
const OFFICIAL_2023_SET2_FIGURES = {
  "o23s2-table": {
    type: "table",
    title: "Participants' Ratings of Likelihood to Buy Game",
    headers: ["", "Observed Demo (n=50)", "Played Game (n=50)", "p value"],
    rows: [
      ["Mean", "6.31", "2.04", "< 0.001"],
      ["Standard Deviation", "1.25", "0.80", ""],
    ],
  },
};

const OFFICIAL_2023_SET2 = {
  id: "official-2023-set2",
  title: "2023 Official — Set 2",
  badge: "Official",
  hasMC: false,
  figures: OFFICIAL_2023_SET2_FIGURES,
  frqs: [
    {
      num: 1, type: "aaq", legacyFRQ: true,
      title: "Concept Application — Jordan's New School",
      points: 7,
      suggestedTime: 25,
      study: {
        title: "Jordan Adjusting to a New School",
        citation: "2023 AP Psychology FRQ — Set 2, Question 1",
        introduction: "Jordan recently moved to a new school for her senior year of high school, and she has been adjusting to her new environment.\n\nJordan tries out for and makes the debate team. Jordan has made friends with other members of the team, and she really enjoys sitting with them at lunch every day. The coach is impressed with Jordan's debate skills, so he makes her captain of the team. When Jordan starts to help the coach plan for the next big debate, her friends stop sitting with her at lunch. She then stops helping the coach plan for the next debate but ends up winning it.",
        participants: "",
        method: "",
        results: "",
      },
      parts: [
        { letter: "A", prompt: "Explain how the spotlight effect relates to Jordan's adjustment to her new school." },
        { letter: "B", prompt: "Explain how a cognitive map relates to Jordan's adjustment to her new school." },
        { letter: "C", prompt: "Explain how Jordan's low level of the Big Five trait of extraversion relates to her adjustment to her new school." },
        { letter: "D", prompt: "Explain how negative punishment relates to the scenario." },
        { letter: "E", prompt: "Explain how Piaget's formal operational stage of cognitive development relates to the scenario." },
        { letter: "F", prompt: "Explain how actor-observer bias concerning Jordan's debate performance relates to the scenario." },
        { letter: "G", prompt: "Explain how Jordan's high level of self-efficacy relates to the scenario." },
      ],
      rubric: [
        { row: "A", category: "Spotlight Effect", points: 1, description: "Jordan overestimates how much others notice her as the new student — she feels everyone is watching/judging her." },
        { row: "B", category: "Cognitive Map", points: 1, description: "Jordan needs to form a mental representation of the new school layout to navigate between classes." },
        { row: "C", category: "Low Extraversion", points: 1, description: "Jordan's low extraversion makes adjusting harder as she is less outgoing and may struggle to initiate social interactions." },
        { row: "D", category: "Negative Punishment", points: 1, description: "Jordan's friends removed a pleasant stimulus (sitting with her at lunch) when she helped the coach, decreasing her helping behavior." },
        { row: "E", category: "Formal Operational Stage", points: 1, description: "Jordan can think abstractly and hypothetically about debate strategies and complex arguments." },
        { row: "F", category: "Actor-Observer Bias", points: 1, description: "Jordan attributes her debate success to her own skill (dispositional), while others may attribute it to situational factors." },
        { row: "G", category: "High Self-Efficacy", points: 1, description: "Jordan's belief in her own ability helps her win the debate even without her friends' support." },
      ],
    },
    {
      num: 2, type: "ebq", legacyFRQ: true,
      title: "Concept Application — Mobile Gamer Central Study",
      points: 7,
      suggestedTime: 25,
      topic: "Marketing effectiveness for a game app",
      study: {
        title: "Mobile Gamer Central Marketing Study",
        citation: "2023 AP Psychology FRQ — Set 2, Question 2",
        introduction: "Mobile Gamer Central (MGC) is preparing to launch a new game app. The advertisements for this new game are brightly colored, have lively music, and feature celebrities playing the game. To generate interest in the game, MGC pays to have these advertisements pop up multiple times while people are using other apps on their phone. The marketing director is pleased with the advertising campaign and thinks the game is really fun to play.\n\nAfter a few weeks with moderate success, MGC's marketing director decides to test the most effective ways to increase sales of the game. Marketing researchers recruit 100 people to play the new game. They randomly assign half of the people to observe someone demonstrating how the game is played and assign the other half of the people to play the video game themselves. Participants rate how likely they are to buy the game on a scale of 1 (not likely) through 10 (very likely). Results are presented in the table.",
        participants: "",
        method: "",
        results: "",
        dataTable: {
          title: "Participants' Ratings of Likelihood to Buy Game",
          headers: ["", "Observed Demo (n=50)", "Played Game (n=50)", "p value"],
          rows: [
            ["Mean", "6.31", "2.04", "< 0.001"],
            ["Standard Deviation", "1.25", "0.80", ""],
          ],
        },
      },
      parts: [
        { letter: "A", prompt: "Explain how the peripheral route to persuasion relates to the advertising scenario." },
        { letter: "B", prompt: "Explain how the false consensus effect relates to the marketing director in the scenario." },
        { letter: "C", prompt: "Explain how the mere-exposure effect relates to the advertising scenario." },
        { letter: "D", prompt: "Identify the operational definition of the dependent variable in the study." },
        { letter: "E", prompt: "Explain what the difference between the standard deviations in the study indicates." },
        { letter: "F", prompt: "Explain why random assignment is necessary for determining cause and effect in the study." },
        { letter: "G", prompt: "Explain what the p value allows MGC to conclude about the study." },
      ],
      rubric: [
        { row: "A", category: "Peripheral Route", points: 1, description: "The ads use bright colors, music, and celebrities — peripheral cues rather than logical arguments about the game's quality." },
        { row: "B", category: "False Consensus Effect", points: 1, description: "The marketing director thinks the game is fun and overestimates how many others share that opinion." },
        { row: "C", category: "Mere-Exposure Effect", points: 1, description: "Repeatedly showing the ad builds familiarity, which increases people's liking of the game." },
        { row: "D", category: "Operational Definition of DV", points: 1, description: "Participants' rating of how likely they are to buy the game on a scale of 1 (not likely) to 10 (very likely)." },
        { row: "E", category: "Standard Deviation", points: 1, description: "The observed demo group (SD=1.25) had more variability in ratings than the played game group (SD=0.80), meaning responses were more spread out." },
        { row: "F", category: "Random Assignment", points: 1, description: "Random assignment controls for pre-existing differences between groups, allowing researchers to attribute differences in ratings to the IV." },
        { row: "G", category: "P Value", points: 1, description: "The p < 0.001 means the difference between groups is very unlikely due to chance, so MGC can conclude the difference is statistically significant." },
      ],
    },
  ],
};

export const ALL_TESTS = [SIM1, OFFICIAL_2025_SET1, OFFICIAL_2025_SET2, OFFICIAL_2024_SET1, OFFICIAL_2024_SET2, OFFICIAL_2023_SET1, OFFICIAL_2023_SET2, SIM2, SIM3, SIM4, SIM5, SIM6];
