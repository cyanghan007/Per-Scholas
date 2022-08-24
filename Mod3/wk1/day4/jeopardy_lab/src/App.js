import React from 'react';
import './App.css';
import RandomQuestion from './components/RandomQuestion';
import Score from './components/Score';

class App extends React.Component {
	state = {
		URL: 'http://jservice.io/api/random',
		URL10: 'http://jservice.io/api/random?count=10',
	};

	getQuestion = () => {
		fetch(this.state.URL)
			.then((response) => response.json())
			.then((data) => this.setState({ questions: data }))
			.catch((error) => console.error(error));
	};

  get10Questions = () => {
		fetch(this.state.URL10)
			.then((response) => response.json())
			.then((data) => this.setState({ questions: data }))
			.catch((error) => console.error(error));
	};

	render() {
		return (
			<div>
				<h1>Welcome to Jeopardy!</h1>
				<Score questions={this.state.questions} />
				<h2>Let's play!</h2>
				<RandomQuestion
					questions={this.state.questions}
					getQuestion={this.getQuestion}
          get10Questions={this.get10Questions}
				/>
			</div>
		);
	}
}

export default App;
