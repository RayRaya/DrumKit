var sounds = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];


for(var i = 0; i < document.querySelectorAll("button").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    handleClick(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//You can add event listeners to the entire page
document.addEventListener("keydown", function(){
  handleClick(event.key);
  buttonAnimation(event.key);
});

function handleClick(key){
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      default:
        console.log(this.innerHTML);
    }
}

function buttonAnimation(buttonKey){
  var currentButton = document.querySelector("." + buttonKey);
  //adds the class pressed to all the keys that you pressed
  currentButton.classList.add("pressed");
  //it waits 0.1 seconds until it removes that class from that tag
  setTimeout(function(){
    currentButton.classList.remove("pressed");
  }, 100);
}
