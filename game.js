
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("one");

var count = 0;
var name = prompt("What's your name?");

var question1 = prompt("Did I grow up in Hawaii?").toUpperCase();
	if (question1 === 'YES' || question1 === 'Y') {
//one.innerHTML = "Nope, I grew up in the U.K."	
	alert("Nope, I grew up in the U.K.");
	}
	else {
	alert("Correct!");
	count++;
}

var question2 = prompt("Do I speak Mandarin?").toUpperCase();
	if (question2 === 'YES' || question2 === 'Y') {
//two.innerHTML = "I wish! Unfortunately I don't speak Mandarin." 
	alert("I wish! Unfortunately I don't speak Mandarin.")
	}
	else {
	alert("Correct");
	count++;
}

var question3 = prompt("Do I own a motorcycle?").toUpperCase();
	if (question3 === 'YES' || question3 ===  'Y') {
	alert("Incorrect. I do have a trusty mountain bike however.")
	}
	else {
	alert("Correct");
	count++;
}

console.log('Question 1 repsonse: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);
	alert("You answered '" + question1 + "' to whether I grew up in Hawaii.");
	alert("You answered '" + question2 + "' to whether I speak Mandarin.");
	alert("You answered '" + question3 + "' to whether I own a motorcycle.");
	alert("Congratulations, " + name + ", you answered " + count + " questions out of 3 correctly.");

