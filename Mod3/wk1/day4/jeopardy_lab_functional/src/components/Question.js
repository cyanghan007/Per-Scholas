import React, { useState } from 'react';

function Question({ answer }) {
	const [showQuestion, toggleQuestion] = useState(false);

	return showQuestion ? (
		<div>
			<button onClick={() => toggleQuestion(!showQuestion)}>
				Click to Hide Question
			</button>
			<h4>Question: {answer}</h4>
		</div>
	) : (
		<div>
			<button onClick={() => toggleQuestion(!showQuestion)}>
				Click to Reveal Question
			</button>
		</div>
	);
}

export default Question;
