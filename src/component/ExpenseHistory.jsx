

function ExpenseHistory({expenses}) {
  return (
    <div className="p-4 border rounded">
      <h3 className="bg-gradient-to-r from-blue-900 via-purple-500 to-red-500 bg-clip-text text-transparent text-2xl font-medium mb-4">Expense History</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span className="font-medium">{expense.title}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <span className="text-gray-500">{expense.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseHistory;
