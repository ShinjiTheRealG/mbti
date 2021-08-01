// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [{
    prompt: '1. You have a high level of confidence in your ability to experience deep sympathy for anyone and serve as a moral compass.',
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
    prompt: '2. More often, you are seeking INTERNAL harmony through sensitivity to your own and others’ inner values rather than seeking EXTERNAL harmony to meet other people’s needs and their own values.',
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
    prompt: '3. When asking someone to do something, you tend to be explicit, concise, specific, and/or blunt with your command rather than getting them to buy into what you say with more information and implication.',
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
    prompt: '4. You are usually highly responsible with caring for the feelings of others, with creating harmonious social atmospheres where people feel accepted and affirmed, and/or making sure people are being appropriate.',
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
    prompt: '5. More often, you are thinking with respect to objective data and empiricism rather than your subjective logic.',
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
    prompt: '6. You have a natural drive to be more initiating in conversation with others rather than responding.',
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
    prompt: '7. You tend to be unyielding and overconfident in your ability to decipher what is true/false using subjective logical analysis.',
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
    prompt: '8. More often, you are directing energy inwardly to focus on unconscious images, connections, and patterns that create inner vision and insight RATHER than directing energy outwardly to scan for new ideas, interesting patterns, and future possibilities.',
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
    prompt: '9. More often, you are more comfortable with lack of progress if you maintain the quality of your goal RATHER than adapting or changing the goal for the sake of progress.',
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
    prompt: '10. You are fearful with expressing disagreement for fear of being inarticulate and often worried about what other people think of you and your status.',
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
    prompt: '11. More often, you are directing energy outwardly and acquiring information by focusing on a detailed and objective sensory data in the present RATHER than directing energy inwardly and storing the facts and details of both reality and internal thoughts/experiences/memories.',
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
    prompt: '12. You are prone to aggression, being overbearing, and underexplaining rather than being prone to passive aggression, overexplaining, and beating around the bush.',
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
    prompt: '13. When you experience intuitive visions or insights, they are often negative, or you tend to distrust your own visions and feel obstructed by them.',
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
    prompt: '14. You are very often deciding according to importance or value or with what is good/bad.',
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
    prompt: '15. You tend to enjoy large social groups of 4 or more rather than under 4.',
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
    prompt: '16. You tend to be very critical with what other people want, or you often criticize yourself and others for not having thought through all the consequences/possibilities.',
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
    prompt: '17. Your mind is quite often considering and in tune with the feelings and values of other people and considering what would be appropriate, kind, or nice.',
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
    prompt: '18. You tend to be patient with planning rather than restless and anxious with inaction towards your goals.',
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
    prompt: '19. You tend to fail to notice critical details and seem to misremember events and/or you may pretend to hear only the literal level of communication.',
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
    prompt: '20. Your mind is quite often focused on classifying and building very personal principles, frameworks, and/or blueprints to explain reality.',
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
    prompt: '21. You tend to be more comfortable with and/or trust things that are tangible, practical, and realistic rather than focusing more on the theoretical, implications, or ideals.',
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
    prompt: '22. You tend to be completely oblivious to what is happening and fail to see danger in the environment.',
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
    prompt: '23. You would rather have a palm tree as a pet than a blue rabbit.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group22'
  },
  {
    prompt: '24. You tend to be more focused on what is good for the group and value interdependence/cooperation rather than focused on utility and valuing self-determination.',
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
    prompt: '25. You tend to be very confident in your ability to read social situations instantly and/or to mirror and express the feelings of others.',
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
    prompt: '26. You often see the symbolism or inner implications of objects and events with respect to your life and vision.',
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
    prompt: '27. You tend to prefer using and reusing consistent frameworks, procedures, or structured techniques rather than taking on situations uniquely for the benefit of the interests of all involved.',
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
    prompt: '28. You tend to be very responsible with figuring out how things work and explaining that to others, with playing devils advocate to challenge the views of others, and/or providing deductive analysis.',
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
    prompt: '29. You often recognize intent, the perspectives of others, or the real reasons behind actions.',
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
    prompt: '30. Your mind tends to be future focused and speculative rather than present/past focused and skeptical.',
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
    prompt: '31. You tend to be sporadic (too much or too little) with micromanaging and/or giving factual advice, or you present facts with childlike fervor and excitement.',
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
    prompt: '32. You often enter an inner world of stored impressions of reality, and you often link the immediate experience with prior experiences/memories. This could be that you often notice how things may taste, look, or sound different than usual.',
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
    prompt: '33. You are often enforcing, censoring, or suppressing rather than rebelling, dissenting, or being disobedient.',
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
    prompt: '34. You tend to be worried or fearful in determining what your path in life is or figuring out what you want in general.',
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
    prompt: '35. You tend to be excited by motion, action, and nature and are adept at physical multitasking with a videogame-like mind primed for action.',
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
    prompt: '36. You are prone to weighting the process over people (or the system over self) rather than weighting the profit over people and/or being cheap.',
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
    prompt: '37. You tend to be overwhelmed or pressured by too many possible futures, and/or you tend to see many negative outcomes to things.',
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
    prompt: '38. You often focus on voice tone and word choice and are attentive and curious to what is not said.',
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
    prompt: '39. You are often critical about sameness or routine in your daily life and/or hypercritical about inaccuracy of details and memories.',
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
    prompt: '40. You often feel good when other people feel good, laugh when others laugh, and/or feel bad when others feel bad.',
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
    prompt: '41. You are often oblivious to your surroundings and/or unaware of how you are coming across to others.',
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
    prompt: '42. You are hesitant to believe or buy into something until it makes sense to you, even if the information is from a reputable source or has a lot of data to support it.',
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
    prompt: '43. You often find it difficult to to figure out how you feel about things.',
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
    prompt: '44. You are hesitant to believe something that makes sense to you until you have data or sources to verify.',
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
    prompt: '45. You often demand clarifying ideas and definitions first rather than starting with facts.',
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
    prompt: '46. You are more interested in pioneering a new road than in taking any beaten paths.',
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
    prompt: '47. You are often responsible with teaching others structures, explaining data and evidence, and/or leading groups in executive roles.',
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
    prompt: '48. You often think analogically and notice and apply patterns of relationships across multiple contexts.',
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
    prompt: '49. You are often fixated on what you want and get frustrated by the inability to actualize it, and/or you enjoy downtime to consider deeper meanings of things.',
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
    prompt: '50. You tend to be very dutiful, obligation driven, and very loyal compared to others.',
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
    prompt: '51. You tend to go through familiar routines to destress and/or you are fearful of new places, new jobs, or new situations, contimplating all the negative possibilities.',
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
    prompt: '52. You are in tune with the experiences that you are giving to others, particularly sensory related experiences.',
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
    prompt: '53. You tend to experience intense revulsion for slow and tedious tasks and/or you find dwelling in the past to be unimportant and unapplicable.',
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
    prompt: '54. You have a long and complicated list of very personal values that you frequently refer to.',
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
    prompt: '55. You may sharply criticize physical appearances of yourself.',
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
    prompt: '56. You pay a lot of daily attention towards making other people happy and caring for them.',
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
    prompt: '57. You tend not to trust your deepest feelings and find it difficult to determine the importance of your values, sometimes believing them to be more important than they actually are.',
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
    prompt: '58. You are often thinking about and developing personal theories, and you tend to trust these deliberations.',
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
    prompt: '59. You completely misinterpret social interactions and you sometimes deny that the feeling states involved actually exist.',
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
    prompt: '60. You often decide/think first based on observed cause and effect (observed reasons and consequences) rather than deduced effects or consequences.',
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
    prompt: '61. You are confident in your ability to organize people and/or resources to accomplish goals efficiently, and in accordance with clearly defined parameters.',
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
    prompt: '62. You are less likely to go with the flow of a group and can be adamant about what you want to do (particularly in leisure scenarios like picking a place to eat or choosing a fun activity).',
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
    prompt: '63. You are very responsible with your insights and visions of the big picture and you tend to use them to guide others and lead them to their own insights.',
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
    prompt: '64. You easily go with the flow of the group and can be indifferent when asked to make a decision for a group related choice (particularly in leisure scenarios like choosing a place to eat or fun activity).',
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
    prompt: '65. You get hooked by new ideas and enjoy pursuing them enthusiastically, sometimes throwing caution to the wind.',
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
    prompt: '66. You often think about past stories that relate to the topic of conversation and you passionately share them.',
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
    prompt: '67. You tend to be anxious with received experiences, finances, deadlines, and your stability/comfort (please remember to compare yourself to others. Most people are anxious with these things, but are you particularly more? or particularly less? If you read the beginning section of this test, you should not need a reminder. This is here just in case).',
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
    prompt: '68. You tend to be rather impatient in general.',
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
    prompt: '69. You tend to feel that responding without reflecting is foreign and/or you tend to be very safety focused in sensate reality.',
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
    prompt: '70. You are often thinking about how things work rather than what works.',
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
    prompt: '71. You tend to be very critical about moral standards that you and others need to live up to.',
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
    prompt: '72. During conversations where information is presented, you often initially consider where you got your information as well as where other people got their information from before asessing whether it is true.',
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
    prompt: '73. You react inappropriately without realizing it and you often have an urge to provoke or challenge people against the social norm.',
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
    prompt: '74. You prioritize your own value/moral judgments over those of other people.',
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
    prompt: '75. You suppress your analytical/deductive thinking skills.',
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
    prompt: '76. You prioritize the morals and values of others over your own.',
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
  {
    prompt: '77. You strive for an image or vision that synthesizes all and/or you commonly look for the ultimate meaning of things.',
    ISTJ: -1,
    ISTP: 0,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group76'
  },
  {
    prompt: '78. You are often focused on stability, comfort, maintanence and/or productivity.',
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
    class: 'group77'
  },
  {
    prompt: '79. You often generate multiple possibilities for others when they express their wants and needs.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 2,
    INFP: 2,
    ESFJ: 0,
    ENTP: 1,
    ESFP: -1,
    ENFP: 1,
    class: 'group78'
  },
  {
    prompt: '80. You like cats :)',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group79'
  },
  {
    prompt: '81. You tend to tell and retell stories multiple times to the same people.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 2,
    INFP: 2,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group80'
  },
  {
    prompt: '82. You are insecure about how you look, how you are coming across to others, and/or fearful that you will give other people bad experiences.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 2,
    INFJ: 2,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group81'
  },
  {
    prompt: '83. You sometimes worry you are a selfish or bad person and tend to be conflict-averse.',
    ISTJ: -1,
    ISTP: 0,
    INTJ: -1,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 2,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group82'
  },
  {
    prompt: '84. You tend to be critical of yourself or others for not being attentive to the needs of others.',
    ISTJ: 0,
    ISTP: 1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 1,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 2,
    ENFP: 2,
    class: 'group83'
  },
  {
    prompt: '85. You may overanalyze to the point of paralysis and/or you deliberately misinterpret the arguments of others, maybe for humor.',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: 0,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 2,
    ENFP: 2,
    class: 'group84'
  },
  {
    prompt: '86. You tend to have negative experiences with delegating tasks to others and blame disorganization on others.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 2,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group85'
  },
  {
    prompt: '87. You seek continual and new external input to maintain the flow of ideas, and you are confident in your ability to brainstorm and free-associate continuously.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: -1,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 1,
    INFP: 1,
    ESFJ: 0,
    ENTP: 2,
    ESFP: -1,
    ENFP: 2,
    class: 'group86'
  },
  {
    prompt: '88. You often share past experiences to guide, help, or teach others, and you are responsible with safety and security for yourself and others.',
    ISTJ: 1,
    ISTP: 0,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 1,
    INTP: 0,
    INFP: 0,
    ESFJ: 2,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group87'
  },
  {
    prompt: '89. You tend to bring energy to social interactions, and you take pleasure in interacting with immediate physical environemnt.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 1,
    ENTJ: 2,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: -1,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 1,
    ENFP: -1,
    class: 'group88'
  },
  {
    prompt: '90. You feel the need to suppress or corral feelings and emotions and you fear appearing weak.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 2,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 0,
    INFP: -1,
    ESFJ: 0,
    ENTP: 0,
    ESFP: -1,
    ENFP: -1,
    class: 'group89'
  },
  {
    prompt: '91. You feel a burdensome need to be accomodating to others, and you worry that other people are bad or evil.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: -1,
    ISFP: 2,
    ISFJ: 0,
    INTP: 0,
    INFP: 2,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group90'
  },
  {
    prompt: '92. You often criticize yourself and others for inconsistencies and logical error.',
    ISTJ: 2,
    ISTP: 0,
    INTJ: 2,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: -1,
    ISFJ: 0,
    INTP: 0,
    INFP: -1,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group91'
  },
  {
    prompt: '93. You deceive yourself and others with data and sources, or you find them silly or irrelevant.',
    ISTJ: -1,
    ISTP: 0,
    INTJ: -1,
    INFJ: 2,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 2,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group92'
  },
  {
    prompt: '94. You rarely have psychic hunches about things that will happen, and if/when you do, you tend to place no value or trust in them without verification.',
    ISTJ: 2,
    ISTP: 0,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 2,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group93'
  },
  {
    prompt: '95. Thinking about the past often results in a quality of reliving or re-experiencing, and you very often use memories to relate to and understand the present.',
    ISTJ: 2,
    ISTP: 0,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: -1,
    ISFP: 0,
    ISFJ: 2,
    INTP: 0,
    INFP: 0,
    ESFJ: 1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group94'
  },
  {
    prompt: '96. You enjoy spontaneous interactions and do your best to care for the physical experience and comfort of others.',
    ISTJ: 0,
    ISTP: 2,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: 0,
    INTP: -1,
    INFP: -1,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 0,
    ENFP: -1,
    class: 'group95'
  },
  {
    prompt: '97. You may idealize your own values and passionately engage with them in conversation, sometimes with childlike enthusiasm.',
    ISTJ: 2,
    ISTP: -1,
    INTJ: 2,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group96'
  },
  {
    prompt: '98. You tend to be insecure or fearful about making other people feel bad or acting inappropriately.',
    ISTJ: -1,
    ISTP: 2,
    INTJ: -1,
    INFJ: 0,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 2,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group97'
  },
  {
    prompt: '99. You feel obstructed or annoyed if you have to explain your reasonings to others, and/or you resist looking at the process in favor of results.',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 2,
    ESTP: -1,
    ENTJ: 2,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: 0,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 0,
    ENFP: 0,
    class: 'group98'
  },
  {
    prompt: '100. You often criticize yourself and others for the data and sources used.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: -1,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 2,
    ESFP: 0,
    ENFP: 0,
    class: 'group99'
  },
  {
    prompt: '101. You tend to make false predictions or find significance in things that do not actually matter.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: -1,
    INFJ: -1,
    ESTJ: 2,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 2,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group100'
  },
  {
    prompt: '102. You tend not to consider a lot of options because you are far more particular about the quality and scope of a single vision, and/or you are prone to tunnel vision.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: -1,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 2,
    ENFP: -1,
    class: 'group101'
  },
  {
    prompt: '103. You sometimes miss deadlines or ignore your health because you are too absorbed in your present experiences.',
    ISTJ: -1,
    ISTP: 0,
    INTJ: 2,
    INFJ: 2,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: -1,
    INTP: 0,
    INFP: 0,
    ESFJ: -1,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group102'
  },
  {
    prompt: '104. You seek sensory stimuli as a major source of understanding yourself and the world.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: -1,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 2,
    ENFP: 0,
    class: 'group103'
  },
  {
    prompt: '105. You are very critical of the visions, wants, or goals of yourself and others.',
    ISTJ: -1,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: -1,
    INTP: 2,
    INFP: 2,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group104'
  },
  {
    prompt: '106. Your suggestions are sometimes clumsy, confusing, and/or silly.',
    ISTJ: 0,
    ISTP: 2,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 2,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: -1,
    ESFP: 0,
    ENFP: -1,
    class: 'group105'
  },
  {
    prompt: '107. You often obsess over holes in your own logic and you are fearful and/or insecure about being wrong.',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: -1,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 2,
    ISFP: 0,
    ISFJ: -1,
    INTP: -1,
    INFP: 0,
    ESFJ: 2,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group106'
  },
  {
    prompt: '108. You teach other people moral values and you appreciate originality and differences between people.',
    ISTJ: 0,
    ISTP: -1,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 0,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: -1,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 2,
    ENFP: 2,
    class: 'group107'
  },
  {
    prompt: '109. You tend to withhold communicating your analysis or thought because it seems like a waste of time and/or you think you may be misunderstood or will have trouble making it understandable.',
    ISTJ: -1,
    ISTP: 2,
    INTJ: -1,
    INFJ: 0,
    ESTJ: -1,
    ESTP: 0,
    ENTJ: -1,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 2,
    INFP: 0,
    ESFJ: 0,
    ENTP: 0,
    ESFP: 0,
    ENFP: 0,
    class: 'group108'
  },
  {
    prompt: '110. You often charm others by playfully relating to their feelings, and laughing/joking is a major method used in building relationships.',
    ISTJ: 0,
    ISTP: 0,
    INTJ: 0,
    INFJ: 0,
    ESTJ: 0,
    ESTP: 2,
    ENTJ: 0,
    ENFJ: 0,
    ISFP: 0,
    ISFJ: 0,
    INTP: 0,
    INFP: 0,
    ESFJ: 0,
    ENTP: 2,
    ESFP: 0,
    ENFP: 0,
    class: 'group109'
  }
   
               

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
    value: 'Unsure',
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
    
  /*
  SortTable
  version 2
  7th April 2007
  Stuart Langridge, http://www.kryogenix.org/code/browser/sorttable/

  Instructions:
  Download this file
  Add <script src="sorttable.js"></script> to your HTML
  Add class="sortable" to any table you'd like to make sortable
  Click on the headers to sort

  Thanks to many, many people for contributions and suggestions.
  Licenced as X11: http://www.kryogenix.org/code/browser/licence.html
  This basically means: do what you want with it.
*/


var stIsIE = /*@cc_on!@*/false;

sorttable = {
  init: function() {
    // quit if this function has already been called
    if (arguments.callee.done) return;
    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
    // kill the timer
    if (_timer) clearInterval(_timer);

    if (!document.createElement || !document.getElementsByTagName) return;

    sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;

    forEach(document.getElementsByTagName('table'), function(table) {
      if (table.className.search(/\bsortable\b/) != -1) {
        sorttable.makeSortable(table);
      }
    });

  },

  makeSortable: function(table) {
    if (table.getElementsByTagName('thead').length == 0) {
      // table doesn't have a tHead. Since it should have, create one and
      // put the first table row in it.
      the = document.createElement('thead');
      the.appendChild(table.rows[0]);
      table.insertBefore(the,table.firstChild);
    }
    // Safari doesn't support table.tHead, sigh
    if (table.tHead == null) table.tHead = table.getElementsByTagName('thead')[0];

    if (table.tHead.rows.length != 1) return; // can't cope with two header rows

    // Sorttable v1 put rows with a class of "sortbottom" at the bottom (as
    // "total" rows, for example). This is B&R, since what you're supposed
    // to do is put them in a tfoot. So, if there are sortbottom rows,
    // for backwards compatibility, move them to tfoot (creating it if needed).
    sortbottomrows = [];
    for (var i=0; i<table.rows.length; i++) {
      if (table.rows[i].className.search(/\bsortbottom\b/) != -1) {
        sortbottomrows[sortbottomrows.length] = table.rows[i];
      }
    }
    if (sortbottomrows) {
      if (table.tFoot == null) {
        // table doesn't have a tfoot. Create one.
        tfo = document.createElement('tfoot');
        table.appendChild(tfo);
      }
      for (var i=0; i<sortbottomrows.length; i++) {
        tfo.appendChild(sortbottomrows[i]);
      }
      delete sortbottomrows;
    }

    // work through each column and calculate its type
    headrow = table.tHead.rows[0].cells;
    for (var i=0; i<headrow.length; i++) {
      // manually override the type with a sorttable_type attribute
      if (!headrow[i].className.match(/\bsorttable_nosort\b/)) { // skip this col
        mtch = headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/);
        if (mtch) { override = mtch[1]; }
	      if (mtch && typeof sorttable["sort_"+override] == 'function') {
	        headrow[i].sorttable_sortfunction = sorttable["sort_"+override];
	      } else {
	        headrow[i].sorttable_sortfunction = sorttable.guessType(table,i);
	      }
	      // make it clickable to sort
	      headrow[i].sorttable_columnindex = i;
	      headrow[i].sorttable_tbody = table.tBodies[0];
	      dean_addEvent(headrow[i],"click", sorttable.innerSortFunction = function(e) {

          if (this.className.search(/\bsorttable_sorted\b/) != -1) {
            // if we're already sorted by this column, just
            // reverse the table, which is quicker
            sorttable.reverse(this.sorttable_tbody);
            this.className = this.className.replace('sorttable_sorted',
                                                    'sorttable_sorted_reverse');
            this.removeChild(document.getElementById('sorttable_sortfwdind'));
            sortrevind = document.createElement('span');
            sortrevind.id = "sorttable_sortrevind";
            sortrevind.innerHTML = stIsIE ? '&nbsp<font face="webdings">5</font>' : '&nbsp;&#x25B4;';
            this.appendChild(sortrevind);
            return;
          }
          if (this.className.search(/\bsorttable_sorted_reverse\b/) != -1) {
            // if we're already sorted by this column in reverse, just
            // re-reverse the table, which is quicker
            sorttable.reverse(this.sorttable_tbody);
            this.className = this.className.replace('sorttable_sorted_reverse',
                                                    'sorttable_sorted');
            this.removeChild(document.getElementById('sorttable_sortrevind'));
            sortfwdind = document.createElement('span');
            sortfwdind.id = "sorttable_sortfwdind";
            sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
            this.appendChild(sortfwdind);
            return;
          }

          // remove sorttable_sorted classes
          theadrow = this.parentNode;
          forEach(theadrow.childNodes, function(cell) {
            if (cell.nodeType == 1) { // an element
              cell.className = cell.className.replace('sorttable_sorted_reverse','');
              cell.className = cell.className.replace('sorttable_sorted','');
            }
          });
          sortfwdind = document.getElementById('sorttable_sortfwdind');
          if (sortfwdind) { sortfwdind.parentNode.removeChild(sortfwdind); }
          sortrevind = document.getElementById('sorttable_sortrevind');
          if (sortrevind) { sortrevind.parentNode.removeChild(sortrevind); }

          this.className += ' sorttable_sorted';
          sortfwdind = document.createElement('span');
          sortfwdind.id = "sorttable_sortfwdind";
          sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
          this.appendChild(sortfwdind);

	        // build an array to sort. This is a Schwartzian transform thing,
	        // i.e., we "decorate" each row with the actual sort key,
	        // sort based on the sort keys, and then put the rows back in order
	        // which is a lot faster because you only do getInnerText once per row
	        row_array = [];
	        col = this.sorttable_columnindex;
	        rows = this.sorttable_tbody.rows;
	        for (var j=0; j<rows.length; j++) {
	          row_array[row_array.length] = [sorttable.getInnerText(rows[j].cells[col]), rows[j]];
	        }
	        /* If you want a stable sort, uncomment the following line */
	        //sorttable.shaker_sort(row_array, this.sorttable_sortfunction);
	        /* and comment out this one */
	        row_array.sort(this.sorttable_sortfunction);

	        tb = this.sorttable_tbody;
	        for (var j=0; j<row_array.length; j++) {
	          tb.appendChild(row_array[j][1]);
	        }

	        delete row_array;
	      });
	    }
    }
  },

  guessType: function(table, column) {
    // guess the type of a column based on its first non-blank row
    sortfn = sorttable.sort_alpha;
    for (var i=0; i<table.tBodies[0].rows.length; i++) {
      text = sorttable.getInnerText(table.tBodies[0].rows[i].cells[column]);
      if (text != '') {
        if (text.match(/^-?[£$¤]?[\d,.]+%?$/)) {
          return sorttable.sort_numeric;
        }
        // check for a date: dd/mm/yyyy or dd/mm/yy
        // can have / or . or - as separator
        // can be mm/dd as well
        possdate = text.match(sorttable.DATE_RE)
        if (possdate) {
          // looks like a date
          first = parseInt(possdate[1]);
          second = parseInt(possdate[2]);
          if (first > 12) {
            // definitely dd/mm
            return sorttable.sort_ddmm;
          } else if (second > 12) {
            return sorttable.sort_mmdd;
          } else {
            // looks like a date, but we can't tell which, so assume
            // that it's dd/mm (English imperialism!) and keep looking
            sortfn = sorttable.sort_ddmm;
          }
        }
      }
    }
    return sortfn;
  },

  getInnerText: function(node) {
    // gets the text we want to use for sorting for a cell.
    // strips leading and trailing whitespace.
    // this is *not* a generic getInnerText function; it's special to sorttable.
    // for example, you can override the cell text with a customkey attribute.
    // it also gets .value for <input> fields.

    if (!node) return "";

    hasInputs = (typeof node.getElementsByTagName == 'function') &&
                 node.getElementsByTagName('input').length;

    if (node.getAttribute("sorttable_customkey") != null) {
      return node.getAttribute("sorttable_customkey");
    }
    else if (typeof node.textContent != 'undefined' && !hasInputs) {
      return node.textContent.replace(/^\s+|\s+$/g, '');
    }
    else if (typeof node.innerText != 'undefined' && !hasInputs) {
      return node.innerText.replace(/^\s+|\s+$/g, '');
    }
    else if (typeof node.text != 'undefined' && !hasInputs) {
      return node.text.replace(/^\s+|\s+$/g, '');
    }
    else {
      switch (node.nodeType) {
        case 3:
          if (node.nodeName.toLowerCase() == 'input') {
            return node.value.replace(/^\s+|\s+$/g, '');
          }
        case 4:
          return node.nodeValue.replace(/^\s+|\s+$/g, '');
          break;
        case 1:
        case 11:
          var innerText = '';
          for (var i = 0; i < node.childNodes.length; i++) {
            innerText += sorttable.getInnerText(node.childNodes[i]);
          }
          return innerText.replace(/^\s+|\s+$/g, '');
          break;
        default:
          return '';
      }
    }
  },

  reverse: function(tbody) {
    // reverse the rows in a tbody
    newrows = [];
    for (var i=0; i<tbody.rows.length; i++) {
      newrows[newrows.length] = tbody.rows[i];
    }
    for (var i=newrows.length-1; i>=0; i--) {
       tbody.appendChild(newrows[i]);
    }
    delete newrows;
  },

  /* sort functions
     each sort function takes two parameters, a and b
     you are comparing a[0] and b[0] */
  sort_numeric: function(a,b) {
    aa = parseFloat(a[0].replace(/[^0-9.-]/g,''));
    if (isNaN(aa)) aa = 0;
    bb = parseFloat(b[0].replace(/[^0-9.-]/g,''));
    if (isNaN(bb)) bb = 0;
    return aa-bb;
  },
  sort_alpha: function(a,b) {
    if (a[0]==b[0]) return 0;
    if (a[0]<b[0]) return -1;
    return 1;
  },
  sort_ddmm: function(a,b) {
    mtch = a[0].match(sorttable.DATE_RE);
    y = mtch[3]; m = mtch[2]; d = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt1 = y+m+d;
    mtch = b[0].match(sorttable.DATE_RE);
    y = mtch[3]; m = mtch[2]; d = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt2 = y+m+d;
    if (dt1==dt2) return 0;
    if (dt1<dt2) return -1;
    return 1;
  },
  sort_mmdd: function(a,b) {
    mtch = a[0].match(sorttable.DATE_RE);
    y = mtch[3]; d = mtch[2]; m = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt1 = y+m+d;
    mtch = b[0].match(sorttable.DATE_RE);
    y = mtch[3]; d = mtch[2]; m = mtch[1];
    if (m.length == 1) m = '0'+m;
    if (d.length == 1) d = '0'+d;
    dt2 = y+m+d;
    if (dt1==dt2) return 0;
    if (dt1<dt2) return -1;
    return 1;
  },

  shaker_sort: function(list, comp_func) {
    // A stable sort function to allow multi-level sorting of data
    // see: http://en.wikipedia.org/wiki/Cocktail_sort
    // thanks to Joseph Nahmias
    var b = 0;
    var t = list.length - 1;
    var swap = true;

    while(swap) {
        swap = false;
        for(var i = b; i < t; ++i) {
            if ( comp_func(list[i], list[i+1]) > 0 ) {
                var q = list[i]; list[i] = list[i+1]; list[i+1] = q;
                swap = true;
            }
        } // for
        t--;

        if (!swap) break;

        for(var i = t; i > b; --i) {
            if ( comp_func(list[i], list[i-1]) < 0 ) {
                var q = list[i]; list[i] = list[i-1]; list[i-1] = q;
                swap = true;
            }
        } // for
        b++;

    } // while(swap)
  }
}

