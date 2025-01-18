import React from 'react';
import ExercisePage from './ExercisePage';

const Chest = () => {
  return (
    <ExercisePage
      title="Chest"
      subtitle="Primary exercises"
      endpoint="http://localhost:4000/api/exercises/chest"
    />
  );
};

export default Chest;
