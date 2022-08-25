import React, { useState } from 'react';
import './App.css';
import RandomQuestion from './components/RandomQuestion';
import Score from './components/Score';

function App() {
	const [questions, setQuestions] = useState(null);
	const points = questions ? questions[0].value : 0;

	const getQuestion = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setQuestions(data))
			.catch((error) => console.error(error));
	};
	console.log(questions);

	return (
		<div>
			<h1>Welcome to Jeopardy!</h1>
			<Score points={points} />
			<h2>Let's play!</h2>
			<RandomQuestion
				questions={questions}
				getQuestion={getQuestion}
			/>
		</div>
	);
}

export default App;