/* ******************************************************************
   Supporting functions: bundled here to avoid depending on a library
   ****************************************************************** */

// Dean Edwards/Matthias Miller/John Resig

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", sorttable.init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
    document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
    var script = document.getElementById("__ie_onload");
    script.onreadystatechange = function() {
        if (this.readyState == "complete") {
            sorttable.init(); // call the onload handler
        }
    };
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            sorttable.init(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = sorttable.init;

// written by Dean Edwards, 2005
// with input from Tino Zijdel, Matthias Miller, Diego Perini

// http://dean.edwards.name/weblog/2005/10/add-event/

function dean_addEvent(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	} else {
		// assign each event handler a unique ID
		if (!handler.$$guid) handler.$$guid = dean_addEvent.guid++;
		// create a hash table of event types for the element
		if (!element.events) element.events = {};
		// create a hash table of event handlers for each element/event pair
		var handlers = element.events[type];
		if (!handlers) {
			handlers = element.events[type] = {};
			// store the existing event handler (if there is one)
			if (element["on" + type]) {
				handlers[0] = element["on" + type];
			}
		}
		// store the event handler in the hash table
		handlers[handler.$$guid] = handler;
		// assign a global event handler to do all the work
		element["on" + type] = handleEvent;
	}
};
// a counter used to create unique IDs
dean_addEvent.guid = 1;

