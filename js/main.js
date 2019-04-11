"use strict";

var timer;
var passedMilliSeconds = 0;
var startButton = document.getElementById("start button"),
    stopButton = document.getElementById("stop button"),
    resumeButton = document.getElementById("resume button"),
    ressetButton = document.getElementById("reset button"),
    lapButton = document.getElementById("lap button"),
    laps = document.getElementById("laps");

function startTimer() {
  startButton.style.display = "none";
  lapButton.style.display = "inline-block";
  stopButton.style.display = "inline-block";
  var startTimeOnClcik = Number(new Date());
  timer = setInterval(function() {
    passedTime(startTimeOnClcik);
  }, 10);
}

function resumeTimer() {
  resumeButton.style.display = "none";
  ressetButton.style.display = "none";
  stopButton.style.display = "inline-block";
  lapButton.style.display = "inline-block";
  var currentTime = Number(new Date());
  var stoppedTime = currentTime - passedMilliSeconds;
  timer = setInterval(function() {
    passedTime(stoppedTime);
  }, 10);
}

function stopTimer() {
  clearInterval(timer);
  ressetButton.style.display = "inline-block";
  resumeButton.style.display = "inline-block";
  stopButton.style.display = "none";
  lapButton.style.display = "none";
}

function resetTimer() {
  startButton.style.display = "inline-block";
  resumeButton.style.display = "none";
  ressetButton.style.display = "none";
  lapButton.style.display = "none";
  document.getElementById("passedTime").innerHTML = "0:00.00";
  laps.innerHTML = "";
  passedMilliSeconds = 0;
}

function addLap() {
  var newLapValue = document.getElementById("passedTime").textContent;
  var newLapItem = document.createElement("li");
  laps.appendChild(newLapItem);
  laps.lastElementChild.innerHTML = newLapValue;
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
