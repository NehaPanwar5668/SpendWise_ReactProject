function ExpenseForm() {
  return (
    <div>
      <h2>Add Expense</h2>

      <input type="text" placeholder="Expense title" />
      <input type="number" placeholder="Amount" />

      <select>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <button>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;