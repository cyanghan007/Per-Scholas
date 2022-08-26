import React from 'react';
import QuestionInfo from './QuestionInfo';

function Question({ questions }) {
	return (
		<div className="Question">
			{questions &&
				questions.map((question) => (
					<QuestionInfo key={question.id} question={question} />
				))}
		</div>
	);
}

export default Question;
