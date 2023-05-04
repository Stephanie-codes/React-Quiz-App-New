import React from 'react';

const Result = ({ score, questions }) => {
  return (
    <div className='container'>
      <p>Your final score is: {score}/{questions.length}</p>
    </div>
  );
};

export default Result;
