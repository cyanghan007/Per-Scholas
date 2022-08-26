import React, { useState } from 'react';
import './Answer.css';

function Answer({ answer }) {
	const [showQuestion, toggleQuestion] = useState(false);

	return (
		<div className="Answer">
			<button onClick={() => toggleQuestion(!showQuestion)}>
				{showQuestion
					? 'Click to Hide Question'
					: 'Click to Reveal Question'}
			</button>
			{showQuestion && (
				<h4>
					Question: <span>{answer}</span>
				</h4>
			)}
		</div>
	);
}

export default Answer;
