"use strict";

var timer;
var passedMilliSeconds = 0;

function startTimer(time) {
  document.getElementById("start button").style.display = "none";
  document.getElementById("stop button").style.display = "inline-block";
  var startTimeOnClcik = Number(new Date());
  timer = setInterval(function() {
    passedTime(startTimeOnClcik);
  }, 10);
}

function resumeTimer() {
  document.getElementById("resume button").style.display = "none";
  document.getElementById("stop button").style.display = "inline-block";
  var currentTime = Number(new Date());
  var a = currentTime - passedMilliSeconds;
  timer = setInterval(function() {
    passedTime(a);
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById("reset button").style.display = "inline-block";
  document.getElementById("resume button").style.display = "inline-block";
  document.getElementById("stop button").style.display = "none";
}

function resetTimer() {
  document.getElementById("start button").style.display = "inline-block";
  document.getElementById("resume button").style.display = "none";
  document.getElementById("reset button").style.display = "none";
  document.getElementById("passedTime").innerHTML = "0:00.00";
  passedMilliSeconds = 0;
}

function passedTime(originTime) {
  //calculating passed time
  var currentTime = Number(new Date());
  passedMilliSeconds = currentTime - originTime;
  var passedSeconds = ((passedMilliSeconds % 60000) / 1000).toFixed(2);
  var passedMinutes = Math.floor(passedMilliSeconds / 60000);
  document.getElementById("passedTime").innerHTML =
    passedSeconds == 60
      ? passedMinutes + 1 + ":00"
      : passedMinutes + ":" + (passedSeconds < 10 ? "0" : "") + passedSeconds;
}