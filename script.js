// Analog Clock
const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setAnalogTime() {
  const analogTime = new Date();

  const hour = analogTime.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const minute = analogTime.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const second = analogTime.getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setAnalogTime, 1000);
setAnalogTime();

// Digital Clock
function setDigitalTime() {
  let digitalTime = new Date();
  let hours = digitalTime.getHours();
  let minutes = digitalTime.getMinutes();
  let seconds = digitalTime.getSeconds();
  let period = "AM";

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    period = "PM";
  }
  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  /*
  if (hours < 10) {
    hours = "0" + hours;
  } else {
    hours = hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }
  */

  let time = hours + ":" + minutes + ":" + seconds + " " + period;
  document.getElementById("digital-clock").innerText = time;
  document.getElementById("digital-clock").textContent = time;

  setTimeout(setDigitalTime, 1000);
}

setDigitalTime();