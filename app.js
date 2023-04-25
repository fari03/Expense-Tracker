// Initialize expenses array to store expense objects
let expenses = [];

// Add event listener to form submit event
expenseForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission behavior

  // Get the expense name and amount from the input fields
  const expenseName = document.getElementById("expense-name").value.trim();
  const expenseAmount = parseFloat(
    document.getElementById("expense-amount").value.trim()
  );

  // If expense name or amount is empty, show an error message
  if (!expenseName || !expenseAmount) {
    alert("Please enter expense name and amount");
    return;
  }

  // Create a new expense object and add it to the expenses array
  const expense = {
    id: Date.now(),
    name: expenseName,
    amount: expenseAmount,
  };
  expenses.push(expense);

  // Reset the form input fields
  expenseForm.reset();

  // Render the updated expenses list
  renderExpenses();
});

// Function to delete an expense from the expenses array
function deleteExpense(id) {
  expenses = expenses.filter(function (expense) {
    return expense.id !== id;
  });

  // Render the updated expenses list
  renderExpenses();
}
