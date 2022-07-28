const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const response = require('./models/response.js');

// greeting without name parameter
app.get('/greeting', (req, res) => {
  res.send(`Hello, stranger`);
});

// greeting with name parameter
app.get('/greeting/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

// tip calculator
app.get('/tip/:total/:tip', (req, res) => {
  res.send(`${req.params.total * (req.params.tip / 100)}`)
});

// magic 8 ball
app.get('/magic/:question', (req, res) => {
  res.send(`${req.params.question}?
  <h1>${response[Math.floor(Math.random() * response.length)]}</h1>`);
});

app.listen(port, () => {
  console.log('listening on port ', port)
});