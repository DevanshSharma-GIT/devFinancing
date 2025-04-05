import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ onTransactionAdded }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const [category, setCategory] = useState('misc');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/transactions', {
                description,
                amount: parseFloat(amount),
                type,
                category: category,
            });
            onTransactionAdded(response.data);
            setDescription('');
            setAmount('');
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Amount (INR)" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="food">Food</option>
                <option value="fuel">Fuel</option>
                <option value="shopping">Shopping</option>
                <option value="party">Party</option>
                <option value="investment">Investment</option>
                <option value="loan">Loan to Friends</option>
                <option value="unwanted">Unwanted</option>
                <option value="misc">Misc</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default ExpenseForm;