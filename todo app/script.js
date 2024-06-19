let inp = document.querySelector("#new-todo");
let btn = document.querySelector("#add-todo");
let place = document.querySelector("#todo-list")

btn.addEventListener("click", function (){
    let task = document.createElement("li")
    task.textContent = inp.value
    
    place.appendChild(task)

    task.appendChild(deleteBtn())

    inp.value = "";
    
})


function deleteBtn () {
    let btn = document.createElement("button")
    btn.textContent = "Delete"

    btn.addEventListener("click", function() {
            btn.parentElement.remove()
    })

    return btn
}   

