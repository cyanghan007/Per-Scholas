import axios from 'axios';
const baseUrl = 'http://localhost:3001/todos';

export async function getTodos() {
	try {
		const url = baseUrl;
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

export async function getTodo(id) {
	try {
		const url = `${baseUrl}/${id}`;
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

export async function deleteTodo(id) {
	try {
		const url = `${baseUrl}/${id}`;
		const response = await axios.delete(url);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

export async function editTodo(id, updatedTodo) {
	try {
		const url = `${baseUrl}/${id}`;
		const response = await axios.put(url, updatedTodo);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

export async function createTodo(newTodo) {
	try {
		const url = baseUrl;
		const response = await axios.post(url, newTodo);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}
