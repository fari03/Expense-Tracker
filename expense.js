// Get form element from the HTML
const expenseForm = document.getElementById("expense-form");

// Add event listener to DOMContentLoaded event to render the expenses table on page load
document.addEventListener("DOMContentLoaded", function () {
  renderExpenses();
});
