import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editTodo, getTodo } from '../services/todos-api';

function EditForm() {
	const { id } = useParams();
	const nav = useNavigate();
	const [todo, setTodo] = useState(null);

	useEffect(() => {
		getTodo(id).then((res) => setTodo(res));
	}, [id, todo]);

	const editTheTodo = (e) => {
		e.preventDefault();
		const updatedTodo = {
			description: e.target.description.value,
			complete: e.target.complete.checked,
		};
    console.log(updatedTodo)
		editTodo(id, updatedTodo);
		nav(`/${id}`);
	};

	return (
		todo && (
			<div>
				<form onSubmit={editTheTodo}>
					<input
						type="text"
						name="description"
						defaultValue={todo.description}
					/>
					Completed:{' '}
					<input
						type="checkbox"
						name="complete"
						defaultChecked={todo.complete}
					/>
					<input type="submit" />
				</form>
			</div>
		)
	);
}

export default EditForm;
