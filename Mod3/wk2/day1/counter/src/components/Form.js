import { useState } from 'react';
const Form = (props) => {
	// State to hold form data
	const [form, setForm] = useState({
		name: '',
		age: 0,
	});

	// handleChange function
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={form.name}
				onChange={handleChange}
				name="name"
				placeholder="write name here"
			/>
			<input
				type="number"
				value={form.age}
				onChange={handleChange}
				name="age"
				placeholder="write age here"
			/>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default Form;
