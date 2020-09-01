var userClickedPattern = [];

var buttonColours = [`red`, `blue`, `green`, `yellow`];

var gamePattern = [];

var started = false;

var level = 0;

checkAnswer(userClickedPattern.length - 1);

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log(`success`);
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log(`wrong`);
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $(`#level-title`).text(`Game Over, Press Any Key to restart`);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(document).keypress(function () {
  if (!started) {
    $(`#level-title`).text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

//user click detection

$(`.btn`).click(function () {
  var userChosenColour = $(this).attr(`id`);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

//Next sequence for the user

function nextSequence() {
  userClickedPattern = [];
  level++;
  $(`#level-title`).text(`Level ${level}`);
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
