let expInputBtn = document.querySelector("#name");
let expAmtBtn = document.querySelector("#amount");
let expDateBtn = document.querySelector("#date");
let expCateBtn = document.querySelector("#category");
let totalAmt = document.querySelector("#total");

let amount = 0;

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let name = expInputBtn.value;
    let amt = parseFloat(expAmtBtn.value);
    let date = expDateBtn.value;
    let cat = expCateBtn.value;

    addExpense(name, amt, date, cat);

    document.querySelector("form").reset();
});

function addExpense(name, amt, date, cat) {
    let tbody = document.querySelector("tbody");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${amt}</td>
        <td>${date}</td>
        <td>${cat}</td>
        <td><button class='delete-btn'>Delete</button></td>
    `;

    tbody.appendChild(row);

    updateTotalAmount(amt);
}

function updateTotalAmount(amt) {
    amount += amt;
    totalAmt.innerText = `Total amount: ${amount}`;
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        let row = event.target.closest("tr");
        let amt = parseFloat(row.children[1].textContent);

        amount -= amt;
        totalAmt.innerText = `Total amount: ${amount}`;

        row.remove();
    }
});
