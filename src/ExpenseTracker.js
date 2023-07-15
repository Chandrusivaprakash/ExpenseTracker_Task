import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleAdd = () => {
    if (amount !== '') {
      const newBalance = balance + parseInt(amount);
      setBalance(newBalance);

      const newTransaction = { type: 'Income', amount: parseInt(amount) };
      setTransactionHistory([...transactionHistory, newTransaction]);

      setAmount('');
    }
  };

  const handleRemove = () => {
    if (amount !== '') {
      const newBalance = balance - parseInt(amount);
      setBalance(newBalance);

      const newTransaction = { type: 'Expense', amount: parseInt(amount) };
      setTransactionHistory([...transactionHistory, newTransaction]);

      setAmount('');
    }
  };

  return (
    <div>
        
    {/* sections : 1 */}
      <div>
        <h2>Expense Tracker</h2>
        <p>Current Balance: {balance}</p>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>

      {/* sections : 2 */}
      <div>
        <h3>Transaction History</h3>
        {transactionHistory.length > 0 ? (
          <ul>
            {transactionHistory.map((transaction, index) => (
              <li key={index}>
                {transaction.type}: {transaction.amount}
              </li>
            ))}
          </ul>
        ) : ( <p>No transactions recorded yet.</p> )}
      </div>

    </div>
  );
};

export default ExpenseTracker;
