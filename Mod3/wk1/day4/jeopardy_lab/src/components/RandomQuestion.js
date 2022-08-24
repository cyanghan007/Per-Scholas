import React from 'react';
import QuestionInfo from './QuestionInfo';

class RandomQuestion extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.getQuestion}>Get Question</button>
				<button onClick={this.props.get10Questions}>
					Get 10 Questions
				</button>
				{this.props.questions
					? this.props.questions.map((question) => (
							<QuestionInfo key={question.id} question={question} />
					  ))
					: null}
			</div>
		);
	}
}

export default RandomQuestion;
