const todoListUl = document.querySelector('#todo-list')
const taskInput = document.querySelector('#todo-input')
const addBtn = document.querySelector('#add-task-btn')

let allTaskList = JSON.parse(localStorage.getItem('taskList')) || []
addTaskUi();

addBtn.addEventListener('click', () => {
    let newTaskObj = {
        taskName: taskInput.value,
        status: false,
        id: Math.floor(Math.random() * 10000000000)
    };
    allTaskList.push(newTaskObj);
    localStorage.setItem('taskList', JSON.stringify(allTaskList))
    addTaskUi()
    taskInput.value = " "
})

function addTaskUi() {
    todoListUl.textContent = ""
    allTaskList.map((task) => {
    let singleTaskList = document.createElement('li');
    singleTaskList.textContent = task.taskName;
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete';
    singleTaskList.appendChild(deleteBtn);
    todoListUl.appendChild(singleTaskList)
    deleteBtn.addEventListener('click', () => {
        deleteTaskUi(task.id)
    })
    })
};
function deleteTaskUi(id) {
    allTaskList = allTaskList.filter((task) => task.id != id)
    localStorage.setItem('taskList', JSON.stringify(allTaskList))
    addTaskUi()
}