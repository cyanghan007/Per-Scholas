import React from 'react';
import Answer from '../Answer/Answer';

function QuestionInfo({ question }) {
	return (
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
			<Answer answer={question.answer} />
		</div>
	);
}

export default QuestionInfo;
