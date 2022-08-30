import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Gif from '../Gif/Gif';
import './App.css';

function App() {
	const [gifUrl, setGifUrl] = useState(null);

	const urlRandom = 'https://api.giphy.com/v1/gifs/random?api_key=';
	const apiKey = 'd7inZqVq8LpAzVdDBvQmlB3toKjuCyen';

	const getGif = async () => {
		try {
			const response = await axios.get(urlRandom + apiKey);
			console.log(response.data.data.embed_url);
			setGifUrl(response.data.data.embed_url);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
    getGif()
  }, []);

	console.log(gifUrl);
	return (
		<div className="App">
			<h2>Giphy</h2>
			<Button gifUrl={gifUrl} getGif={getGif} />
			<h3>Use Giphy to pull some giphs</h3>
			<Gif url={gifUrl} />
		</div>
	);
}

export default App;
