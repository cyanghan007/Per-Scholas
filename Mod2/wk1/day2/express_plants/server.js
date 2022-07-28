require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

const plants = ['Monster Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', 'Witches\' Butter'];

app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/hello/:firstname/:lastname', (req, res) => {
  res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/:indexOfPlantsArray', (req, res) => {
  res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/fixed/:indexOfPlantsArray', (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray]);
  } else {
    res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray)
  }
});

app.listen(port, () => {
    console.log('listening on port', port);
});