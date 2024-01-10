
var number =  document.querySelectorAll(".drum").length;
for (var i = 0; i<number; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
        
    });


}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation (event.key);

});

function makeSound(key)
{
        switch (key) {
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                
                break;
            case "a":
                var bass = new Audio("./sounds/kick-bass.mp3");
                bass.play();
                break;
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
                
            default:
                alert("Invalid choice");
                break;
        }
}


    function animation(currentKey)
    {
        var buttonclass = document.querySelector("."+currentKey);
        buttonclass.classList.add("pressed");

        setTimeout(function(){
            buttonclass.classList.remove("pressed");

        },100);
    }