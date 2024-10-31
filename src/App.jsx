// src/App.jsx
import  { useState, useEffect } from 'react';
import BalanceDisplay from './component/BalanceDisplay';
import AddExpenseForm from './component/AddExpenseForm';
import ExpenseHistory from './component/ExpenseHistory';
import Navbar from './component/Navbar';
;

function App() {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
    const initialBalance = savedExpenses.reduce((acc, expense) => acc - expense.amount, 0);
    setBalance(initialBalance);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
    setBalance((prevBalance) => prevBalance - expense.amount);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar/>
      <BalanceDisplay balance={balance} />
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseHistory expenses={expenses} />
    </div>
  );
}

export default App;
