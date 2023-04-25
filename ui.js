// Get expense list table element from the HTML
const expenseTable = document.getElementById("expense-table");

// Function to render the expenses table
function renderExpenses() {
  // Clear the previous table of expenses
  expenseTable.innerHTML = "";

  // Add the table headers
  const tableHeaders = `
    <tr>
      <th>Name</th>
      <th>Amount (₹)</th>
      <th>Action</th>
    </tr>
  `;
  expenseTable.insertAdjacentHTML("beforeend", tableHeaders);

  // Iterate over the expenses array and create a new row for each expense
  expenses.forEach(function (expense) {
    // Create new row for expense
    const expenseRow = document.createElement("tr");

    // Set the row HTML content
    expenseRow.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td><button onclick="deleteExpense(${expense.id})">Delete</button></td>
    `;

    // Add the expense row to the expense table
    expenseTable.appendChild(expenseRow);
  });

  // Update the balance
  updateBalance();
}

// Function to update the balance
function updateBalance() {
  // Calculate the total expenses
  const totalExpenses = expenses.reduce(function (total, expense) {
    return total + expense.amount;
  }, 0);

  // Update the balance
  const balance = document.getElementById("balance");
  balance.innerHTML = `Balance: ₹${totalExpenses.toFixed(2)}`;
}
