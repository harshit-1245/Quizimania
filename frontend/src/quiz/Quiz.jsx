// Quiz.js
import React, { useState } from 'react';



import Result from '../Result/Result';
import Question from '../Questions/Question';


const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    setAnswers([...answers, { answer, isCorrect }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result answers={answers} />
      )}
    </div>
  );
};

export default Quiz;
