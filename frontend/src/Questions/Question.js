// Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = () => {
    if (selectedAnswer !== '') {
      setIsAnswered(true);
      onAnswer(selectedAnswer);
    }
  };

  return (
    <div>
      <h3>{question.text}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
                disabled={isAnswered}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {isAnswered ? (
        <p>{question.correctAnswer === selectedAnswer ? 'Correct!' : 'Incorrect.'}</p>
      ) : null}
      <button onClick={handleAnswerClick} disabled={isAnswered}>
        {isAnswered ? 'Next' : 'Submit Answer'}
      </button>
    </div>
  );
};

export default Question;
