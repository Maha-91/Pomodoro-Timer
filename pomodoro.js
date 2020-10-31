/*function shortbreak() {
  location.replace("http://127.0.0.1:5500/Pomodoro-Timer/Shortbreak.html");
}
function Pomodoro() {
  location.replace("http://127.0.0.1:5500/Pomodoro-Timer/Pomodoro.html");
}
function longbreak() {
  location.replace("http://127.0.0.1:5500/Pomodoro-Timer/longbreak.html");
}*/
let seconds = "00"; 
	let timer_seconds=10;
	let timer_minutes;
	let seconds_interval;
	let minutes_interval;
	

let Pomodoro ="25" 
let pomofocus = "25",shortbreak ="5", longbreak = "15"
function Pomo() {  
  Pomodoro = pomofocus;
  document.body.style.background = "#f05b56";
  //templateTimers();
}
function Short() {
  Pomodoro = shortbreak;
  document.body.style.background = "#4ca6a9";
  //templateTimers();
}
function Long() {
  Pomodoro = longbreak;
  document.body.style.background = "#498fc1";
  //templateTimers();
}
/*function templateTimers(){
 // document.getElementById("timer-minutes").innerHTML = pomo_minutes;
  document.getElementById("timer-minutes").innerHTML=('0' + (pomo_minutes) ).slice(-2);           
  document.getElementById("timer-seconds").innerHTML = seconds;  
  document.getElementById("timerBtn").innerHTML="START";
  document.getElementById("timerBtn").value="START";   
  timer_seconds=10;
  clearInterval(seconds_interval);
 
  //clearTimeout(seconds_interval);
}*/
