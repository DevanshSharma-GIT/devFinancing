import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Report() {
    const [transactions, setTransactions] = useState([]);
    const [monthlyExpenses, setMonthlyExpenses] = useState(0);

    useEffect(() => {
        axios.get('/transactions').then((res) => {
            setTransactions(res.data);
            calculateMonthlyExpenses(res.data);
        });
    }, []);

    const calculateMonthlyExpenses = (data) => {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const monthlyTotal = data
            .filter((t) => {
                const transactionDate = new Date(t.date);
                return (
                    transactionDate.getMonth() === currentMonth &&
                    transactionDate.getFullYear() === currentYear &&
                    t.type === 'expense'
                );
            })
            .reduce((acc, t) => acc + t.amount, 0);

        setMonthlyExpenses(monthlyTotal);
    };

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.description} - {transaction.amount} INR ({transaction.type}) - {transaction.category} - {new Date(transaction.date).toLocaleString()}
                    </li>
                ))}
            </ul>
            <h2>Monthly Expenses: {monthlyExpenses} INR</h2>
        </div>
    );
}

export default Report;