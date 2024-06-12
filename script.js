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
  const digitalTime = new Date();
  const hours = digitalTime.getHours();
  const minutes = digitalTime.getMinutes();
  const seconds = digitalTime.getSeconds();
  //let period = "AM";
}