// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [{
    prompt: 'I use Fi a lot',
    ISTJ: 1,
    ISTP: -1,
    INTJ: 1,
    INFJ: 0,
    class: 'group0'
  },
  {
    prompt: 'I use Si a lot',
    ISTJ: 2,
    ISTP: 0,
    INTJ: -2,
    INFJ: -2,
    class: 'group1'
  },
  {
    prompt: 'I use Ti a lot',
    ISTJ: 0,
    ISTP: 2,
    INTJ: 0,
    INFJ: 1,
    class: 'group2'
  },
  {
    prompt: 'I use Ni a lot',
    ISTJ: -2,
    ISTP: 1,
    INTJ: 2,
    INFJ: 2,
    class: 'group3'
  },
  {
    prompt: 'I choose my friends carefully',
    weight: -1,
    class: 'group4'
  },
  {
    prompt: 'I find it difficult to tell stories about myself',
    weight: 1,
    class: 'group5'
  },
  {
    prompt: 'I am usually highly motivated and energetic',
    weight: 1,
    class: 'group6'
  },
  {
    prompt: 'I find it easy to walk up to a group of people and join in conversation',
    weight: 1,
    class: 'group7'
  },
  {
    prompt: 'Being adaptable is more important than being organized',
    weight: 1,
    class: 'group8'
  },
  {
    prompt: 'I care more about making sure no one gets upset than winning a debate',
    weight: 1,
    class: 'group9'
  },
  {
    prompt: 'I often do not feel I have to justify myself to people',
    weight: 1,
    class: 'group10'
  },
  {
    prompt: 'I would rather improvise than spend time coming up with a detailed plan',
    weight: 1,
    class: 'group11'
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
  } else {
    // $('[class='thisgroup).prop('checked', false);
    totalISTJ = (findPromptWeightISTJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalISTP -= (findPromptWeightISTP(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalINTJ -= (findPromptWeightINTJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    totalINFJ -= (findPromptWeightINFJ(prompts, this_group) * findValueWeight(prompt_values, $('.' + this_group + '.active').text()));
    // console.log($('.'+this_group+'.active').text());
    $('.' + this_group).removeClass('active');

    // console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
    // $(this).prop('checked', true);
    $(this).addClass('active');
    totalISTJ += (findPromptWeightISTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalISTP += (findPromptWeightISTP(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINTJ += (findPromptWeightINTJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
    totalINFJ += (findPromptWeightINFJ(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
  }

  console.log(totalISTJ);
  console.log(totalISTP);
  console.log(totalINFJ);
  console.log(totalINTJ);
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
