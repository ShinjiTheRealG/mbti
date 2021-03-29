// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [{
    prompt: 'You have a high level of confidence in your ability to experience deep sympathy for anyone, serve as a moral compass, and/or decipher what you personally find to be good/bad or what you love/hate',
    ISTJ: 2,
    ISTP: -2,
    INTJ: 2,
    INFJ: -1,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: -1,
    INTP: -2,
    INFP: 2,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 1,
    ENFP: 1,
    class: 'group0'
  },
  {
    prompt: 'More often, you are seeking INTERNAL harmony through sensitivity to your own and others’ inner values and outer behavior rather than seeking EXTERNAL harmony through organizing and structuring the environment to meet people’s needs and their own values',
    ISTJ: 2,
    ISTP: -4,
    INTJ: 2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: 2,
    ENFJ: -2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: 4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: 4,
    class: 'group1'
  },
  {
    prompt: 'When asking someone to do something, you tend to be explicit, concise, specific, and/or blunt with your command rather than getting them to buy into what you say with more information and implication',
    ISTJ: 6,
    ISTP: 6,
    INTJ: 6,
    INFJ: 6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: -6,
    INTP: -6,
    INFP: -6,
    ESFJ: -6,
    ENTP: -6,
    ESFP: -6,
    ENFP: -6,
    class: 'group2'
  },
  {
    prompt: 'You are usually highly responsible with caring for the feelings of others, creating harmonious social atmospheres where people feel accepted and affirmed, and/or making sure people are being appropriate',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 0,
    ENTJ: -2,
    ENFJ: 1,
    ISFP: -1,
    ISFJ: 2,
    INTP: 0,
    INFP: -1,
    ESFJ: 1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group3'
  },
  {
    prompt: 'More often, you are thinking with respect to objective data and empiricism rather than your subjective logic',
    ISTJ: 4,
    ISTP: -2,
    INTJ: 4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: 4,
    ENFJ: -4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: 2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: 2,
    class: 'group4'
  },
  {
    prompt: 'You have a natural drive to be more initiating in conversation with others rather than responding',
    ISTJ: -6,
    ISTP: -6,
    INTJ: -6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: -6,
    INTP: -6,
    INFP: -6,
    ESFJ: 6,
    ENTP: 6,
    ESFP: 6,
    ENFP: 6,
    class: 'group5'
  },
  {
    prompt: 'You tend to be unyielding and overconfident in your ability to decipher what is true/false using subjective logical analysis and/or you crave using your deduction and analysis as a source of relief',
    ISTJ: -1,
    ISTP: 1,
    INTJ: -1,
    INFJ: 2,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: -1,
    ISFP: -1,
    ISFJ: 2,
    INTP: 1,
    INFP: -1,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group6'
  },
  {
    prompt: 'More often, you are directing energy inwardly to focus on unconscious images, connections, and patterns that create inner vision and insight RATHER than directing energy outwardly to scan for new ideas, interesting patterns, and future possibilities',
    ISTJ: -4,
    ISTP: 2,
    INTJ: 4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: 4,
    ENFJ: 4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: -2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: -2,
    class: 'group7'
  },
  {
    prompt: 'More often, you are more comfortable with lack of progress if you maintain the quality of your goal RATHER than adapting or changing the goal for the sake of progress ',
    ISTJ: -6,
    ISTP: -6,
    INTJ: -6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: 6,
    ISFJ: 6,
    INTP: 6,
    INFP: 6,
    ESFJ: -6,
    ENTP: -6,
    ESFP: -6,
    ENFP: -6,
    class: 'group8'
  },
  {
    prompt: 'You are fearful with expressing disagreement for fear of being inarticulate, worried about what other people think of you and your status, and/or insecure about gathering data/evidence and tend to overplan',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: -1,
    ESTP: 1,
    ENTJ: -1,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: 0,
    INTP: 0,
    INFP: 2,
    ESFJ: 0,
    ENTP: 1,
    ESFP: 0,
    ENFP: 0,
    class: 'group9'
  },
  {
    prompt: 'More often, you are directing energy outwardly and acquiring information by focusing on a detailed and objective sensory data in the present RATHER than directing energy inwardly and storing the facts and details of both reality and internal thoughts, experiences, and memories',
    ISTJ: -2,
    ISTP: 4,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: -4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: -4,
    class: 'group10'
  },
  {
    prompt: 'You are prone to aggression, being overbearing, and underexplaining rather than being prone to passive aggression, overexplaining, and beating around the bush',
    ISTJ: 6,
    ISTP: 6,
    INTJ: 6,
    INFJ: 6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: -6,
    INTP: -6,
    INFP: -6,
    ESFJ: -6,
    ENTP: -6,
    ESFP: -6,
    ENFP: -6,
    class: 'group11'
  },
  {
    prompt: 'When you experience intuitive visions or insights, they are often negative, or you tend to distrust your own visions and feel obstructed by them',
    ISTJ: 0,
    ISTP: -1,
    INTJ: -2,
    INFJ: -2,
    ESTJ: 0,
    ESTP: 1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 2,
    ESFP: 1,
    ENFP: 2,
    class: 'group12'
  },
  {
    prompt: 'You are very often deciding according to importance or value or with what is good/bad or what you like/do not like',
    ISTJ: 2,
    ISTP: -4,
    INTJ: 2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: 2,
    ENFJ: -2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: 4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: 4,
    class: 'group13'
  },
  {
    prompt: 'You tend to enjoy large social groups of 4 or more rather than under 4 ',
    ISTJ: -6,
    ISTP: -6,
    INTJ: -6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: -6,
    INTP: -6,
    INFP: -6,
    ESFJ: 6,
    ENTP: 6,
    ESFP: 6,
    ENFP: 6,
    class: 'group14'
  },
  {
    prompt: 'You tend to be very critical with what other people want, or you often criticize yourself and others for not having thought through all the consequences/possibilities',
    ISTJ: 0,
    ISTP: 2,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: 0,
    INTP: 1,
    INFP: 1,
    ESFJ: 0,
    ENTP: -1,
    ESFP: -1,
    ENFP: -1,
    class: 'group15'
  },
  {
    prompt: 'Your mind is quite often considering and in tune with the feelings and values of other people and considering what would be appropriate, kind, or nice',
    ISTJ: -4,
    ISTP: 2,
    INTJ: -4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: -4,
    ENFJ: 4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: -2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: -2,
    class: 'group16'
  },
  {
    prompt: 'You tend to be patient with planning rather than restless and anxious with inaction towards your goals',
    ISTJ: -6,
    ISTP: -6,
    INTJ: -6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: 6,
    ISFJ: 6,
    INTP: 6,
    INFP: 6,
    ESFJ: -6,
    ENTP: -6,
    ESFP: -6,
    ENFP: -6,
    class: 'group17'
  },
  {
    prompt: 'You tend to fail to notice critical details and seem to misremember events, you may pretend to hear only the literal level of communication, or you may find it amusing to rewrite history or have an urge to do so',
    ISTJ: -1,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group18'
  },
  {
    prompt: 'Your mind is quite often focused on classifying and building very personal principles, frameworks, and/or blueprints to explain reality',
    ISTJ: -2,
    ISTP: 4,
    INTJ: -2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: -2,
    ENFJ: 2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: -4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: -4,
    class: 'group19'
  },
  {
    prompt: 'You tend to be more comfortable with and/or trust things that are tangible, practical, and realistic rather than focusing more on the theoretical, implications, or ideals',
    ISTJ: 6,
    ISTP: 6,
    INTJ: -6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: 6,
    ENTJ: -6,
    ENFJ: -6,
    ISFP: 6,
    ISFJ: 6,
    INTP: -6,
    INFP: -6,
    ESFJ: 6,
    ENTP: -6,
    ESFP: 6,
    ENFP: -6,
    class: 'group20'
  },
  {
    prompt: 'You tend to be completely oblivious to what is happening and fail to see danger in the environment',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 1,
    INFP: 1,
    ESFJ: 0,
    ENTP: 2,
    ESFP: -1,
    ENFP: 2,
    class: 'group21'
  },
  {
    prompt: 'You tend to be more focused on what works in reality and are less trusting of logical speculation and less caring of how things work',
    ISTJ: 4,
    ISTP: -2,
    INTJ: 4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: 4,
    ENFJ: -4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: 2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: 2,
    class: 'group22'
  },
  {
    prompt: 'You tend to be more focused on what is good for the group and value interdependence rather than focused on what works and valuing self-determination',
    ISTJ: 6,
    ISTP: -6,
    INTJ: -6,
    INFJ: 6,
    ESTJ: 6,
    ESTP: -6,
    ENTJ: -6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: 6,
    INTP: -6,
    INFP: 6,
    ESFJ: 6,
    ENTP: -6,
    ESFP: -6,
    ENFP: 6,
    class: 'group23'
  },
  {
    prompt: 'You tend to be very confident in your ability to read social situations instantly and/or to mirror and express the feelings of others',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: -2,
    ESTP: 1,
    ENTJ: -2,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: 0,
    ESFJ: 2,
    ENTP: 1,
    ESFP: 0,
    ENFP: 0,
    class: 'group24'
  },
  {
    prompt: 'You often see the symbolism or inner implications of objects and events with respect to your life and vision',
    ISTJ: -4,
    ISTP: 2,
    INTJ: 4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: 4,
    ENFJ: 4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: -2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: -2,
    class: 'group25'
  },
  {
    prompt: 'You tend to prefer using and reusing consistent frameworks, procedures, or structured techniques rather than taking on situations uniquely for the benefit of the interests of all involved',
    ISTJ: 6,
    ISTP: -6,
    INTJ: 6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: -6,
    ENTJ: 6,
    ENFJ: -6,
    ISFP: -6,
    ISFJ: 6,
    INTP: 6,
    INFP: -6,
    ESFJ: 6,
    ENTP: 6,
    ESFP: -6,
    ENFP: -6,
    class: 'group26'
  },
  {
    prompt: 'You tend to be very responsible with figuring out how things work and explaining that to others, with playing devils advocate to challenge the views of others, and/or providing deductive analysis',
    ISTJ: 0,
    ISTP: 1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 1,
    INFP: -1,
    ESFJ: 0,
    ENTP: 2,
    ESFP: -1,
    ENFP: -1,
    class: 'group27'
  },
  {
    prompt: 'You often recognize intent, the perspectives of others, or the real reasons behind actions',
    ISTJ: 2,
    ISTP: -4,
    INTJ: -2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: -2,
    ENFJ: -2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: 4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: 4,
    class: 'group28'
  },
  {
    prompt: 'Your mind tends to be future focused and you tend to speculate rather than your mind tending to be present or past focused and you being more often skeptic',
    ISTJ: -6,
    ISTP: -6,
    INTJ: 6,
    INFJ: 6,
    ESTJ: -6,
    ESTP: -6,
    ENTJ: 6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: -6,
    INTP: 6,
    INFP: 6,
    ESFJ: -6,
    ENTP: 6,
    ESFP: -6,
    ENFP: 6,
    class: 'group29'
  }, 
  {
    prompt: 'You tend to be sporadic (too much or too little) with micromanaging and/or giving factual advice, present facts with childlike fervor and excitement, and/or you can get tyrannical and decisive with rules',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: -1,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 2,
    ENFP: 2,
    class: 'group30'
  },
  {
    prompt: 'You often enter an inner world of stored impressions of reality and often the immediate experience or words are instantly linked with prior experiences/memories and you register that there is a similarity or difference. This could be that you often notice how things may taste, look, or sound different than usual. It is a sort of keenness in PECULIAR details',
    ISTJ: 4,
    ISTP: -2,
    INTJ: -4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: -4,
    ENFJ: -4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: 2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: 2,
    class: 'group31'
  },
  {
    prompt: 'You are often enforcing, censoring, or suppressing rather than rebelling, dissenting, or being disobedient',
    ISTJ: 6,
    ISTP: -6,
    INTJ: -6,
    INFJ: 6,
    ESTJ: 6,
    ESTP: -6,
    ENTJ: -6,
    ENFJ: 6,
    ISFP: -6,
    ISFJ: 6,
    INTP: -6,
    INFP: 6,
    ESFJ: 6,
    ENTP: -6,
    ESFP: -6,
    ENFP: 6,
    class: 'group32'
  },
  {
    prompt: 'You tend to be worried or fearful in determining what your path in life is or figuring out what you want in general',
    ISTJ: 0,
    ISTP: 0,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 2,
    ENFP: 0,
    class: 'group33'
  },
  {
    prompt: 'You tend to be excited by motion, action, and nature and adept at physical multitasking with a videogame-like mind primed for action',
    ISTJ: -2,
    ISTP: 4,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: -4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: -4,
    class: 'group34'
  },
  {
    prompt: 'You are prone to weighting the process over people or the system over self rather than weighting the profit over people and/or being cheap',
    ISTJ: 6,
    ISTP: -6,
    INTJ: 6,
    INFJ: -6,
    ESTJ: 6,
    ESTP: -6,
    ENTJ: 6,
    ENFJ: -6,
    ISFP: -6,
    ISFJ: 6,
    INTP: 6,
    INFP: -6,
    ESFJ: 6,
    ENTP: 6,
    ESFP: -6,
    ENFP: -6,
    class: 'group35'
  },
  {
    prompt: 'You tend to be overwhelmed or pressured by too many possible futures and/or you tend to see many negative outcomes to things',
    ISTJ: 1,
    ISTP: 0,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: -1,
    ESFP: 0,
    ENFP: -1,
    class: 'group36'
  },
  {
    prompt: 'You often focus on voice tone and word choice and are attentive and curious to what is not said',
    ISTJ: 2,
    ISTP: -4,
    INTJ: 2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: 2,
    ENFJ: -2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: 4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: 4,
    class: 'group37'
  },
  {
    prompt: 'You are often critical about sameness or routine in your daily life and/or hypercritical about inaccuracy of details and memories',
    ISTJ: 0,
    ISTP: 2,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: -1,
    ISFP: 2,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group38'
  },
  {
    prompt: 'You often feel good when other people feel good, laugh when others laugh, and/or feel bad when others feel bad',
    ISTJ: -4,
    ISTP: 2,
    INTJ: -4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: -4,
    ENFJ: 4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: -2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: -2,
    class: 'group39'
  },
  {
    prompt: 'You are often oblivious to your surroundings and/or unaware of how you are coming across to others',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 2,
    INFP: 2,
    ESFJ: 0,
    ENTP: 2,
    ESFP: -1,
    ENFP: 2,
    class: 'group40'
  },
  {
    prompt: 'You are hesitant to believe or buy into something until it makes sense to you, even if the information is from a reputable source or has a lot of data to support it',
    ISTJ: -2,
    ISTP: 4,
    INTJ: -2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: -2,
    ENFJ: 2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: -4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: -4,
    class: 'group41'
  },
  {
    prompt: 'You often find it difficult to to figure out how you feel about things',
    ISTJ: 0,
    ISTP: 2,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 2,
    INFP: -1,
    ESFJ: 0,
    ENTP: 1,
    ESFP: -1,
    ENFP: -1,
    class: 'group42'
  },
  {
    prompt: 'You are hesitant to believe something that makes sense to you until you have data or sources to verify',
    ISTJ: 4,
    ISTP: -2,
    INTJ: 4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: 4,
    ENFJ: -4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: 2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: 2,
    class: 'group43'
  },
  {
    prompt: 'You often demand clarifying ideas and definitions first rather than starting with facts',
    ISTJ: 0,
    ISTP: 2,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 2,
    INFP: -1,
    ESFJ: 0,
    ENTP: 1,
    ESFP: -1,
    ENFP: -1,
    class: 'group44'
  },
  {
    prompt: 'You are more interested in pioneering a new road than in taking any beaten paths',
    ISTJ: -4,
    ISTP: 2,
    INTJ: 4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: 4,
    ENFJ: 4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: -2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: -2,
    class: 'group45'
  },
  {
    prompt: 'You are often responsible with teaching others structures, explaining data and evidence, and/or leading groups in executive roles',
    ISTJ: 2,
    ISTP: 0,
    INTJ: 2,
    INFJ: -1,
    ESTJ: 1,
    ESTP: 0,
    ENTJ: 1,
    ENFJ: -1,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group46'
  },
  {
    prompt: 'You often think analogically and notice and apply patterns of relationships across multiple contexts',
    ISTJ: 2,
    ISTP: -4,
    INTJ: -2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: -2,
    ENFJ: -2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: 4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: 4,
    class: 'group47'
  },
  {
    prompt: 'You are often fixated on what you want and get frustrated by the inability to actualize it, and/or you enjoy downtime to consider deeper meanings of things',
    ISTJ: -1,
    ISTP: 2,
    INTJ: 1,
    INFJ: 1,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group48'
  },
  {
    prompt: 'You tend to be very dutiful, obligation driven, and very loyal compared to others',
    ISTJ: 4,
    ISTP: -2,
    INTJ: -4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: -4,
    ENFJ: -4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: 2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: 2,
    class: 'group49'
  },
  {
    prompt: 'You tend to go through familiar routines to destress and/or you are fearful of new places, new jobs, or new situations, contimplating all the negative possibilities',
    ISTJ: 2,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 2,
    INTP: 1,
    INFP: 1,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 0,
    ENFP: -1,
    class: 'group50'
  },
  {
    prompt: 'You are in tune with the experiences that you are giving to others, particularly sensory related experiences',
    ISTJ: -2,
    ISTP: 4,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: -4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: -4,
    class: 'group51'
  },
  {
    prompt: 'You tend to experience intense revulsion for slow and tedious tasks and/or you find dwelling in the past to be unimportant and unapplicable',
    ISTJ: -1,
    ISTP: 0,
    INTJ: 1,
    INFJ: 1,
    ESTJ: -1,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 2,
    ENFP: 0,
    class: 'group52'
  },
  {
    prompt: 'You have a long and complicated list of very personal values that you frequently refer to',
    ISTJ: 2,
    ISTP: -4,
    INTJ: 2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: 2,
    ENFJ: -2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: 4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: 4,
    class: 'group53'
  },
  {
    prompt: 'You may sharply criticize physical appearances of self',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 1,
    INFJ: 1,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: -1,
    ESFJ: 2,
    ENTP: -1,
    ESFP: 0,
    ENFP: -1,
    class: 'group54'
  },
  {
    prompt: 'You pay a lot of daily attention towards making other people happy and caring for them',
    ISTJ: -4,
    ISTP: 2,
    INTJ: -4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: -4,
    ENFJ: 4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: -2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: -2,
    class: 'group55'
  },
  {
    prompt: 'You tend not to trust your deepest feelings and find it difficult to determine the importance of your values, sometimes believing them to be more important than they actually are',
    ISTJ: 0,
    ISTP: 1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 1,
    INFP: -1,
    ESFJ: 0,
    ENTP: 2,
    ESFP: 0,
    ENFP: 0,
    class: 'group56'
  },
  {
    prompt: 'You are often thinking about and devloping personal theories, and you tend to trust these deliberations',
    ISTJ: -2,
    ISTP: 4,
    INTJ: -2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: -2,
    ENFJ: 2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: -4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: -4,
    class: 'group57'
  },
  {
    prompt: 'You completely misinterpret social interactions and you sometimes deny that the feeling states involved actually exist',
    ISTJ: 1,
    ISTP: 0,
    INTJ: 1,
    INFJ: -1,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 2,
    ENFJ: -1,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group58'
  },
  {
    prompt: 'You often decide/think first based on observed cause and effect or observed reasons and consequences rather than imagined/deduced effects or consequences',
    ISTJ: 4,
    ISTP: -2,
    INTJ: 4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: 4,
    ENFJ: -4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: 2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: 2,
    class: 'group59'
  },
  {
    prompt: 'You are confident in your ability to organize people and/or resources to accomplish goals efficiently, and in accordance with clearly defined parameters',
    ISTJ: 1,
    ISTP: 0,
    INTJ: 1,
    INFJ: 0,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 2,
    ENFJ: -1,
    ISFP: -1,
    ISFJ: 0,
    INTP: 0,
    INFP: -1,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group60'
  },
  {
    prompt: 'You are less likely to go with the flow of a group and can be adamant about what you want to do (particularly in leisure scenarios like picking a place to eat or choosing a fun activity)',
    ISTJ: -4,
    ISTP: 2,
    INTJ: 4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: 4,
    ENFJ: 4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: -2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: -2,
    class: 'group61'
  },
  {
    prompt: 'You are very responsible with your insights and visions of the big picture and you tend to use them to guide others and lead them to their own insights',
    ISTJ: -1,
    ISTP: 0,
    INTJ: 1,
    INFJ: 1,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group62'
  },
  {
    prompt: 'You easily go with the flow of the group and can be indifferent when asked to make a decision for a group related choice (particularly in leisure scenarios like choosing a place to eat or fun activity)',
    ISTJ: 2,
    ISTP: -4,
    INTJ: -2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: -2,
    ENFJ: -2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: 4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: 4,
    class: 'group63'
  },
  {
    prompt: 'You get hooked by new ideas and enjoy persuing them enthusiastically, sometimes throwing caution to the wind. You also enjoy making bucket lists of things you want to do in the future',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 2,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group64'
  },
  {
    prompt: 'You often think about past stories that relate to the topic of conversation and you passionately share them',
    ISTJ: 4,
    ISTP: -2,
    INTJ: -4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: -4,
    ENFJ: -4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: 2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: 2,
    class: 'group65'
  },        
  {
    prompt: 'You tend to be anxious with received experiences, finances, deadlines, and your stability/comfort (please remember to compare yourself to others. Most people are anxious with these things, but are you particularly more? or particularly less? If you read the beginning section of this test, you should not need a reminder. This is here just in case)',
    ISTJ: -1,
    ISTP: 1,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 1,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 2,
    ESFP: 0,
    ENFP: 2,
    class: 'group66'
  },
  {
    prompt: 'You tend to be rather impatient in general',
    ISTJ: -2,
    ISTP: 4,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: -4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: -4,
    class: 'group67'
  },
  {
    prompt: 'You tend to feel that responding without reflecting is foreign and/or you tend to be very safety focused in sensate reality',
    ISTJ: 2,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 1,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 2,
    INTP: 0,
    INFP: 0,
    ESFJ: 1,
    ENTP: 0,
    ESFP: -1,
    ENFP: 0,
    class: 'group68'
  },
  {
    prompt: 'You are often thinking about how things work rather than what works',
    ISTJ: -2,
    ISTP: 4,
    INTJ: -2,
    INFJ: 2,
    ESTJ: -2,
    ESTP: 4,
    ENTJ: -2,
    ENFJ: 2,
    ISFP: -4,
    ISFJ: 2,
    INTP: 4,
    INFP: -4,
    ESFJ: 2,
    ENTP: 4,
    ESFP: -4,
    ENFP: -4,
    class: 'group69'
  },
  {
    prompt: 'You tend to be very critical about moral standards that you and others need to live up to',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 2,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 2,
    INTP: -1,
    INFP: -1,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group70'
  },
  {
    prompt: 'During conversations where information is presented, you often initially consider where you got your information as well as where other people got their information from before asessing whether it is true',
    ISTJ: 4,
    ISTP: -2,
    INTJ: 4,
    INFJ: -4,
    ESTJ: 4,
    ESTP: -2,
    ENTJ: 4,
    ENFJ: -4,
    ISFP: 2,
    ISFJ: -4,
    INTP: -2,
    INFP: 2,
    ESFJ: -4,
    ENTP: -2,
    ESFP: 2,
    ENFP: 2,
    class: 'group71'
  },
  {
    prompt: 'You react inappropriately without realizing it and you often have an urge to provoke or challenge people against the social norm',
    ISTJ: 2,
    ISTP: 0,
    INTJ: 2,
    INFJ: -1,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: -1,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group72'
  },
  {
    prompt: 'You prioritize your own value/moral judgments over other people',
    ISTJ: 2,
    ISTP: -4,
    INTJ: 2,
    INFJ: -2,
    ESTJ: 2,
    ESTP: -4,
    ENTJ: 2,
    ENFJ: -2,
    ISFP: 4,
    ISFJ: -2,
    INTP: -4,
    INFP: 4,
    ESFJ: -2,
    ENTP: -4,
    ESFP: 4,
    ENFP: 4,
    class: 'group73'
  },
  {
    prompt: 'You suppress your analytical/deductive thinking skills',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: 0,
    INTP: -1,
    INFP: 2,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 0,
    ENFP: 0,
    class: 'group74'
  },
  {
    prompt: 'You prioritize the morals and values of others over your own',
    ISTJ: -4,
    ISTP: 2,
    INTJ: -4,
    INFJ: 4,
    ESTJ: -4,
    ESTP: 2,
    ENTJ: -4,
    ENFJ: 4,
    ISFP: -2,
    ISFJ: 4,
    INTP: 2,
    INFP: -2,
    ESFJ: 4,
    ENTP: 2,
    ESFP: -2,
    ENFP: -2,
    class: 'group75'
  },
   
               

]

