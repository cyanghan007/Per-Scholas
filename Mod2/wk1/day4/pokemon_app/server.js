require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3003;
const Pokemon = require('./models/pokemon.js');

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('Connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.use(express.urlencoded({extended:false}));

app.get('/pokemon', (req, res) => {
  Pokemon.find({}, (err, allPokemon) => {
    res.render('Index', {pokemon: allPokemon});
  });
});

app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render('Show', {pokemon: foundPokemon});
  });
});

app.post('/pokemon', (req, res) => {
  Pokemon.create(req.body, (err) => {
    res.redirect('/pokemon');
  });
});

app.listen(port, () => {
  console.log('Express server listening on ', port);
});