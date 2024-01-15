import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './quiz/Quiz';


export const questions = [
  {
    text: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Hyper Transfer Markup Language', 'High-Level Text Markup Language', 'Home Tool Markup Language'],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    text: 'Which of the following is a CSS preprocessor?',
    options: ['Sass', 'LESS', 'Stylus', 'All of the above'],
    correctAnswer: 'All of the above',
  },
  {
    text: 'What is the purpose of JavaScript?',
    options: ['To style web pages', 'To create dynamic content', 'To define web page structure', 'To perform database queries'],
    correctAnswer: 'To create dynamic content',
  },
  // Add more questions related to frontend development
];


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Quiz questions={questions}/>} />
      
    </Routes>
  </Router>
  );
}

export default App;
