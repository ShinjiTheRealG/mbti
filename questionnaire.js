Survey
    .StylesManager
    .applyTheme("modern");

var json = {
 title: "MBTI Research Survey",
 pages: [
  {
   name: "MBTI Research Survey",
   elements: [
    {
     type: "html",
     name: "question5",
     maxWidth: "800px",
     html: "<center><font size=\"12\">About</center></font><b><h1>Why should you take this survey?</h1></b><font size=\"4\">This survey is intended to create a large amount of data pertaining to personality theory, particularly MBTI. This data could help find correlations between different variables which may create a stronger foundation for the theory or offer interesting new insights. If you like to search for the truth, then you can help by completing this survey. The more data you provide, the better! </font><br><br>\n<b><h1>Do you need to provide personal information?</h1></b><font size=\"4\"><b>No.</b> Besides verifying you are over 13 and providing your <font color=\"blue\"><span title=\"This does not have to be your real name. It is simply for identifying survey participants.\">name</span></font>, all questions are <u> optional</u>. If you do not wish to answer a question, simply leave it blank. There is no login or sign-up required.</font><br><br>\n<b><h1>Who should take this survey?</h1></b><font size=\"4\">Anyone who is knowledgeable about MBTI and/or has completed MBTI type assessments. The more assessments you have taken, the merrier. Tests are not known to be the most accurate typing mechanisms, but they offer tangible, objective data. If you do not know much or anything about personality theory, then your completion of this survey may not provide helpful data. If you wish to contribute to this research regardless, please take the personality test from the home page of this website before beginning this survey.   </font><br><br>\n<b><h1>Why is your name required?</h1></b><font size=\"4\">Your name is only used as a form of identification as a survey participant. If you wish to retake the survey, simply enter the same name you provided during your first survey completion. You <b> do not need to enter a real name</b>. The name should be unique enough that it is significantly identifiable, however. Your name is an additional step in ensuring quality data. </font><br><br>\n<b><h1>Hit \"next\" to continue\n"
    }
   ],
   title: "About The Survey"
  },
  {
   name: "page2",
   elements: [
    {
     type: "image",
     name: "question6",
     maxWidth: "800px",
     indent: 14,
     imageLink: "https://api.surveyjs.io/private/Surveys/files?name=87b20d4d-5c81-4469-87d1-46141256b5db"
    },
    {
     type: "html",
     name: "question7",
     html: "<center><b><h1>MBTI Research Survey</center></h1></b>"
    },
    {
     type: "multipletext",
     name: "question8",
     maxWidth: "800px",
     title: "Please enter your name.",
     description: "See previous page for why this is required.",
     hideNumber: true,
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please provide a first name. It does not have to be real. It is only meant for identifying survey participants.",
       expression: "{question8.text1} notempty"
      },
      {
       type: "expression",
       text: "Please provide both a first AND last name. Remember, they do not have to be your real name. This is meant only to help identify survey participants.",
       expression: "{question8.text1} notempty and {question8.text2} notempty"
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
    }
   ],
   title: "Verification & Agreements"
  },
  {
   name: "Data Collection Survey",
   elements: [
    {
     type: "checkbox",
     name: "question1",
     title: "Which MBTI personality tests have you completed? (select all that apply)",
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
       text: "8functiontest"
      },
      {
       value: "item5",
       text: "16personalities"
      }
     ],
     hasNone: true
    },
    {
     type: "dropdown",
     name: "question2",
     visibleIf: "{question1} contains 'item1'",
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
     name: "question3",
     visibleIf: "{question1} contains 'item2'",
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
     name: "question4",
     visibleIf: "{question1} contains 'item3'",
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
    }
   ],
   title: "Data Collection Survey"
  }
 ],
 cookieName: "MBTI Survey",
 showProgressBar: "both",
 progressBarType: "questions",
 firstPageIsStarted: true,
 showPreviewBeforeComplete: "showAnsweredQuestions"
};


function sendDataToServer(survey) {
    survey.sendResult('0a25fb1d-9788-4ef4-adec-7a6157206e9b');
}

var survey = new Survey.Model(json);


$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});
