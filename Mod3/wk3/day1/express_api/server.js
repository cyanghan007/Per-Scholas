// Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todosController = require('./controllers/todos');
const cors = require('cors');

// Environment Variables (getting ready for Heroku)
const app = express();
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
	console.log('MongoDB connection established: ', mongoURI),
);
// Error / Disconnection
db.on('error', (err) =>
	console.log(err.message + 'is mongo not running?'),
);
db.on('disconnected', () => console.log('mongo disconnected'));

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use('/todos', todosController); //use .json(), not .urlencoded()
app.use(express.static('public')); // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

// [I forget what the above methods do!! HELP!!](https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327)

app.listen(PORT, () => {
	console.log('Listening on port ', PORT);
});
