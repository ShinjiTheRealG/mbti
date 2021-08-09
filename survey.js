Survey
    .StylesManager
    .applyTheme("modern");

var json = {
 title: "MBTI Research Survey",
 completedHtml: "<b><h1><center>Thank you for taking the MBTI Research Survey!</b></h1></center>",
 pages: [
  {
   name: "MBTI Research Survey",
   elements: [
    {
     type: "html",
     name: "About",
     maxWidth: "800px",
     html: "<center><font size=\"12\">About</center></font><b><h1>Why should you take this survey?</h1></b><font size=\"4\">This survey is intended to create a large amount of data pertaining to personality theory, particularly MBTI. This data could help find correlations between different variables which may create a stronger foundation for the theory or offer interesting new insights. If you like to search for the truth, then you can help by completing this survey. The more data you provide, the better! </font><br><br>\n<b><h1>Do you need to provide personal information?</h1></b><font size=\"4\"><b>No.</b> Besides making some agreements and providing your <font color=\"blue\"><span title=\"This does not have to be your real name. It is simply for identifying survey participants.\">name</span></font>, all questions are <u> optional</u>. If you do not wish to answer a question, simply leave it blank. There is no login or sign-up required.</font><br><br>\n<b><h1>Who should take this survey?</h1></b><font size=\"4\">Anyone who is knowledgeable about MBTI and/or has completed MBTI type assessments. The more assessments you have taken, the merrier. Tests are not known to be the most accurate typing mechanisms, but they offer tangible, objective data. If you do not know much or anything about personality theory, then your completion of this survey may not provide helpful data. If you wish to contribute to this research regardless, please take the personality test from the home page of this website before beginning this survey.   </font><br><br>\n<b><h1>Why is your name required?</h1></b><font size=\"4\">Your name is only used as a form of identification as a survey participant. If you wish to retake the survey, simply enter the same name you provided during your first survey completion. You <b> do not need to enter a real name</b>. However, the name should be unique enough that it is significantly identifiable. Your name is an additional step in ensuring quality data. </font><br><br>\n<b><h1>Hit \"next\" to continue\n"
    }
   ],
   title: "About The Survey"
  },
  {
   name: "Verifications",
   elements: [
    {
     type: "html",
     name: "Title",
     maxWidth: "800px",
     html: "<center><b><h1>MBTI Research Survey</center></h1></b>"
    },
    {
     type: "multipletext",
     name: "Name and Discord",
     maxWidth: "800px",
     title: "Please enter your name.",
     description: "See previous page for why this is required.",
     hideNumber: true,
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please provide both a first AND last name. Remember, it does not have to be a real name. ",
       expression: "{Name and Discord.text1} notempty and {Name and Discord.text2} notempty"
      }
     ],
     items: [
      {
       name: "text1",
       title: "First"
      },
      {
       name: "text2",
       title: "Last"
      },
      {
       name: "text3",
       title: "Discord Tag (optional)"
      }
     ]
    },
    {
     type: "checkbox",
     name: "Agreements",
     maxWidth: "800px",
     titleLocation: "hidden",
     hideNumber: true,
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please accept all three agreements in order to take this survey.",
       expression: "{Agreements} = ['item1', 'item2', 'item3']"
      }
     ],
     choices: [
      {
       value: "item1",
       text: "By checking this box, you agree to provide accurate and honest answers in this survey to ensure quality data."
      },
      {
       value: "item2",
       text: "By checking this box, you verify that you are 13 years of age or older."
      },
      {
       value: "item3",
       text: "You acknowledge that your answers may be shared anonymously with the public for informational/educational purposes. Your name, discord, and email will NOT be shared publicly."
      }
     ]
    },
    {
     type: "text",
     name: "Email",
     maxWidth: "800px",
     title: "If you wish to receive updates about this website and information about the results and findings of this survey, please provide an email below.",
     description: "Optional Email",
     hideNumber: true
    }
   ],
   title: "Verification & Agreements"
  },
  {
   name: "Demographics",
   elements: [
    {
     type: "text",
     name: "q1",
     maxWidth: "800px",
     title: "Enter your age in years.",
     validators: [
      {
       type: "numeric",
       text: "Please enter a valid, numeric age. ",
       minValue: 13,
       maxValue: 99
      },
      {
       type: "numeric",
       text: "Please enter a number between 13 and 120. ",
       minValue: 13,
       maxValue: 120
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q2",
     maxWidth: "800px",
     title: "Select your sex.",
     description: "*refers to your biological/natal make up in terms of chromosomes, hormones, and primary and secondary sex characteristics. Your sex assigned at birth.",
     choices: [
      {
       value: "item1",
       text: "Male"
      },
      {
       value: "item2",
       text: "Female"
      },
      {
       value: "item3",
       text: "Intersex"
      }
     ]
    },
    {
     type: "checkbox",
     name: "q3",
     maxWidth: "800px",
     title: "Which of these best describes your current gender identity? (select all that apply)",
     validators: [
      {
       type: "expression"
      }
     ],
     hasComment: true,
     commentText: "Not Listed",
     choices: [
      {
       value: "item1",
       text: "Male"
      },
      {
       value: "item2",
       text: "Female"
      },
      {
       value: "item3",
       text: "Transgender Male"
      },
      {
       value: "item4",
       text: "Transgender Female"
      },
      {
       value: "item5",
       text: "Non-Binary or Non-Conforming"
      }
     ]
    },
    {
     type: "checkbox",
     name: "q4",
     maxWidth: "800px",
     title: "Which of these best describes your current sexual orientation? (select all that apply)",
     hasComment: true,
     commentText: "Not Listed",
     choices: [
      {
       value: "item1",
       text: "Asexual"
      },
      {
       value: "item2",
       text: "Bisexual"
      },
      {
       value: "item3",
       text: "Gay/Lesbian"
      },
      {
       value: "item4",
       text: "Heterosexual/Straight"
      },
      {
       value: "item5",
       text: "Pansexual"
      },
      {
       value: "item6",
       text: "Queer"
      }
     ]
    },
    {
     type: "checkbox",
     name: "q5",
     maxWidth: "800px",
     title: "How would you describe yourself?",
     hasComment: true,
     commentText: "Other ",
     choices: [
      {
       value: "item1",
       text: "White"
      },
      {
       value: "item2",
       text: "Hispanic, Latino or Spanish origin"
      },
      {
       value: "item3",
       text: "Black or African American"
      },
      {
       value: "item4",
       text: "Asian"
      },
      {
       value: "item5",
       text: "American Indian or Alaskan Native"
      },
      {
       value: "item6",
       text: "Middle Eastern or Northern African"
      },
      {
       value: "item7",
       text: "Native Hawaiian or other Pacific Islander"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q6",
     maxWidth: "800px",
     title: "Select your nationality.",
     choices: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua & Deps",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Central African Rep",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo {Democratic Rep}",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland {Republic}",
      "Israel",
      "Italy",
      "Ivory Coast",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea North",
      "Korea South",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar, {Burma}",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "St Kitts & Nevis",
      "St Lucia",
      "Saint Vincent & the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome & Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tonga",
      "Trinidad & Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe"
     ]
    },
    {
     type: "radiogroup",
     name: "q7",
     maxWidth: "800px",
     title: "Select the highest level of education you have completed.",
     choices: [
      {
       value: "item1",
       text: "No schooling completed"
      },
      {
       value: "item2",
       text: "Nursery school to 8th grade"
      },
      {
       value: "item3",
       text: "Some high school, no diploma"
      },
      {
       value: "item4",
       text: "High school graduate, diploma or the equivalent"
      },
      {
       value: "item5",
       text: "Some college, no degree"
      },
      {
       value: "item6",
       text: "Trade/technical/vocational training"
      },
      {
       value: "item7",
       text: "Associate Degree"
      },
      {
       value: "item8",
       text: "Bachelor's Degree"
      },
      {
       value: "item9",
       text: "Master's Degree"
      },
      {
       value: "item10",
       text: "Professional Degree"
      },
      {
       value: "item11",
       text: "Doctorate Degree"
      }
     ]
    },
    {
     type: "text",
     name: "question4",
     visibleIf: "{q7} = 'item7' or {q7} = 'item8' or {q7} = 'item9' or {q7} = 'item10' or {q7} = 'item11'",
     maxWidth: "800px",
     title: "Which subject was your highest degree?"
    },
    {
     type: "radiogroup",
     name: "q8",
     title: "Select your relationship status.",
     choices: [
      {
       value: "item1",
       text: "Single"
      },
      {
       value: "item2",
       text: "Married"
      },
      {
       value: "item3",
       text: "In a relationship"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q9",
     maxWidth: "800px",
     title: "Select your employment status.",
     choices: [
      {
       value: "item1",
       text: "Student"
      },
      {
       value: "item2",
       text: "Employed for wages"
      },
      {
       value: "item3",
       text: "Out of work"
      },
      {
       value: "item4",
       text: "Self-Employed"
      },
      {
       value: "item5",
       text: "Unable to work"
      },
      {
       value: "item6",
       text: "Military"
      },
      {
       value: "item7",
       text: "Retired"
      }
     ]
    },
    {
     type: "text",
     name: "q10",
     visibleIf: "{q9} = 'item2' or {q9} = 'item4'",
     maxWidth: "800px",
     title: "What do you do for work?"
    },
    {
     type: "text",
     name: "q11",
     visibleIf: "{q9} = 'item7'",
     maxWidth: "800px",
     title: "What did you do for work?"
    }
   ],
   title: "Demographics"
  },
  {
   name: "Your Type",
   elements: [
    {
     type: "radiogroup",
     name: "question3",
     maxWidth: "800px",
     title: "Have you decided an MBTI type for yourself?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item4",
       text: "Yes, but you're not sure"
      },
      {
       value: "item2",
       text: "No, but you have an idea"
      },
      {
       value: "item3",
       text: "No, no idea"
      }
     ],
     otherText: "Yes, but you're not sure"
    },
    {
     type: "dropdown",
     name: "q12",
     visibleIf: "{question3} <> 'item3'",
     maxWidth: "800px",
     title: "Which MBTI type do you think you are?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question1",
     visibleIf: "{question3} <> 'item3'",
     maxWidth: "800px",
     title: "Which form of MBTI did you use to find your type?",
     choices: [
      {
       value: "item1",
       text: "4 function model"
      },
      {
       value: "item2",
       text: "8 function model"
      },
      {
       value: "item3",
       text: "unsure"
      },
      {
       value: "item4",
       text: "You didn't find your type on your own"
      }
     ]
    },
    {
     type: "rating",
     name: "question9",
     visibleIf: "{question3} <> 'item3'",
     maxWidth: "800px",
     title: "How confident are you in your type with 1 being no confidence and 10 being absolute confidence?",
     rateMax: 10
    },
    {
     type: "comment",
     name: "question2",
     visibleIf: "{question3} <> 'item3'",
     maxWidth: "800px",
     title: "Please explain how you fit the type you think you are.",
     maxLength: 500
    },
    {
     type: "checkbox",
     name: "q13",
     maxWidth: "800px",
     title: "Which MBTI personality tests have you completed? (select all that apply)",
     description: "These are some of the common MBTI online assessments. They should be easy to google search.",
     hasComment: true,
     commentText: "Other (please specify both the test and the result)",
     choices: [
      {
       value: "item1",
       text: "Sakinorva"
      },
      {
       value: "item2",
       text: "CSJ"
      },
      {
       value: "item3",
       text: "Michael Caloz"
      },
      {
       value: "item4",
       text: "8functiontest (the test on this site)"
      },
      {
       value: "item5",
       text: "16personalities"
      },
      {
       value: "item6",
       text: "Humanmetrics"
      }
     ],
     hasNone: true
    },
    {
     type: "dropdown",
     name: "q14",
     visibleIf: "{q13} contains 'item1'",
     maxWidth: "800px",
     title: "What was your most recent result on the Sakinorva test?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q15",
     visibleIf: "{q13} contains 'item2'",
     maxWidth: "800px",
     title: "What was your most recent result on the CSJ test?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q16",
     visibleIf: "{q13} contains 'item3'",
     maxWidth: "800px",
     title: "What was your most recent result on the Michael Caloz test?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q17",
     visibleIf: "{q13} contains 'item4'",
     maxWidth: "800px",
     title: "What was your most recent result on the 8 function test?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q18",
     visibleIf: "{q13} contains 'item5'",
     maxWidth: "800px",
     title: "What was your most recent result on the 16 personalities test?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q19",
     visibleIf: "{q13} contains 'item6'",
     maxWidth: "800px",
     title: "What was your most recent result on the Humanmetrics test?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "checkbox",
     name: "question5",
     maxWidth: "800px",
     title: "Have other people typed you?",
     choices: [
      {
       value: "item1",
       text: "Yes, friends and/or family"
      },
      {
       value: "item2",
       text: "Yes, strangers"
      },
      {
       value: "item3",
       text: "Yes, by a professional typist"
      },
      {
       value: "item4",
       text: "No"
      }
     ]
    },
    {
     type: "dropdown",
     name: "question6",
     visibleIf: "{question5} <> ['item4']",
     maxWidth: "800px",
     title: "Which type do others tend to type you as the most?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "q20",
     maxWidth: "800px",
     title: "What do you think is your Socionics type?",
     description: "Some people may argue that Socionics and MBTI are the same thing; however, the definitions and positional archetypes are different enough to consider it a separate but familiar system. Do not answer this question with an MBTI to Socionics conversion. Only answer if you've studied socionics specifically or have taken a specific socionics test.",
     choices: [
      {
       value: "item1",
       text: "LII"
      },
      {
       value: "item2",
       text: "ILE"
      },
      {
       value: "item3",
       text: "ESE"
      },
      {
       value: "item4",
       text: "SEI"
      },
      {
       value: "item5",
       text: "LSI"
      },
      {
       value: "item6",
       text: "SLE"
      },
      {
       value: "item7",
       text: "EIE"
      },
      {
       value: "item8",
       text: "IEI"
      },
      {
       value: "item9",
       text: "ESI"
      },
      {
       value: "item10",
       text: "SEE"
      },
      {
       value: "item11",
       text: "LIE"
      },
      {
       value: "item12",
       text: "ILI"
      },
      {
       value: "item13",
       text: "EII"
      },
      {
       value: "item14",
       text: "IEE"
      },
      {
       value: "item15",
       text: "LSE"
      },
      {
       value: "item16",
       text: "SLI"
      }
     ]
    },
    {
     type: "rating",
     name: "question7",
     visibleIf: "{q20} notempty",
     maxWidth: "800px",
     title: "How confident are you in your Socionics type?",
     description: "1 is no confidence and 10 is absolute confidence",
     rateMax: 10
    },
    {
     type: "dropdown",
     name: "q21",
     title: "What do you think is your enneagram type?",
     choices: [
      {
       value: "item1",
       text: "1w9"
      },
      {
       value: "item2",
       text: "1w2"
      },
      {
       value: "item3",
       text: "2w1"
      },
      {
       value: "item4",
       text: "2w3"
      },
      {
       value: "item5",
       text: "3w2"
      },
      {
       value: "item6",
       text: "3w4"
      },
      {
       value: "item7",
       text: "4w3"
      },
      {
       value: "item8",
       text: "4w5"
      },
      {
       value: "item9",
       text: "5w4"
      },
      {
       value: "item10",
       text: "5w6"
      },
      {
       value: "item11",
       text: "6w5"
      },
      {
       value: "item12",
       text: "6w7"
      },
      {
       value: "item13",
       text: "7w6"
      },
      {
       value: "item14",
       text: "7w8"
      },
      {
       value: "item15",
       text: "8w7"
      },
      {
       value: "item16",
       text: "8w9"
      },
      {
       value: "item17",
       text: "9w8"
      },
      {
       value: "item18",
       text: "9w1"
      }
     ]
    },
    {
     type: "rating",
     name: "question8",
     visibleIf: "{q21} notempty",
     maxWidth: "800px",
     title: "How confident are you in your enneagram type?",
     description: "1 is no confidence and 10 is absolute confidence",
     rateMax: 10
    },
    {
     type: "radiogroup",
     name: "q22",
     maxWidth: "800px",
     title: "How much time have you spent studying/researching MBTI and/or personality theory?",
     description: "Week, month, and year here do not imply you have studied for 24 hours each day. Assume these mean you are studying with moderate frequency during these time periods.",
     choices: [
      {
       value: "item1",
       text: "No time"
      },
      {
       value: "item2",
       text: "Less than one hour"
      },
      {
       value: "item3",
       text: "1-8 hours"
      },
      {
       value: "item4",
       text: "About a week"
      },
      {
       value: "item5",
       text: "About a month"
      },
      {
       value: "item6",
       text: "A few months to half a year"
      },
      {
       value: "item7",
       text: "About a year"
      },
      {
       value: "item8",
       text: "2-3 years"
      }
     ],
     hasOther: true,
     otherText: "4 years or more"
    },
    {
     type: "checkbox",
     name: "q23",
     maxWidth: "800px",
     title: "Where have you learned about MBTI/personality theory? (select all that apply)",
     hasComment: true,
     commentText: "Other (please specify)",
     choices: [
      {
       value: "item1",
       text: "CPT youtube channel"
      },
      {
       value: "item2",
       text: "Love Who youtube channel"
      },
      {
       value: "item3",
       text: "OPS youtube channel"
      },
      {
       value: "item4",
       text: "CSJ youtube channel or website"
      },
      {
       value: "item5",
       text: "Google searching"
      },
      {
       value: "item6",
       text: "Literature by Carl Jung"
      },
      {
       value: "item7",
       text: "Literature by Jungian analysts"
      },
      {
       value: "item8",
       text: "Friends/family/discord"
      }
     ],
     otherText: "Literature by Jungian analysts"
    }
   ],
   title: "Your Type"
  },
  {
   name: "Research Questions",
   elements: [
    {
     type: "rating",
     name: "question13",
     maxWidth: "800px",
     title: "If the average person is a 5, how open minded are you? ",
     description: "1 is the least open minded and 10 is the most open minded",
     rateMax: 10
    },
    {
     type: "rating",
     name: "question14",
     maxWidth: "800px",
     title: "If the average person is a 5, how intelligent are you?",
     description: "1 is the least intelligent and 10 is the most intelligent",
     rateMax: 10
    },
    {
     type: "rating",
     name: "question15",
     maxWidth: "800px",
     title: "If the average person is a 5, how good are you at reading and understanding others' emotions?",
     description: "1 is the poorest and 10 is the greatest",
     rateMax: 10
    },
    {
     type: "comment",
     name: "question10",
     maxWidth: "800px",
     title: "Try to think outside of the bounds of MBTI. What are the most outstanding, obvious, or particular personality traits that you have?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question12",
     maxWidth: "800px",
     title: "What are your greatest strengths?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question11",
     maxWidth: "800px",
     title: "What are your greatest weaknesses?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question17",
     maxWidth: "800px",
     title: "What are your hobbies?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question18",
     maxWidth: "800px",
     title: "What are some major morals or principles you follow?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question19",
     maxWidth: "800px",
     title: "What do you want to do in the future?",
     description: "Answer how you wish",
     maxLength: 500
    },
    {
     type: "radiogroup",
     name: "question20",
     maxWidth: "800px",
     title: "Which characteristic do you prefer in friends or partners?",
     choices: [
      {
       value: "item1",
       text: "Honesty"
      },
      {
       value: "item2",
       text: "Loyalty"
      }
     ]
    },
    {
     type: "dropdown",
     name: "question21",
     visibleIf: "{q8} = 'item2' or {q8} = 'item3'",
     maxWidth: "800px",
     title: "If known, what is the type of your significant other?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "question22",
     maxWidth: "800px",
     title: "If known, what is the type of your mother?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "dropdown",
     name: "question23",
     maxWidth: "800px",
     title: "If known, what is the type of your father?",
     choices: [
      {
       value: "item1",
       text: "ESTJ"
      },
      {
       value: "item2",
       text: "ESTP"
      },
      {
       value: "item3",
       text: "ENTJ"
      },
      {
       value: "item4",
       text: "ENFJ"
      },
      {
       value: "item5",
       text: "ESFJ"
      },
      {
       value: "item6",
       text: "ESFP"
      },
      {
       value: "item7",
       text: "ENTP"
      },
      {
       value: "item8",
       text: "ENFP"
      },
      {
       value: "item9",
       text: "ISTJ"
      },
      {
       value: "item10",
       text: "ISTP"
      },
      {
       value: "item11",
       text: "INTJ"
      },
      {
       value: "item12",
       text: "INFJ"
      },
      {
       value: "item13",
       text: "ISFJ"
      },
      {
       value: "item14",
       text: "ISFP"
      },
      {
       value: "item15",
       text: "INTP"
      },
      {
       value: "item16",
       text: "INFP"
      }
     ]
    },
    {
     type: "comment",
     name: "question25",
     maxWidth: "800px",
     title: "Can you write the first name you provided to help ensure quality answers?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question24",
     maxWidth: "800px",
     title: "What are common ways in which other people describe you?",
     maxLength: 500
    },
    {
     type: "comment",
     name: "question16",
     maxWidth: "800px",
     title: "Describe the person you wish to be.",
     maxLength: 500
    },
    {
     type: "matrix",
     name: "question29",
     maxWidth: "1200px",
     title: "Please use the matrix to describe yourself",
     columns: [
      "Strongly Disagree",
      "Disagree",
      "Neither Agree nor Disagree",
      "Agree",
      "Strongly Agree"
     ],
     rows: [
      {
       value: "Row 1",
       text: "You are an emotional person"
      },
      {
       value: "Row 2",
       text: "You think most people are bad or evil"
      },
      {
       value: "Row 3",
       text: "You think most people are good"
      },
      {
       value: "Row 4",
       text: "You think most people are dumb or unintelligent"
      },
      {
       value: "Row 5",
       text: "You think most people are intelligent"
      },
      {
       value: "Row 6",
       text: "You are a quiet person"
      },
      {
       value: "Row 7",
       text: "You are a good person"
      },
      {
       value: "Row 8",
       text: "You are a creative person"
      },
      {
       value: "Row 9",
       text: "You care a lot about your physical appearance"
      },
      {
       value: "Row 10",
       text: "You feel alienated from society"
      },
      {
       value: "Row 11",
       text: "You are funny"
      }
     ]
    },
    {
     type: "comment",
     name: "question27",
     maxWidth: "800px",
     title: "How did this survey make you feel?",
     maxLength: 500
    }
   ],
   title: "Research Questions"
  }
 ],
 showProgressBar: "both",
 progressBarType: "questions",
 showPreviewBeforeComplete: "showAnsweredQuestions"
};


function sendDataToServer(survey) {
    survey.sendResult('41128982-aa0b-4d45-82f9-a6ed0a665df9');
}

var survey = new Survey.Model(json);


$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});