// This array stores all of the possible values and the weight associated with the value. 
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [{
    value: 'Strongly Agree',
    class: 'btn-default btn-strongly-agree',
    weight: 2
  },
  {
    value: 'Agree',
    class: 'btn-default btn-agree',
    weight: 1,
  },
  {
    value: 'Neutral',
    class: 'btn-default',
    weight: 0
  },
  {
    value: 'Disagree',
    class: 'btn-default btn-disagree',
    weight: -1
  },
  {
    value: 'Strongly Disagree',
    class: 'btn-default btn-strongly-disagree',
    weight: -2
  }
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

  for (var i = 0; i < prompts.length; i++) {
    var prompt_li = document.createElement('li');
    var prompt_p = document.createElement('p');
    var prompt_text = document.createTextNode(prompts[i].prompt);

    prompt_li.setAttribute('class', 'list-group-item prompt');
    prompt_p.appendChild(prompt_text);
    prompt_li.appendChild(prompt_p);

    document.getElementById('quiz').appendChild(prompt_li);
  }
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {

// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
  for (var li_index = 0; li_index < prompts.length; li_index++) {
    var group = document.createElement('div');
    group.className = 'btn-group btn-group-justified';

    for (var i = 0; i < prompt_values.length; i++) {
      var btn_group = document.createElement('div');
      btn_group.className = 'btn-group';

      var button = document.createElement('button');
      var button_text = document.createTextNode(prompt_values[i].value);
      button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
      button.appendChild(button_text);

      btn_group.appendChild(button);
      group.appendChild(btn_group);

      document.getElementsByClassName('prompt')[li_index].appendChild(group);
    }
  }
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var totalISTJ = 0;
var totalISTP = 0;
var totalINTJ = 0;
var totalINFJ = 0;
var totalESTJ = 0;
var totalESTP = 0;
var totalENTJ = 0;
var totalENFJ = 0;
var totalISFJ = 0;
var totalISFP = 0;
var totalINTP = 0;
var totalINFP = 0;
var totalESFJ = 0;
var totalESFP = 0;
var totalENTP = 0;
var totalENFP = 0;
// Get the weight associated to group number
function findPromptWeightINFJ(prompts, group) {
  var INFJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      INFJ = prompts[i].INFJ;
    }
  }

  return INFJ;
}
// Get the weight associated to group number
function findPromptWeightISTJ(prompts, group) {
  var ISTJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ISTJ = prompts[i].ISTJ;
    }
  }

  return ISTJ;
}
// Get the weight associated to group number
function findPromptWeightISTP(prompts, group) {
  var ISTP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ISTP = prompts[i].ISTP;
    }
  }

  return ISTP;
} // Get the weight associated to group number
function findPromptWeightINTJ(prompts, group) {
  var INTJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      INTJ = prompts[i].INTJ;
    }
  }

  return INTJ;
}
// Get the weight associated to group number
function findPromptWeightENFJ(prompts, group) {
  var ENFJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ENFJ = prompts[i].ENFJ;
    }
  }

  return ENFJ;
}
// Get the weight associated to group number
function findPromptWeightESTJ(prompts, group) {
  var ESTJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ESTJ = prompts[i].ESTJ;
    }
  }

  return ESTJ;
}
// Get the weight associated to group number
function findPromptWeightESTP(prompts, group) {
  var ESTP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ESTP = prompts[i].ESTP;
    }
  }

  return ESTP;
} 
// Get the weight associated to group number
function findPromptWeightENTJ(prompts, group) {
  var ENTJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ENTJ = prompts[i].ENTJ;
    }
  }

  return ENTJ;
}
// Get the weight associated to group number
function findPromptWeightINFP(prompts, group) {
  var INFP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      INFP = prompts[i].INFP;
    }
  }

  return INFP;
}
// Get the weight associated to group number
function findPromptWeightINTP(prompts, group) {
  var INTP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      INTP = prompts[i].INTP;
    }
  }

  return INTP;
}
// Get the weight associated to group number
function findPromptWeightISFP(prompts, group) {
  var ISFP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ISFP = prompts[i].ISFP;
    }
  }

  return ISFP;
} 
// Get the weight associated to group number
function findPromptWeightISFJ(prompts, group) {
  var ISFJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ISFJ = prompts[i].ISFJ;
    }
  }

  return ISFJ;
}
// Get the weight associated to group number
function findPromptWeightENFP(prompts, group) {
  var ENFP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ENFP = prompts[i].ENFP;
    }
  }

  return ENFP;
}
// Get the weight associated to group number
function findPromptWeightENTP(prompts, group) {
  var ENTP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ENTP = prompts[i].ENTP;
    }
  }

  return ENTP;
}
// Get the weight associated to group number
function findPromptWeightESFP(prompts, group) {
  var ESFP = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ESFP = prompts[i].ESFP;
    }
  }

  return ESFP;
} 
// Get the weight associated to group number
function findPromptWeightESFJ(prompts, group) {
  var ESFJ = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      ESFJ = prompts[i].ESFJ;
    }
  }

  return ESFJ;
}


