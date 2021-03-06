/*
	Resources
	http://json.org/
	https://en.wikipedia.org/wiki/JSON
	https://beginnersbook.com/2015/04/json-tutorial/
	https://www.w3resource.com/JSON/structures.php
	https://www.w3schools.com/js/js_json.asp
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/

//Setup Variables


//counter for right and wrong answers
var wrong =0;
var right=0;


function answerPage(){
	$("#quiz").empty();
	var rightAnswerDisplay = $("#results").append("<p id='answers'>");
	rightAnswerDisplay.html("Correct: " +right +"<br>" + "Wrong:"+ wrong);
	console.log("woohoo!");
}


//Timer

//Set Time to 60 seconds
var time = 60;

//
function start() {
  intervalId = setInterval(count, 1000);
}


//When the time hits zero stop the timer with the clearInterval
function stop() {

	//lets me know that the timer is stopping
	console.log("stopping");
	clearInterval(intervalId);
}

//The timer will count down to zero. 
//Once tthe timer hits zero it will invoke the stop function
 function count() {

 time--;
 var timeDisplay = $("<p>");
 timeDisplay.attr("id","time");
 timeDisplay.text(time+"");
 $("#timerResults").empty().append(timeDisplay);

 console.log(time);
 //
 if(time ===0){
 	stop();
 	answerPage();
 }

 }
 start();

//All the different quiz questions that will show onto the quiz
var quizQuestions =[
	{
		question: "What type of pony is AppleJack?",
		a:"Earth",
		b:"Unicorn",
		c:"Pegasi",
		answer:"Earth"

	},

	{
		question: "What type of pony is FlutterShy?",
		a:"Earth",
		b:"Unicorn",
		c:"Pegasi",
		answer:"Pegasi"

	},

	{
		question: "What type of pony is Rarity?",
		a:"Earth",
		b:"Unicorn",
		c:"Pegasi",
		answer:"Unicorn"
	},

	{
		question: "What type of pony is Twilight Sparkle?",
		a:"Earth",
		b:"Alicorn",
		c:"Pegasi",
		answer:"Alicorn"
	},

	{
		question: "Who is AppleJack's little sister?",
		a:"Sweetie Bell",
		b:"Apple Bloom",
		c:"Scootloo",
		answer:"Apple Bloom"
	},

	{
		question: "Who is the princess of the Sun?",
		a:"Princess Twilight",
		b:"Princess Celestia",
		c:"Princess Cadance",
		answer:"Princess Celestia"
	},

	{
		question: "Who is Rarity sister?",
		a:"Scootloo",
		b:"Sweetie Bell",
		c:"Apple Bloom",
		answer:"Sweetie Bell"
	},

	{
		question: "Who is Twilight's oldest friend?",
		a:"Pinky Pie",
		b:"Spike",
		c:"Owlowiscious",
		answer:"Spike"
	},

	{
		question: "What type of animal does FlutterShy have for a pet?",
		a:"Rabbit",
		b:"Toothless Aligator",
		c:"Dog",
		answer:"Rabbit"
	},

	{
		question: "Who rules the Crystal Kingdom?",
		a:"Princess Luna",
		b:"Princess Twilght",
		c:"Princess Cadance",
		answer:"Princess Cadance"
	}

	];

	

/*
	For advanced quiz
*/

//display question
//setup timer
//when timer hits zero
//go to another question
//tools need will be a loop, timer,clear display
//loop through each question
//clear before question changes


/*
For basic quiz
*/
function setup(){

for (var i = 0 ; i<quizQuestions.length; i++) {

	//Extract answers from each question object from the quiz questions array
	var a = quizQuestions[i].a;
	var b = quizQuestions[i].b;
	var c = quizQuestions[i].c;
	var question = quizQuestions[i].question;

	//create a new div element for each question object
	var questionDiv = $('<div>');

	// add the question class to each question object
	$(questionDiv).addClass('question');

	//give each question div a unique id of naming convention panel + array index
	$(questionDiv).attr('id','panel'+i);

	//add the quiz questions to the DOM
	$(questionDiv).append(question);


	//Create the radio button for each potential answer to each question
	//each input will have a name consistent of the quesiont array index and the letter
	//for example the first element in the array will have a name of 0a, 0b, 0c etc

	var htmlInput =
	`
		<input name = ${i + 'a'} type='radio'><span>${a}</span>
		<input name = ${i + 'b'} type='radio'><span>${b}</span>
		<input name = ${i + 'c'} type='radio'><span>${c}</span>

	`
	
	// Add the quiz answers to each question
	$(questionDiv).append(htmlInput);


	//Add the questions and answers onto the DOM, into the form
	$("#quiz").append(questionDiv);
	

}

//check to see if button checked is equal to the answer

//
$('#quiz').on('change', 'input', function() {
	var userAns =$(this).next().text();
	var questionIndex = $(this).closest('.question').attr('id').match(/\d+/g);
	var correctAns = quizQuestions[questionIndex].answer;
	
	if (userAns === correctAns){
		right++;
		console.log("Correct:" +right);
	} else {
		wrong++;
		console.log("Wrong: " + wrong);
	}
	console.log(correctAns);
})

}

setup();

