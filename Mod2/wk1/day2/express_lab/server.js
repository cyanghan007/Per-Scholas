require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
app.set('views', './views');
app.set('view engine', 'hypatia');

app.get('/', (req, res) => {
  res.render('template1', { title: 'Start', message: 'Hello there!', content: 'Can you find the <a href="http://localhost:3000/page1">secret link</a>?'});
});

app.get('/page1', (req, res) => {
  res.render('template1', { title: 'Clickbait 1', message: 'click <a href="http://localhost:3000/page2">here</a> to get to secret', content: '' });
});

app.get('/page2', (req, res) => {
  res.render('template1', { title: 'Clickbait 2', message: 'nope not yet ---> <a href="http://localhost:3000/page3">here</a>', content: ''});
});

app.get('/page3', (req, res) => {
  res.render('template1', { title: 'Clickbait 3', message: 'should be the <a href="http://localhost:3000/page4">next</a> one', content: ''});
});

app.get('/page4', (req, res) => {
  res.render('template1', { title: 'Clickbait 4', message: 'Nope ---> <a href="http://localhost:3000/page5">link</a>', content: ''});
});

app.get('/page5', (req, res) => {
  res.render('template1', { title: 'Clickbait 5', message: 'if i had a dollar for every time you bite that clickbait ---> <a href="http://localhost:3000/page6">click here</a>', content: '' });
});

app.get('/page6', (req, res) => {
  res.render('template1', { title: 'Clickbait 6', message: 'clickbaiters hate this one trick! Find out <a href="http://localhost:3000/page7">here!</a>', content: ''});
});

app.get('/page7', (req, res) => {
  res.render('template1', { title: 'Clickbait 7', message: '*sigh* you never learn, do you? <a href="http://localhost:3000/page8">DON\'T CLICK</a>', content: '' });
});

app.get('/page8', (req, res) => {
  res.render('template1', { title: 'Clickbait 8', message: 'ok this is the last one. Promise ---> <a href="http://localhost:3000/secret">secret link</a>', content: '' });
});

app.get('/secret', (req, res) => {
  res.render('template2', { title: 'Secret', message: 'Congrats! You got to secret link page', content: 'You know the rules --- > <a href="https://shorturl.at/gKSV9">here</a>'});
});

const fs = require('fs');
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if(err) return callback(err);
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
});


app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});
