var userClickedPattern = [];

var buttonColours = [`red`, `blue`, `green`, `yellow`];

var gamePattern = [];

//user click detection

$(`.btn`).click(function () {
  var userChosenColour = $(this).attr(`id`);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

//Next sequence for the user

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//play sound for next sequence and click

function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

//animations to user clicks

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass(`pressed`);
  setTimeout(function () {
    $(`#${currentColour}`).removeClass(`pressed`);
  }, 100);
}
