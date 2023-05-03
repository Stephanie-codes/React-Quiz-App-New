import React, { useState } from 'react';
import questions from './Question';

const Quiz = () => {

  return (
    <div>
      {questions.map(id => (
        <div key={id.index}>
          <p>Q: {id.text}</p>
          {id.answers.map((answers) => (
            <p key={answers.id}>{answers.text}</p>
          ))}
          <p>Correct: {id.correctAnswer}</p>
        </div>
      ))}
    </div>
  );
};

export default Quiz;