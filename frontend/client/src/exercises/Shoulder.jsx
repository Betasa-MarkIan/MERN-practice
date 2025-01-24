import React from 'react';
import ExercisePage from './ExercisePage';

const Shoulder = () => {
  return (
    <ExercisePage
      title="Shoulder"
      subtitle="Primary exercises"
      endpoint="api/exercises/shoulder"
    />
  );
};

export default Shoulder;
