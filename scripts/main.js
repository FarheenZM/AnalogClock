const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// document.addEventListener("DOMContentLoaded", function() {
function setDate(){
  const now = new Date(); // gives current date & time
  const seconds = now.getSeconds(); //gets seconds from date & time

  //now we need to turn these seconds into degrees
  const secondsDegrees = ((seconds/60)*360) + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins/60)*360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours/12)*360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log(hours, mins, seconds);

}

setInterval(setDate, 1000); //to make something run every second i.e run setdate() every sec (1000 milisec)
