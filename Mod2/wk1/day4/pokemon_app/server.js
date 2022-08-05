require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3003;
const Pokemon = require('./models/pokemon.js');
const pokemonData = require('./utilities/pokemonData');

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('Connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  Pokemon.find({}, (err, allPokemon) => {
    res.render('Index', {
      pokemon: allPokemon
    });
  });
});

app.get('/pokemon/seed', async (req, res) => {
  await Pokemon.deleteMany({});
  await Pokemon.create(pokemonData);
  // await Pokemon.deleteMany({name: /saur/});
  res.redirect('/pokemon');
})

app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

app.post('/pokemon', (req, res) => {
  Pokemon.create(req.body, (err) => {
    res.redirect('/pokemon');
  });
});

app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render('Show', {
      pokemon: foundPokemon
    });
  });
});

app.get('/pokemon/:id/edit', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    if (!err) {
      res.render('Edit', {
        pokemon: foundPokemon
      });
    } else {
      res.send({ msg: err.message })
    }
  });
});

app.post('/pokemon', (req, res) => {
  Pokemon.create(req.body, (err) => {
    res.redirect('/pokemon');
  });
});

app.delete('/pokemon/:id/', (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err) => {
    res.redirect('/pokemon');
  });
});

app.put('/pokemon/:id/', (req, res) => {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
    res.redirect(`/pokemon/${updatedPokemon.id}`);
  });
});

app.listen(port, () => {
  console.log('Express server listening on ', port);
});