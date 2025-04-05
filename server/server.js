const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const lodash = require('lodash');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Middleware to set CORS headers manually
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Initialize NeDB
const db = new Datastore({ filename: 'transactions.db', autoload: true });

// Logging middleware for request origins
app.use((req, res, next) => {
    console.log(`Request from origin: ${req.headers.origin}`);
    next();
});

// Routes
app.get('/transactions', (req, res) => {
    db.find({}).sort({ date: -1 }).exec((err, transactions) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        res.json(transactions);
    });
});

app.post('/transactions', (req, res) => {
    const transaction = {
        id: lodash.uniqueId(),
        description: req.body.description,
        amount: req.body.amount,
        type: req.body.type,
        category: req.body.category,
        date: new Date(),
    };

    db.insert(transaction, (err, newTransaction) => {
        if (err) {
            res.status(400).json({ message: err.message });
            return;
        }
        res.status(201).json(newTransaction);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});