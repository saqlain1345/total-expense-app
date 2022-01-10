let totalExpense = 0;

const headingEl = document.querySelector("#headingTotal");

const inputDescEl = document.querySelector("#inputDesc");

const inputElement = document.querySelector("#inputAmount");

const inputDesc = document.querySelector("#headingDesc");

const allExpenses = [];


function addExpenseToTotal() {

    const expenseItem = {}
   
//   1. read value from inputAmount
    const textAmount = inputElement.value;

    const textDesc = inputDescEl.value;
    // console.log({ textAmount, textDesc });

//  2. convert from text  into number
    const expense = parseInt(textAmount, 10);
    // console.log({ expense } );

    expenseItem.desc = textDesc;
    expenseItem.amount = expense;
    console.log(expenseItem);

    allExpenses.push(expenseItem);
    console.clear();
    console.table(allExpenses);
//  3. add value to totalExpense
    totalExpense = totalExpense + expense;
    // console.log({ totalExpense });
   
    headingEl.textContent = totalExpense;
    inputDesc.textContent = textDesc;

}

const element = document.querySelector("#btnAddExpense");

element.addEventListener("click", addExpenseToTotal, false);

