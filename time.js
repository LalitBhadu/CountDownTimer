// Set the date we're counting down to
var countDownDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;

VanillaTilt.init(document.querySelector(".name"), {
  max: 25,
  speed: 400
});

VanillaTilt.init(document.querySelector(".table"), {
  max: 15,
  speed: 400
});

// Update the count down every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements
  document.querySelector(".days").textContent = days;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;

  // If the count down is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-timer").innerHTML =
      "The countdown is over!";
  }
}, 1000);
