let gameSeq = [];
let userSeq = [];

let started = false
let level = 0

let highScore = 0;

let colors = ['red', 'green', 'purple', 'pink']


let h1 = document.querySelector("h1")

let h3 = document.querySelector("h3")

document.addEventListener("keydown", function () {
    if (started == false) {
        started = true
                   /////////////////////////////////////
        levelling()
    }
})



function gameFlash(btn){

    btn.classList.add("flash")

    setTimeout(function () {
        btn.classList.remove("flash")
    },200)
}


function userFlash(btn){

    btn.classList.add("userflash")

    setTimeout(function () {
        btn.classList.remove("userflash")
    },250)
}


function checkColor (idx,levelArr) {

    if (gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelling,1000)

        //     function highScorecal(levelArr) {
        //         let maxim = Math.max(...levelArr)
        //         console.log("max n.",maxim);
        //         return maxim
        //     }
            
            
        //     h3.innerText = `High Score: ${highScorecal(allLevels)}`;
        //     console.log("hello");
            
        //     console.log("al level list",allLevels);
            
           
        }       
    } else {
        h1.innerHTML = `GAME OVER! Your score was <b>${level}</b> <br> press any key to start Over`;
        lostEffect()
        reset()
    }
}


// let allLevels = []

function levelling(){
    userSeq = []
    level++;
    h1.innerText = `level  ${level}`;     
    // allLevels.push(level)

    // console.log(allLevels);

    let random = Math.floor(Math.random() * colors.length);
    let randColor = colors[random]
    let randomBtn = document.querySelector(`.${randColor}`)
    
    gameSeq.push(randColor)
    // console.log(gameSeq);
    gameFlash(randomBtn)
    
}




function btnPress() {
    let btn = this
    userFlash(btn)

    let colour = btn.getAttribute("id")
    userSeq.push(colour)

    // console.log(userSeq);

    checkColor(userSeq.length -1)
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress)   
}


function reset() {
    started = false
    userSeq = []
    gameSeq = []
    level = 0
}


function lostEffect(){
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    },100)
}



