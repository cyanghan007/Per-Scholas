const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.listen(port, () => {
  console.log('Express server listening on ', port);
});