import React, { useState } from 'react';
import questions from './Question';
import Result from './Results';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerClick = (answerId) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerId);
      const isCorrectAnswer = answerId === currentQuestion.correctAnswer;
      if (currentQuestionIndex === questions.length - 1) {
        setScore((prevScore) => prevScore + (isCorrectAnswer ? 1 : 0));
      }
      setShowCorrectAnswer(!isCorrectAnswer);
    }
  };  

  const handleNextQuestion = () => {
    const isCorrectAnswer = selectedAnswer === currentQuestion.correctAnswer;
    setScore((prevScore) => prevScore + (isCorrectAnswer ? 1 : 0));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrectAnswer = selectedAnswer === currentQuestion.correctAnswer;

  if (showScore) {
    return <Result score={score} questions={questions} />;
  }

  return (
    <div className='container'>
      <div className='container-quiz' key={currentQuestion.index}>
        <p className='questionNum'>Question {currentQuestionIndex + 1}/{questions.length}:</p>
        <p className='question'>{currentQuestion.text}</p>
        {currentQuestion.answers.map((answer) => {
          const isAnswerSelected = selectedAnswer === answer.id;
          const isCorrect = answer.id === currentQuestion.correctAnswer;
          return (
            <button
              key={answer.id}
              onClick={() => handleAnswerClick(answer.id)}
              className={`answerButton ${isAnswerSelected ? (isCorrect ? 'correctAnswerButton' 
              : 'wrongAnswerButton') : ''} ${showCorrectAnswer && isCorrect ? 'correctAnswerButton' : ''}`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      <div>
        {currentQuestionIndex > 0}
        {currentQuestionIndex < questions.length - 1 ? (
          <button className='buttons' onClick={handleNextQuestion}>Next</button>
        ) : (
          <button className='buttons' onClick={() => setShowScore(true)}>Show result!</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
