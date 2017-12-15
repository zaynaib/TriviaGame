/*
	Resources
	http://json.org/
	https://en.wikipedia.org/wiki/JSON
	https://beginnersbook.com/2015/04/json-tutorial/
	https://www.w3resource.com/JSON/structures.php
	https://www.w3schools.com/js/js_json.asp
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
*/

	var wrong =0;
	var right=0;


function answerPage(){
	$("#quiz").empty();
	var rightAnswerDisplay = $("#results").append("<p id='answers'>");
	rightAnswerDisplay.html("Correct: " +right +"<br>" + "Wrong:"+ wrong);
	console.log("woohoo!");
}


//timer

var time = 60;

function start() {
  intervalId = setInterval(count, 1000);
}


function stop() {

console.log("stopping");
  clearInterval(intervalId);
}

 function count() {

 time--;
 var timeDisplay = $("<p>");
 timeDisplay.attr("id","time");
 timeDisplay.text(time+"");
 $("#quiz").append(timeDisplay);

 console.log(time);
 if(time ===0){
 	stop();
 	answerPage();
 }

 }
 start();









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
	//setup timer for each
	var a = quizQuestions[i].a;
	var b = quizQuestions[i].b;
	var c = quizQuestions[i].c;
	
//I want to loop through the answers a,b,c and display them as a radio button later
	var questionDiv = $("<div class='question' id='panel" + i +"'><div>"+quizQuestions[i].question+"</div><div><input name='" +i+"ya' type='radio'><span>"+a+"</span></input><input name='"+i+"ya' type='radio'><span>"+b+"</span></input><input name='"+i+"ya' type='radio'><span>"+c+"</span></input></div></div>");
	


	$("#quiz").append(questionDiv);
	//console.log(a);
	

}

//check to see if button checked is equal to the answer

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


//display object keys
//console.log(Object.keys(quizQuestions))
//if the user choose the correct answer give them a point
//else knock them a point

//$("#quiz").append('<input type="radio" name="Ace" value="1" id="rank">'+ quizQuestions.a)


//
