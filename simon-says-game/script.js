let buttonColours = [ "red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let gameStarted = false
let level = 0;


let heading = document.querySelector("#level-title")

function handler() {
    let btns = document.querySelectorAll(".btn");
    
    btns.forEach((item) => {
        item.addEventListener("click", (event) => {
            userClickedPattern.push(event.target.id);
            btnFlash(event.target.id)
            checkAnswer(userClickedPattern.length -1)
        });
    });
}

handler();


function btnFlash(color) {
    let flashBtn = document.querySelector(`#${color}`)
    
    flashBtn.classList.add("pressed")

    setTimeout(function(){
        flashBtn.classList.remove("pressed")
        },100)    
};

document.addEventListener("keydown", () => {
    if (!gameStarted) {
        nextSequences()
        gameStarted = true
    }
})


function nextSequences() {
    userClickedPattern = []
    level++
    heading.textContent =  `Level ${level}`    
        
    let randomNumber = Math.floor(Math.random() * 4); 
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    btnFlash(randomChosenColour)
}

function checkAnswer(currentLevel) {
       if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
       
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextSequences()
                }, 1000);
            }
        } else {
            document.querySelector("body").classList.add("game-over");
            heading.textContent = "Game Over, Press Any Key to Restart";
            setTimeout(() => {
                document.querySelector("body").classList.remove("game-over");
            }, 200);
            startOver(); // Restart the game
        }
}


function startOver() {
    level = 0;
    gamePattern = []
    gameStarted = false;
    userClickedPattern = []
}