function removeEvent(element, type, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, false);
	} else {
		// delete the event handler from the hash table
		if (element.events && element.events[type]) {
			delete element.events[type][handler.$$guid];
		}
	}
};

function handleEvent(event) {
	var returnValue = true;
	// grab the event object (IE uses a global event object)
	event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
	// get a reference to the hash table of event handlers
	var handlers = this.events[event.type];
	// execute each event handler
	for (var i in handlers) {
		this.$$handleEvent = handlers[i];
		if (this.$$handleEvent(event) === false) {
			returnValue = false;
		}
	}
	return returnValue;
};

function fixEvent(event) {
	// add W3C standard event methods
	event.preventDefault = fixEvent.preventDefault;
	event.stopPropagation = fixEvent.stopPropagation;
	return event;
};
fixEvent.preventDefault = function() {
	this.returnValue = false;
};
fixEvent.stopPropagation = function() {
  this.cancelBubble = true;
}

// Dean's forEach: http://dean.edwards.name/base/forEach.js
/*
	forEach, version 1.0
	Copyright 2006, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

// array-like enumeration
if (!Array.forEach) { // mozilla already supports this
	Array.forEach = function(array, block, context) {
		for (var i = 0; i < array.length; i++) {
			block.call(context, array[i], i, array);
		}
	};
}

// generic enumeration
Function.prototype.forEach = function(object, block, context) {
	for (var key in object) {
		if (typeof this.prototype[key] == "undefined") {
			block.call(context, object[key], key, object);
		}
	}
};

// character enumeration
String.forEach = function(string, block, context) {
	Array.forEach(string.split(""), function(chr, index) {
		block.call(context, chr, index, string);
	});
};

// globally resolve forEach enumeration
var forEach = function(object, block, context) {
	if (object) {
		var resolve = Object; // default
		if (object instanceof Function) {
			// functions have a "length" property
			resolve = Function;
		} else if (object.forEach instanceof Function) {
			// the object implements a custom forEach method so use that
			object.forEach(block, context);
			return;
		} else if (typeof object == "string") {
			// the object is a string
			resolve = String;
		} else if (typeof object.length == "number") {
			// the object is array-like
			resolve = Array;
		}
		resolve.forEach(object, block, context);
	}
};

  
  // Hide the quiz after they submit their results
  $('#quiz').addClass('hide');
  $('#submit-btn').addClass('hide');
  $('#retake-btn').removeClass('hide');
  $('#test1').addClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function() {
  $('#quiz').removeClass('hide');
  $('#submit-btn').removeClass('hide');
  $('#retake-btn').addClass('hide');
  $('#test1').removeClass('hide');

  $('.results').addClass('hide');
  $('.results').removeClass('show');
})
