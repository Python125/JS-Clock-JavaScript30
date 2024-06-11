/*function setDate() {
  const today = new Date();
  let seconds = document.getElementById("seconds");
  let minutes = document.getElementById("minutes");
  let hours = document.getElementById("hours");

  hours.style.transform =
    "rotate(" + ((today.getHours() - 12) * 30 + 90 + "deg");
  minutes.style.transform = "rotate(" + (today.getMinutes() * 6 + 90 + "deg");
  seconds.style.transform = "rotate(" + (today.getSeconds() * 6 + 90 + "deg");
}

setInterval(setDate, 1000);
setDate();*/


//This commented code is from the Javascript30 tutorial. 
//Because I thought this project could be improved, I decided to look for another basic JS clock that is more complete.

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();