import React from 'react';

export default function Gif({ url }) {
	return (
		<div>
			<iframe
				src={url}
				width="1200"
				height="600"
				frameBorder="0"
				className="giphy-embed"
				allowFullScreen></iframe>
		</div>
	);
}
