require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

// 1 percent chance to randomize
const randomizer = num => {
  let onePercent = Math.floor(Math.random() * 100);
  if (onePercent == 0) {
    return num + Math.floor(Math.random() * num);
  } else {
    return num;
  }
};

const fs = require('fs');
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content.toString()
      .replace('#numberOfBugs#', '<h1>' + options.numberOfBugs + ' in the code</h1>')
      .replace('#link#', '<a href=' + options.link + '</a>')
      .replace('#startOver#','<a href='+ options.startOver + '</a>' )
    return callback(null, rendered);
  })
});

app.set('views', './views');
app.set('view engine', 'hypatia');

app.get('/', (req, res, next) => {
  res.render('template', {numberOfBugs: '99 little bugs', link: '"/98">take one down, patch it around', startOver: null});
});

app.get('/:number_of_bugs', (req, res) => {
    if (req.params.number_of_bugs == 1) {
      res.render('template',{numberOfBugs: req.params.number_of_bugs + ' little bug', link: '"/' + (randomizer(req.params.number_of_bugs - 1)) + '">take one down, patch it around', startOver: null});
    } else if (req.params.number_of_bugs == 0) {
      res.render('template',{numberOfBugs: req.params.number_of_bugs + ' little bug', link: null, startOver: '"/">Start Over'});
    } else {
      res.render('template',{numberOfBugs: req.params.number_of_bugs + ' little bugs', link: '"/' + (randomizer(req.params.number_of_bugs - 1)) + '">take one down, patch it around', startOver: null});
    }
});

app.listen(port, () => {
  console.log('Express server listening on port ', port);
});