// Get the weight associated to the value
function findValueWeight(values, value) {
  var weight = 0;

  for (var i = 0; i < values.length; i++) {
    if (values[i].value === value) {
      weight = values[i].weight;
    }
  }

  return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function() {
  var classList = $(this).attr('class');
  // console.log(classList);
  var classArr = classList.split(" ");
  // console.log(classArr);
  var this_group = classArr[0];
  // console.log(this_group);

  // If button is already selected, de-select it when clicked and subtract any previously added values to the total
  // Otherwise, de-select any selected buttons in group and select the one just clicked
  // And subtract deselected weighted value and add the newly selected weighted value to the total
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');

    totalISTJ -= (findPromptWeightISTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISTP -= (findPromptWeightISTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINTJ -= (findPromptWeightINTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINFJ -= (findPromptWeightINFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESTJ -= (findPromptWeightESTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESTP -= (findPromptWeightESTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENTJ -= (findPromptWeightENTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENFJ -= (findPromptWeightENFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISFJ -= (findPromptWeightISFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISFP -= (findPromptWeightISFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINTP -= (findPromptWeightINTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINFP -= (findPromptWeightINFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESFJ -= (findPromptWeightESFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESFP -= (findPromptWeightESFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENTP -= (findPromptWeightENTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENFP -= (findPromptWeightENFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
  } else {
    // $('[class='thisgroup).prop('checked', false);
    totalISTJ -= (findPromptWeightISTJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalISTP -= (findPromptWeightISTP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalINTJ -= (findPromptWeightINTJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalINFJ -= (findPromptWeightINFJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalESTJ -= (findPromptWeightESTJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalESTP -= (findPromptWeightESTP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalENTJ -= (findPromptWeightENTJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalENFJ -= (findPromptWeightENFJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalISFJ -= (findPromptWeightISFJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalISFP -= (findPromptWeightISFP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalINTP -= (findPromptWeightINTP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalINFP -= (findPromptWeightINFP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalESFJ -= (findPromptWeightESFJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalESFP -= (findPromptWeightESFP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalENTP -= (findPromptWeightENTP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalENFP -= (findPromptWeightENFP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    // console.log($('.'+this_group+'.active').text());
    $('.' + this_group).removeClass('active');

    // console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
    // $(this).prop('checked', true);
    $(this).addClass('active');
    totalISTJ += (findPromptWeightISTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISTP += (findPromptWeightISTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINTJ += (findPromptWeightINTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINFJ += (findPromptWeightINFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESTJ += (findPromptWeightESTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESTP += (findPromptWeightESTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENTJ += (findPromptWeightENTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENFJ += (findPromptWeightENFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISFJ += (findPromptWeightISFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISFP += (findPromptWeightISFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINTP += (findPromptWeightINTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINFP += (findPromptWeightINFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESFJ += (findPromptWeightESFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalESFP += (findPromptWeightESFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENTP += (findPromptWeightENTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalENFP += (findPromptWeightENFP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
  }

  console.log(totalISTJ);
  console.log(totalISTP);
  console.log(totalINFJ);
  console.log(totalINTJ);
  console.log(totalESTJ);
  console.log(totalESTP);
  console.log(totalENFJ);
  console.log(totalENTJ);
  console.log(totalISFJ);
  console.log(totalISFP);
  console.log(totalINFP);
  console.log(totalINTP);
  console.log(totalESFJ);
  console.log(totalESFP);
  console.log(totalENFP);
  console.log(totalENTP);
})



$('#submit-btn').click(function() {
  // After clicking submit, add up the totals from answers
  // For each group, find the value that is active
  $('.results').removeClass('hide');
  $('.results').addClass('show');

 
  document.getElementById('totalISTJ').innerHTML = totalISTJ;
  document.getElementById('totalINTJ').innerHTML = totalINTJ;
  document.getElementById('totalISTP').innerHTML = totalISTP;
  document.getElementById('totalINFJ').innerHTML = totalINFJ;
  document.getElementById('totalESTJ').innerHTML = totalESTJ;
  document.getElementById('totalENTJ').innerHTML = totalENTJ;
  document.getElementById('totalESTP').innerHTML = totalESTP;
  document.getElementById('totalENFJ').innerHTML = totalENFJ;
  document.getElementById('totalISFJ').innerHTML = totalISFJ;
  document.getElementById('totalINTP').innerHTML = totalINTP;
  document.getElementById('totalISFP').innerHTML = totalISFP;
  document.getElementById('totalINFP').innerHTML = totalINFP;
  document.getElementById('totalESFJ').innerHTML = totalESFJ;
  document.getElementById('totalENTP').innerHTML = totalENTP;
  document.getElementById('totalESFP').innerHTML = totalESFP;
  document.getElementById('totalENFP').innerHTML = totalENFP;
    
  
  
  // Hide the quiz after they submit their results
  $('#quiz').addClass('hide');
  $('#submit-btn').addClass('hide');
  $('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function() {
  $('#quiz').removeClass('hide');
  $('#submit-btn').removeClass('hide');
  $('#retake-btn').addClass('hide');

  $('.results').addClass('hide');
  $('.results').removeClass('show');
})
