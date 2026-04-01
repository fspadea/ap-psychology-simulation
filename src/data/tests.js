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

export const ALL_TESTS = [SIM1];
