// Result.js
import React from 'react';

const Result = ({ answers }) => {
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const totalQuestions = answers.length;

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>You answered {correctAnswers} out of {totalQuestions} questions correctly.</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            {answer.isCorrect ? 'Correct' : 'Incorrect'}: {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
