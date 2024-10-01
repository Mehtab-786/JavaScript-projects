let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log(randomNumber);
let previosValues = []


let guessInput = document.querySelector("#guessInp")
let guessBtn = document.querySelector("button")
let remainingGuess = document.querySelector(".remainingHere")
let highLow = document.querySelector(".congos")
let winMessage = document.querySelector(".congo")
let losingMessage = document.querySelector(".conging")
let previosPara = document.querySelector(".previous")

function highOrLow(number) {
    if (number > randomNumber) {
        highLow.textContent = "Guess low "
    } else if(number < randomNumber) {
        highLow.textContent = "Guess high "        
    }    
    guessInput.value = ""
}


guessBtn.addEventListener("click", () => {
    let guess = guessInput.value
    if(guess>100) {
        alert("Guess below 100")
    } else{
        winOrwhat(guess)
    }
})

function addingToPrev(number){
    if (previosValues.length < 9) {
        console.log(previosValues.length);
        
        previosValues.push(number)
        previosPara.textContent = previosValues     
        remainingGuess.textContent = (10 - previosValues.length)
    } else {
        losingMessage.style.display = "block"
    }

}

function winOrwhat(inp) {
    if (inp == randomNumber) {
        winMessage.style.display = "block"
    } else {
        highOrLow(inp)
        addingToPrev(inp)                        
    }
}



