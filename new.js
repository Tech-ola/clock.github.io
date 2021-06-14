let date= new Date();
let hours= date.getHours();
let minutes= date.getMinutes();
let seconds= date.getSeconds();
let noon=12;
let meridian;
if(hours>= noon){
meridian="PM";
}else{
	meridian="AM";
}
pretty_time= hours + ":" + minutes + ":" + seconds + meridian;

document.getElementById('time').innerHTML= pretty_time;

var sound = new Audio();
sound.src= 'alarm.mp3';
var timer;

function setAlarm(el){
	var time= document.getElementById('alarmTime').valueAsNumber;
	if(isNaN(time)){
		alert("Invalid DateTime");
		return;
	}
var alarm = new Date(time);
var alarmTime= new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
var duration= alarmTime.getTime() - (new Date()).getTime();

if(duration < 0){
	alert('Time already passed');
	return;
}
timer= setTimeout(initAlarm, duration);
el.innerHTML="<span class='glyphicon glyphicon-remove'></span>Cancel Alarm";
el.setAttribute('onclick', 'cancelAlarm(this);');
el.setAttribute('class','btn btn-danger');

}
function cancelAlarm(el){
	el.innerHTML = "<span class='glyphicon glyphicon-time'></span> Set Alarm";
	el.setAttribute('onclick','setAlarm(this);');
	el.setAttribute('class', 'btn btn-success');
	clearTimeout(timer);
}

function initAlarm(){
	sound.loop= true;
	sound.play();
	document.getElementById('alarmButton').style.display='none';
	document.getElementById('selectButton').style.display='';
}
function stopAlarm(){
	sound.pause();
	sound.currentTime = 0;
	document.getElementById('selectButton').style.display= 'none';
	cancelAlarm(document.getElementById('alarmButton'));
	document.getElementById('alarmButton').style.display= '';
}
function snoozeAlarm(){
	stopAlarm();
	setTimeout(initAlarm, 300000);
	button.innerHTML = "Cancel Alarm";
	button.setAttribute('onclick', 'cancelAlarm(this);');

}

const deg = 6; //360deg / 60(min||sec) => 6
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
/*var digits = {};

    var positions = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2' ];

    var digitHolder = clock.find('.digits');

    $.each(positions, function(){
*/
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30; //360deg / 12 hour => 30
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
/*var digits = {};

    var positions = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2' ];

    var digitHolder = clock.find('.digits');

    $.each(positions, function(){
*/
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
