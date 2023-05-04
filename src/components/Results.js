import React from 'react';
import Quiz from './Quiz';

const Result = ({ score, questions }) => {
    const handleRestart = () => {
        window.location.reload();
    };

  return (
    <div className='container'>
      <p>Your score is: {score} out of {questions.length}</p>
      <button className='buttons' onClick={handleRestart}>Start over</button>
    </div>
  );
};

export default Result;