document.getElementById('one');
document.getElementById('two');
document.getElementById('three');

var questions ["Did I grow up in Hawaii?", "Do I speak Mandarin?", "Do I own a motorcycle?"];
var answers ['YES', 'Y', 'NO','N']
var count = 0;
var name = prompt("What's your name?");
alert("Welcome " + name + "!");

function ques1() {
  var question1 = prompt(questions[0]).toUpperCase();
  console.log('Question 1 repsonse: ' + question1);
  if (question1 === answers[0] || question1 === answers[1]) {
  one.innerHTML = "Nope, I grew up in the U.K.";
  } else {
  one.innerHTML = "Correct!";
  count++;
  };
}

function ques2() {
  var question2 = prompt(questions[1]).toUpperCase();
  console.log('Question 2 response: ' + question2);
  if (question2 === answers[0] || answers[1] === 'Y') {
  two.innerHTML = "I wish! Unfortunately I don't speak Mandarin."
  } else {
	two.innerHTML ="Correct";
	count++;
  };
}

function ques3() {
  var question3 = prompt(questions[2]).toUpperCase();
  console.log('Question 3 response: ' + question3);
  if (question3 === answers[0] || question3 ===  answers[1]) {
	three.innerHTML = "Incorrect. I do have a trusty mountain bike however."
  } else {
	three.innerHTML = "Correct";
	count++;
  };
}

ques1();
ques2();
ques3();

four.innerHTML = "Congratulations, " + name + ", you answered " + count + " questions out of 3 correctly.";
