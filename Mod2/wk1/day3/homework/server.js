const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.get('/greeting', (req, res) => {
  res.send(`Hello, stranger`);
})

app.get('/greeting/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`);
})

app.listen(port, () => {
  console.log('listening on port ', port)
});