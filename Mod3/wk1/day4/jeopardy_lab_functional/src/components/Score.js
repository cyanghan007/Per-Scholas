import React, { useState } from 'react';

function Score({ points }) {
	const [score, setScore] = useState(0);

	const addPoint = () => setScore(score + points);

	const subtractPoint = () => setScore(score - points);

	const resetScore = () => setScore(0);
	return (
		<div>
			<h2>
				Score: <span>{score}</span>
			</h2>
			<button onClick={subtractPoint}>Decrease</button>
			<button onClick={addPoint}>Increase</button>
			<button onClick={resetScore}>Reset</button>
		</div>
	);
}

export default Score;
