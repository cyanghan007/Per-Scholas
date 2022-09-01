import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTodo, getTodo } from '../services/todos-api';

function Todo() {
	const { id } = useParams();
	const nav = useNavigate();
	const [todo, setTodo] = useState(null);

	useEffect(() => {
		getTodo(id).then((res) => setTodo(res));
	}, [id, todo]);

	const deleteTheTodo = () => {
		deleteTodo(id);
		nav('/');
	};

	return (
		todo && (
			<div>
				<h1>ToDo:</h1>
				<h3>{todo.description}</h3>
				Completed:{' '}
				<input type="checkbox" defaultChecked={todo.complete}></input>
				<br />
				<button
					onClick={() => {
						nav(`/${id}/edit`);
					}}>
					Edit
				</button>
				<button onClick={deleteTheTodo}>Delete</button>
			</div>
		)
	);
}

export default Todo;
