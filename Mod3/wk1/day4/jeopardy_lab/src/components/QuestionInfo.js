import React from 'react';
import Question from './Question';

class QuestionInfo extends React.Component {
  state = {}
	render() {
		const question = this.props.question;
		return (
			<div>
				<div>
					<h3>
						Category: <span>{question.category.title}</span>
					</h3>
					<h4>
						Points: <span>{question.value}</span>
					</h4>
					<h4>
						Answer: <span>{question.question}</span>
					</h4>
					<Question answer={question.answer} />
				</div>
			</div>
		);
	}
}

export default QuestionInfo;
