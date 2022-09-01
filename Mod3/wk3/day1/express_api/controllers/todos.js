const express = require('express');
const router = express.Router();
const Todos = require('../models/todos');
const todosData = require('../utilities/seed');

// Seed
router.get('/seed', async (req, res) => {
	await Todos.deleteMany({});
	await Todos.create(todosData);
	res.redirect('/todos');
});

// INDUCES

// Index
router.get('/', (req, res) => {
	Todos.find({}, (error, allTodos) => {
		if (error) {
			res.status(404).send({
				msg: error.message,
			});
		} else {
			res.json(allTodos);
		}
	});
});

// // New
// router.get('/new', (req, res) => {
// 	res.send('new');
// });

// Delete
router.delete('/:id', (req, res) => {
	Todos.findByIdAndDelete(req.params.id, (error, deletedTodo) => {
		if (error) {
			res.status(404).send({
				msg: error.message,
			});
		} else {
			res.json(deletedTodo);
		}
	});
});

// Update
router.put('/:id', (req, res) => {
	Todos.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(error, updatedTodo) => {
			if (error) {
				res.status(404).send({
					msg: error.message,
				});
			} else {
				res.json(updatedTodo);
			}
		},
	);
});

// Create
router.post('/', (req, res) => {
	Todos.create(req.body, (error, newTodo) => {
		if (error) {
			res.status(404).send({
				msg: error.message,
			});
		} else {
			res.json(newTodo);
		} //.json() will send proper headers in response so client knows it's json coming back
	});
});

// // Edit
// router.put('/:id/edit', (req, res) => {
// 	res.send('new');
// });

// Show
router.get('/:id', (req, res) => {
	Todos.findById(req.params.id, (error, foundTodo) => {
		if (error) {
			res.status(404).send({
				msg: error.message,
			});
		} else {
			res.json(foundTodo);
		}
	});
});

module.exports = router;
