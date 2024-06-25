for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    const element = document.querySelectorAll(".drum")[index];

    element.addEventListener("click" , function () {
        makesound(element.innerText)
        buttonAnimation(element.innerText)
    }) 
};



document.addEventListener('keypress', function(event) {
        makesound(event.key)
        buttonAnimation(event.key)
})



function makesound(keyName) {
    switch (keyName) {
        case "w":
            new Audio("./assets/sounds/snare.mp3").play();
            break;
        case "a":
            new Audio("./assets/sounds/crash.mp3").play();
            break;
        case "s":
            new Audio("./assets/sounds/kick-bass.mp3").play();
            break;
        case "d":
            new Audio("./assets/sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./assets/sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("./assets/sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("./assets/sounds/tom-4.mp3").play();
            break;
        
        default:
            console.log(keyName + " key not mapped to any sound");
    }
}



function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}