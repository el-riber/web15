// server.js
const express = require('express');
const app = express();
const port = 3002; // or any port you prefer

const { data: dogFacts } = require('./dog_facts');

app.get('/facts', (req, res) => {
    const { number } = req.query;
    let response = dogFacts;
  
    if (number) {
        const num = parseInt(number);
        if (isNaN(num) || num < 1 || num > dogFacts.length) {
            return res.status(400).json({ message: "Invalid number of facts requested.", success: false });
        }
        response = response.slice(0, num);
    }
  
    res.json({ facts: response, success: true });
});

app.listen(port, () => console.log(`Dog Facts API running on port ${port}!`));

