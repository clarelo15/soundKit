//Detecting Button Press
var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});


function makeSound(keyword) {
  switch (keyword) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "z":
      var connection = new Audio("sounds/connection.mp3");
      connection.play();
      break;

    case "x":
      var fail = new Audio("sounds/fail.mp3");
      fail.play();
      break;

    case "c":
      var lose = new Audio("sounds/lose.mp3");
      lose.play();
      break;

      case "v":
        var roll = new Audio("sounds/roll.mp3");
        roll.play();
        break;

        case "b":
          var sad = new Audio("sounds/sad.mp3");
          sad.play();
          break;

          case "n":
            var surprise = new Audio("sounds/surprise.mp3");
            surprise.play();
            break;

            case "m":
              var warning = new Audio("sounds/warning.mp3");
              warning.play();
              break;

    default:
      console.log(keyword);

  }
}

function makeAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
