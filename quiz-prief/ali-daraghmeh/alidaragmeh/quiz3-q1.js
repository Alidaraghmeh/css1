//left-side numbers 
const n1 =document.getElementById("q1");
const n2 =document.getElementById("q2");
const n3 =document.getElementById("q3");
const n4 =document.getElementById("q4");
const n5 =document.getElementById("q5");

// countdown timer
var timeLeft = 15; // in seconds
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    window.location.href='quiz3-q2.html';
    
  } else {
    document.getElementById("time-left").innerHTML = timeLeft + "s";
    timeLeft--;
  }
}

//options selected 
var selectedOption = document.getElementById("next-button");
selectedOption.addEventListener('click',function(){
  

});
































