let rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function (details) {
    let locate = rect.getBoundingClientRect();

    let leftinside = details.clientX - locate.left
    
    if (leftinside < locate.width /2) {
        let red = 250 - leftinside;
        rect.style.backgroundColor = `rgb(${red},0,0)`;
    } else {
        rect.style.backgroundColor = "white";
        let red = leftinside-250; 
        
        rect.style.backgroundColor = `rgb(0,0,${red})`;
    }
});


rect.addEventListener("mouseleave", function () {
    rect.style.backgroundColor = "white"
})