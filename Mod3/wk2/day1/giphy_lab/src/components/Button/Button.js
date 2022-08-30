import React from 'react';

function Button({ gifUrl, getGif }) {
	return (
		<button onClick={getGif}>
			{gifUrl ? 'Make API Call Again' : 'Make API Call'}
		</button>
	);
}

export default Button;
