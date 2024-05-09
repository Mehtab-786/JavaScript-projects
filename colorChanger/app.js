let btns = document.querySelectorAll(".button")
let body = document.querySelector("body")

btns.forEach(function (button) {
    
    button.addEventListener("click", function (e) {
        
        let color = e.target.id;
        body.style.backgroundColor = color;


// ---------other way----------
        // if (color === "red"){
        //     body.style.backgroundColor = color;
        // } else if (color === "green") {
        //     body.style.backgroundColor = color;
        // } else if (color === "silver") {
        //     body.style.backgroundColor = color;
        // } else if (color === "blue") {
        //     body.style.backgroundColor = color;
        // } else if (color === "black") {
        //     body.style.backgroundColor = color;
        // } else {
        //     body.style.backgroundColor  = color;
        // }
        })
})