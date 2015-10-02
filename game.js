document.getElementById('one');
document.getElementById('two');
document.getElementById('three');
document.getElementById('four');
document.getElementById('five');
document.getElementById('six');
document.getElementById('seven');


var questions = ["Did I grow up in Hawaii?", "Do I speak Mandarin?", "Do I own a motorcycle?"];
var answers = ['YES', 'Y', 'NO','N'];
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
  five.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/1/17/Union_flag_1606_(Kings_Colors).svg' width='200'/>";
  count++;
  };
}

function ques2() {
  var question2 = prompt(questions[1]).toUpperCase();
  console.log('Question 2 response: ' + question2);
  if (question2 === answers[0] || question2 === answers[1]) {
  two.innerHTML = "I wish! Unfortunately I don't speak Mandarin."
  } else {
	two.innerHTML ="Correct";
  six.innerHTML = "<img src='data:image/png;base64,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' width='200'/>";
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
  seven.innerHTML = "<img src='http://www.mohren-plavina.com/uploads/tx_templavoila/mountainbike11.jpg' width='200'/>";
	count++;
  };
}

ques1();
ques2();
ques3();

four.innerHTML = "Congratulations, " + name + ", you answered " + count + " questions out of 3 correctly.";
