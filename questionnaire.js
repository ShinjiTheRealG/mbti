Survey.StylesManager.applyTheme("darkblue");

var surveyJSON = {pages:[{name:"Data Collection Survey",elements:[{type:"checkbox",name:"question1",title:"Which MBTI personality tests have you completed? (select all that apply)",hasComment:true,commentText:"Other (please specify both the test and the result)",choices:[{value:"item1",text:"Sakinorva"},{value:"item2",text:"CSJ"},{value:"item3",text:"Michael Caloz"},{value:"item4",text:"8functiontest"},{value:"item5",text:"16personalities"}],hasNone:true},{type:"dropdown",name:"question2",visibleIf:"{question1} contains 'item1'",title:"What was your most recent result on the Sakinorva test?",choices:[{value:"item1",text:"ESTJ"},{value:"item2",text:"ESTP"},{value:"item3",text:"ENTJ"},{value:"item4",text:"ENFJ"},{value:"item5",text:"ESFJ"},{value:"item6",text:"ESFP"},{value:"item7",text:"ENTP"},{value:"item8",text:"ENFP"},{value:"item9",text:"ISTJ"},{value:"item10",text:"ISTP"},{value:"item11",text:"INTJ"},{value:"item12",text:"INFJ"},{value:"item13",text:"ISFJ"},{value:"item14",text:"ISFP"},{value:"item15",text:"INTP"},{value:"item16",text:"INFP"}]},{type:"dropdown",name:"question3",visibleIf:"{question1} contains 'item2'",title:"What was your most recent result on the CSJ test?",choices:[{value:"item1",text:"ESTJ"},{value:"item2",text:"ESTP"},{value:"item3",text:"ENTJ"},{value:"item4",text:"ENFJ"},{value:"item5",text:"ESFJ"},{value:"item6",text:"ESFP"},{value:"item7",text:"ENTP"},{value:"item8",text:"ENFP"},{value:"item9",text:"ISTJ"},{value:"item10",text:"ISTP"},{value:"item11",text:"INTJ"},{value:"item12",text:"INFJ"},{value:"item13",text:"ISFJ"},{value:"item14",text:"ISFP"},{value:"item15",text:"INTP"},{value:"item16",text:"INFP"}]},{type:"dropdown",name:"question4",visibleIf:"{question1} contains 'item3'",title:"What was your most recent result on the Michael Caloz test?",choices:[{value:"item1",text:"ESTJ"},{value:"item2",text:"ESTP"},{value:"item3",text:"ENTJ"},{value:"item4",text:"ENFJ"},{value:"item5",text:"ESFJ"},{value:"item6",text:"ESFP"},{value:"item7",text:"ENTP"},{value:"item8",text:"ENFP"},{value:"item9",text:"ISTJ"},{value:"item10",text:"ISTP"},{value:"item11",text:"INTJ"},{value:"item12",text:"INFJ"},{value:"item13",text:"ISFJ"},{value:"item14",text:"ISFP"},{value:"item15",text:"INTP"},{value:"item16",text:"INFP"}]}],title:"Data Collection Survey"}]}

function sendDataToServer(survey) {
    survey.sendResult('0a25fb1d-9788-4ef4-adec-7a6157206e9b');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
