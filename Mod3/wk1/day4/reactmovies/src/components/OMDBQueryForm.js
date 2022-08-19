import React from 'react';
import MovieInfo from './MovieInfo';

class OMDBQueryForm extends React.Component {
	state = {
		baseURL: 'http://www.omdbapi.com/?',
		apikey: 'apikey=' + '41a2e6cd',
		query: '&t=',
		movieTitle: '',
		searchURL: '',
	};
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState(
			{
				searchURL:
					this.state.baseURL +
					this.state.apikey +
					this.state.query +
					this.state.movieTitle,
			},
			() => {
				fetch(this.state.searchURL).then((response) =>
					response.json().then(
						(json) => this.setState({ movie: json, movieTitle: '' }),
						(error) => console.error(error),
					),
				);
			},
		);
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="movieTitle">Title</label>
					<input
						id="movieTitle"
						type="text"
						value={this.state.movieTitle}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Find Movie Info" />
				</form>
				{this.state.movie ? (
					<MovieInfo movie={this.state.movie} />
				) : null}
			</>
		);
	}
}

export default OMDBQueryForm;
