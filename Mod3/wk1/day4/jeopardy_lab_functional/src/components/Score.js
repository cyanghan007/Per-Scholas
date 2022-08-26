import React, { useState } from 'react';
import './Score.css';

function Score({ points }) {
	const [score, setScore] = useState(0);

	const addPoint = () => setScore(score + points);
	const subtractPoint = () => setScore(score - points);
	const resetScore = () => setScore(0);

	return (
		<div className="Score">
			<h2>
				Score: <span>{score}</span>
			</h2>
			<button id="decrease" onClick={subtractPoint}>
				Decrease
			</button>
			<button id="increase" onClick={addPoint}>
				Increase
			</button>
			<button id="reset" onClick={resetScore}>
				Reset
			</button>
		</div>
	);
}

export default Score;
