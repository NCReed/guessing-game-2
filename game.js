document.getElementById('one');
document.getElementById('two');
document.getElementById('three');

var count = 0;
var name = prompt("What's your name?");
alert("Welcome " + name + "!");

function ques1() {
  var question1 = prompt("Did I grow up in Hawaii?").toUpperCase();
  console.log('Question 1 repsonse: ' + question1);
  if (question1 === 'YES' || question1 === 'Y') {
    one.innerHTML = "Nope, I grew up in the U.K.";
  }
  else {
    one.innerHTML = "Correct!";
    count++;
  };
}

function ques2() {
  var question2 = prompt("Do I speak Mandarin?").toUpperCase();
  console.log('Question 2 response: ' + question2);
  if (question2 === 'YES' || question2 === 'Y') {
    two.innerHTML = "I wish! Unfortunately I don't speak Mandarin."
  }
  else {
	 two.innerHTML ="Correct";
	 count++;
  };
}

function ques3() {
  var question3 = prompt("Do I own a motorcycle?").toUpperCase();
  console.log('Question 3 response: ' + question3);
  if (question3 === 'YES' || question3 ===  'Y') {
	 three.innerHTML = "Incorrect. I do have a trusty mountain bike however."
  }
  else {
	 three.innerHTML = "Correct";
	 count++;
  };
}

ques1();

ques2();

ques3();

alert("Congratulations, " + name + ", you answered " + count + " questions out of 3 correctly.");

