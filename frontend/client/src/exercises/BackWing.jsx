import React from 'react';
import ExercisePage from './ExercisePage';

const BackWing = () => {
  return (
    <ExercisePage
      title="Back & Wing"
      subtitle="Primary exercises"
      endpoint="http://localhost:4000/api/exercises/back-wing"
    />
  );
};

export default BackWing;
