function makingBubble() {
    let clutter = "";

    // Generate 216 bubbles with random numbers
    for (let i = 1; i < 208; i++) {
        let random = Math.floor(Math.random() * 30 + 1);
        clutter += `<div class="dot">${random}</div>`;
    }

    // Insert bubbles into the .bottom container
    document.querySelector(".bottom").innerHTML = clutter;

    // Reassign event listeners to all the .dot elements after bubbles are created
    document.querySelectorAll(".dot").forEach((element) => {
        element.addEventListener("click", (e) => {
            let user = e.target.textContent;
            let num = document.querySelector(".rand").textContent;
            check(user, num);
        });
    });
}

makingBubble();

function number() {
    // Generate and display a random number
    let num = Math.floor(Math.random() * 30 + 1);
    document.querySelector(".rand").textContent = num;
}

let timer = 60;
let time = setInterval(() => {
    document.querySelector(".timer").textContent = timer;
    timer--;

    if (timer < 0) {
        clearInterval(time);
        document.querySelector(".bottom").textContent = "";
    }
}, 1000);

function check(userInp, numberBubbles) {
    // If the user input matches the random number
    if (userInp == numberBubbles) {
        updateScore();
        number();
        makingBubble();  // Re-generate bubbles and re-attach event listeners
    }
}

let score = 0;

function updateScore() {
    // Update the score and display it
    score++;
    document.querySelector(".score").textContent = score;
}
