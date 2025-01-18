import React from 'react';
import ExercisePage from './ExercisePage';

const AbsCore = () => {
  return (
    <ExercisePage
      title="Abs & Core"
      subtitle="Primary exercises"
      endpoint="http://localhost:4000/api/exercises/abs-core"
    />
  );
};

export default AbsCore;
