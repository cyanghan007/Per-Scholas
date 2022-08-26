import React, { useState } from 'react';
import './App.css';
import Question from '../Question/Question';
import Score from '../Score/Score';

function App() {
	const [questions, setQuestions] = useState(null);
	const url = 'http://jservice.io/api/random';
	const url10 = 'http://jservice.io/api/random?count=10';
	const points = questions ? questions[0].value : 0;

	// with promise chain
	// const getQuestion = (url) => {
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((data) => setQuestions(data))
	// 		.catch((error) => console.error(error));
	// };

	// with async/await
	const getQuestion = async (url) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setQuestions(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="App">
			<h1>Welcome to Jeopardy!</h1>
			<Score points={points} />
			<h2>Let's play!</h2>
			<button onClick={() => getQuestion(url)}>Get Question</button>
			<button onClick={() => getQuestion(url10)}>
				Get 10 Questions
			</button>
			<Question questions={questions} />
		</div>
	);
}

export default App;
