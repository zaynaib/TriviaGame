//setInterval(function, milliseconds);
//set up for timer function

var score =0;

window.onload = function(){
$("#start").on("click", startCountdown());
};

function counter(count){
	//var count = 60;
	while(count != 0){
		console.log(count);
		count = count-1;
	}
}
function startCountdown(){
	setInterval(counter(60), 1000);

};

//quiz questions

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

var quiz ={
	question1: "What type of pony is AppleJack?",
	a:"Earth",
	b:"Unicorn",
	c:"Pegasi",
	answer:"Earth"

}





