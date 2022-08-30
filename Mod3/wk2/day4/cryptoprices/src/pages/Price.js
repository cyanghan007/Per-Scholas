import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Price() {
	const apiKey = process.env.REACT_APP_API_KEY;
	const params = useParams();
	const symbol = params.symbol;
	const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
	const [coin, setCoin] = useState(null);

	const getCoin = async () => {
		try {
			const response = await axios.get(url);
			setCoin(response.data);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getCoin();
	}, []);

	const loaded = () => {
		return (
			<div>
				<h1>
					{coin.asset_id_base}/{coin.asset_id_quote}
				</h1>
				<h2>{coin.rate.toFixed(2)}</h2>
			</div>
		);
	};

	const loading = () => {
		return <h1>Loading...</h1>;
	};

	return coin && coin.rate ? loaded() : loading();
}

export default Price;
