
/*
	Resources
	http://json.org/
	https://en.wikipedia.org/wiki/JSON
	https://beginnersbook.com/2015/04/json-tutorial/
	https://www.w3resource.com/JSON/structures.php
	https://www.w3schools.com/js/js_json.asp
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

*/
//setInterval(function, milliseconds);
//set up for timer function

var score =0;

//window.onload = function(){
$("#start").on("click", startCountdown);
//};

function counter(count){
	//var count = 60;
	while(count != 0){
		console.log(count);
		count = count-1;
	}
}

function startCountdown(){
	setInterval(counter(80), 1000);
};

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

//want to loop through the array and display the questions and answers to each object



for (var i = 0 ; i<quizQuestions.length; i++) {
	//setup timer for each
	var a = quizQuestions[i].a;
	var b = quizQuestions[i].b;
	var c = quizQuestions[i].c;
	
//I want to loop through the answers a,b,c and display them as a radio button later
	var questionDiv = $("<div class='question' id='panel" + i +"'><div>"+quizQuestions[i].question+"</div><div><input name='" +i+"ya' type='radio'><span>"+a+"</span></input><input name='"+i+"ya' type='radio'><span>"+b+"</span></input><input name='"+i+"ya' type='radio'><span>"+c+"</span></input></div></div>");
	


	$("#quiz").append(questionDiv);
	// <input type="radio" name="gender" value="male" checked> Male<br>
	console.log(a);
	//var radioA= $("#quiz").append("<input type='radio' value='"+a+"'>"+ a);
	//$(questionDiv).appendChild(radioA);
	//$(questionDiv).append("<input type='radio' value='"+b+"'>"+ b);
	//$(questionDiv).append("<input type='radio' value='"+c+"'>"+ c);

}

//check to see if button checked is equal to the answer

$('#quiz').on('change', 'input', function() {
	var userAns =$(this).next().text();
	var questionIndex = $(this).closest('.question').attr('id').match(/\d+/g);
	var correctAns = quizQuestions[questionIndex].answer;
	
	if (userAns === correctAns){
		score++
		console.log(score);
	} else {
		console.log('wrong');
	}
	console.log(correctAns);
})



//display object keys
//console.log(Object.keys(quizQuestions))
//if the user choose the correct answer give them a point
//else knock them a point

//$("#quiz").append('<input type="radio" name="Ace" value="1" id="rank">'+ quizQuestions.a)


//






