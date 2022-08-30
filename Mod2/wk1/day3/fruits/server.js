const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3003;
const fruits = require('./models/fruits.js');

//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

app.use(express.urlencoded({extended:false}));

app.get('/fruits', (req, res) => {
  res.render('Index', {fruits: fruits});
});

app.get('/fruits/new', (req, res) => {
  res.render('New');
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render('Show', {
    fruit: fruits[req.params.indexOfFruitsArray]
  });
});

app.post('/fruits', (req, res) => {
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);
  // res.send('data received');
  res.redirect('/fruits');
});

// port
app.listen(port, () => {
  console.log('listening', port);
});