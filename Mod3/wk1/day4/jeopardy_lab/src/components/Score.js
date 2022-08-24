// Need to fix score buttons to render for each question

import React from 'react';
class Score extends React.Component {
	state = {
		score: 0,
	};

	addPoint = () => {
		this.setState({
			score: this.state.score + this.props.questions[0].value,
		});
	};

	subtractPoint = () => {
		this.setState({
			score: this.state.score - this.props.questions[0].value,
		});
	};

	resetScore = () => {
		this.setState({ score: 0 });
	};

	render() {
		return (
			<div>
				<h2>
					Score: <span>{this.state.score}</span>
				</h2>
				<button onClick={this.subtractPoint}>Decrease</button>
				<button onClick={this.addPoint}>Increase</button>
				<button onClick={this.resetScore}>Reset</button>
			</div>
		);
	}
}

export default Score;
