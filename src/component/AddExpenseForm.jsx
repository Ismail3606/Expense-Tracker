import  { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount: parseFloat(amount),
      date,
    };
    onAddExpense(expense);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded">
      <h3 className=" bg-gradient-to-r from-blue-900 via-purple-500 to-red-500 bg-clip-text text-transparent text-2xl font-medium mb-4">Add Expense</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense Title"
        className="mb-2 p-2 border w-full rounded"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="mb-2 p-2 border w-full rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-2 p-2 border w-full rounded"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;
