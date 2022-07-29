
require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

const fs = require('fs');
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content.toString()
      .replace('#numberOfBottles#', '<h1>' + options.numberOfBottles + ' of beer on the wall</h1>')
      .replace('#link#', '<a href=' + options.link + '</a>')
      .replace('#startOver#','<a href='+ options.startOver + '</a>' )
    return callback(null, rendered);
  })
});

app.set('views', './views');
app.set('view engine', 'hypatia');

app.get('/', (req, res, next) => {
  res.render('template', {numberOfBottles: '99 Bottles', link: '"/98">take one down, pass it around', startOver: null});
});

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles == 1) {
      res.render('template',{numberOfBottles: req.params.number_of_bottles + ' Bottle', link: '"/' + (req.params.number_of_bottles - 1) + '">take one down, pass it around', startOver: null});
    } else if (req.params.number_of_bottles == 0) {
      res.render('template',{numberOfBottles: req.params.number_of_bottles + ' Bottle', link: null, startOver: '"/">Start Over'});
    } else {
      res.render('template',{numberOfBottles: req.params.number_of_bottles + ' Bottles', link: '"/' + (req.params.number_of_bottles - 1) + '">take one down, pass it around', startOver: null});
    }
});

app.listen(port, () => {
  console.log('Express server listening on port ', port);
});