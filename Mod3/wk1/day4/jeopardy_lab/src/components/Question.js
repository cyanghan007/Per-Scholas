import React from 'react';

class Question extends React.Component {
	state = {
		showQuestion: false,
	};

	toggleQuestion = () => {
		this.setState({ showQuestion: !this.state.showQuestion });
	};

	render() {
		return this.state.showQuestion ? (
			<div>
				<button onClick={this.toggleQuestion}>
					Click to Hide Question
				</button>
				<h4>Question: {this.props.answer}</h4>
			</div>
		) : (
			<div>
				<button onClick={this.toggleQuestion}>
					Click to Reveal Question
				</button>
			</div>
		);
	}
}

export default Question;
