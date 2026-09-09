const form = document.getElementById("expense-form");

const expenseName = document.getElementById("expense-name");
const expensesAmount = document.getElementById("expenses-amount");
const expennsesDate = document.getElementById("expense-date");
const expensesCategory = document.getElementById("expenses-category");

const noofExpenses = document.getElementById("no-of-expenses");
const totalExpenses = document.getElementById("total-expenses");

const table = document.querySelector("table");

let expenses = [];


form.addEventListener("submit", function(a) {

    a.preventDefault();

    const name = expenseName.value;
    const amount = Number(expensesAmount.value);
    const date = expennsesDate.value;
    const category = expensesCategory.value;


    if (amount <= 0) {
        alert("Enter a valid number");
        return;
    }


    const expense = {
        name: name,
        amount: amount,
        date: date,
        category: category
    };


    expenses.push(expense);

    updateExpenses();

    form.reset();
});


function updateExpenses() {

    noofExpenses.textContent = expenses.length;

    let total = 0;

    expenses.forEach(function(expense) {
        total = total + expense.amount;
    });


    totalExpenses.textContent = "Rs " + total.toFixed(2);


    const tbody = document.createElement("tbody");


    expenses.forEach(function(expense) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>Rs ${expense.amount.toFixed(2)}</td>
            <td>${expense.date}</td>
            <td>${expense.category}</td>
        `;

        tbody.appendChild(row);
    });


    table.appendChild(tbody);
}