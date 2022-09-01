import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todos-api';
import CreateForm from './CreateForm';

function Todos() {
	const [todos, setTodos] = useState(null);

	useEffect(() => {
		getTodos().then((res) => setTodos(res));
	}, [todos]);

	return (
		<div>
			<ul>
				{todos &&
					todos.map((todo) => {
						return (
							<Link key={todo._id} to={`/${todo._id}`}>
								<p>{todo.description}</p>
							</Link>
						);
					})}
			</ul>
			<CreateForm />
		</div>
	);
}

export default Todos;
