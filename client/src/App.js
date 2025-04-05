import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExpenseForm from './components/ExpenseForm';
import Report from './components/Report';
import ChartComponent from './components/Chart';
import './App.css';

function App() {
    const [transactions, setTransactions] = useState([]);

    const handleTransactionAdded = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    return (
        <Router>
            <div className="App">
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/tracker">Tracker</Link>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tracker" element={
                            <>
                                <ExpenseForm onTransactionAdded={handleTransactionAdded} />
                                <Report />
                                <ChartComponent />
                            </>
                        } />
                    </Routes>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} DevFinancing</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;