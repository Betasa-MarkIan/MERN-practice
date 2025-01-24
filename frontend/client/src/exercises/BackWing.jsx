import React from 'react';
import ExercisePage from './ExercisePage';

const BackWing = () => {
  return (
    <ExercisePage
      title="Back & Wing"
      subtitle="Primary exercises"
      endpoint="api/exercises/back-wing"
    />
  );
};

export default BackWing;
