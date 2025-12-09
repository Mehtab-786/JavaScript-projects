document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form')
    let inputText = document.querySelector('#expense-name')
    let inputNumber = document.querySelector('#expense-amount')
    let expList = document.querySelector('#expense-list')
    let totalText = document.querySelector('#total-amount')

    totalExpense = 0

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!inputText.value && !inputNumber.value) return
        addToExpList(inputText.value, inputNumber.value)

    })

    function addToExpList(title, num) {
        totalExpense += parseInt(num)
        totalText.textContent = totalExpense.toFixed(2)
        let list = document.createElement('li')
        list.innerHTML = `
        <p >${title} -- $${num}</p>
        <button data-id=${num}>Delete</button>
        `
        expList.appendChild(list)
        inputText.value = ""
        inputNumber.value = ""
    }

    expList.addEventListener('click', (e) => {
        if(e.target.nodeName == "BUTTON"){
            console.dir(e.target.parentNode)
            expList.removeChild(e.target.parentNode)
            // expList.remove()
            totalExpense -= parseInt(e.target.attributes[0].value)
            totalText.textContent = totalExpense.toFixed(2)
        }
    })

})