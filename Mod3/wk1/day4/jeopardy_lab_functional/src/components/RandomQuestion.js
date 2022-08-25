import React from 'react';
import QuestionInfo from './QuestionInfo';

function RandomQuestion({ questions, getQuestion }) {
	const url = 'http://jservice.io/api/random';
	const url10 = 'http://jservice.io/api/random?count=10';
	console.log(questions);
	return (
		<div>
			<button onClick={() => getQuestion(url)}>Get Question</button>
			<button onClick={() => getQuestion(url10)}>
				Get 10 Questions
			</button>
			{questions
				? questions.map((question) => (
						<QuestionInfo key={question.id} question={question} />
				  ))
				: null}
		</div>
	);
}

export default RandomQuestion;
