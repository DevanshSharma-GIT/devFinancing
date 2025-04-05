import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartComponent() {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        axios.get('/transactions').then((res) => {
            const income = res.data.filter((t) => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
            const expense = res.data.filter((t) => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
            setChartData({
                labels: ['Income', 'Expenses'],
                datasets: [
                    {
                        label: 'Amount (INR)',
                        data: [income, expense],
                        backgroundColor: ['green', 'red'],
                    },
                ],
            });
        });
    }, []);

    return <div className="chart-container"><Pie data={chartData} /></div>;
}

export default ChartComponent;