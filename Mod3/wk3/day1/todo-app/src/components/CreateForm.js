import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../services/todos-api';

function CreateForm(props) {
	const nav = useNavigate();

	const createTheTodo = (e) => {
		e.preventDefault();
		const newTodo = {
			description: e.target.description.value,
			complete: false,
		};
		createTodo(newTodo);
		nav(`/`);
	};

	return (
		<div>
			<h4>Create a Todo</h4>
			<form onSubmit={createTheTodo}>
				<input type="text" name="description" />
				<input type="submit" />
			</form>
		</div>
	);
}

export default CreateForm;
