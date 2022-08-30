require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3003;
const Fruit = require('./models/fruit.js');

// Connecting to database
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

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
  Fruit.find({}, (error, allFruits) => {
    res.render('Index', {
      fruits: allFruits
    });
  });
});

app.get('/fruits/new', (req, res) => {
  res.render('New');
});

app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('Show', {
      fruit: foundFruit
    });
  });
});

app.post('/fruits', (req, res) => {
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  Fruit.create(req.body, (err) => {
    res.redirect('/fruits');
  });
});

// port
app.listen(port, () => {
  console.log('listening', port);
});