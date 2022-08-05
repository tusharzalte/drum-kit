
//detecting button press//

var x=document.querySelectorAll(".drum").length;

for(var i=0 ; i < x ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

function handleclick()
{
  var buttonInnerhtml= this.innerHTML;
  makesound(buttonInnerhtml);
   ButtonAnimation(buttonInnerhtml);

  // console.log(this.style.color="white");
  // var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
  // alert("i got clicked");
}
}
//detecting keyboard press//
document.addEventListener("keypress" , function(event)
{
  makesound(event.key);
   ButtonAnimation(event.key);
});


function makesound(key)
{
  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio('sounds/tom-1.mp3');
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
   case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
   case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
   case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "l":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
         break;


    default:console.log(buttonInnerhtml);

  }
}
function ButtonAnimation(currentkey){
  var Active=document.querySelector("." + currentkey);
  Active.classList.add("pressed");

  setTimeout(function() {
    Active.classList.remove("pressed");

  },100);

}
