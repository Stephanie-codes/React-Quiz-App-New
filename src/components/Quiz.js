import React, { useState } from 'react';
import questions from './Question';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleNextQuestion = () => {
    const isCorrectAnswer = selectedAnswer === currentQuestion.correctAnswer;
    setScore((prevScore) => prevScore + (isCorrectAnswer ? 1 : 0));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='container'>
      <div className='container-quiz' key={currentQuestion.index}>
        <p>Question {currentQuestionIndex + 1}: {currentQuestion.text}</p>
        {currentQuestion.answers.map((answer) => (
        <button key={answer.id} onClick={() => handleAnswerClick(answer.id)} 
        className={`answerButton ${selectedAnswer === answer.id ? 'selectedAnswerButton' : ''}`}>
        {answer.text}
        </button>
        ))}
        <p>Correct: {currentQuestion.correctAnswer}</p>
      </div>
      <div>
        {currentQuestionIndex > 0}
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <button onClick={() => setShowScore(true)}>Submit</button>
        )}
        </div>
        {showScore && (
          <p>Your final score is: {score}</p>
        )}
    </div>
  );
};

export default Quiz;
