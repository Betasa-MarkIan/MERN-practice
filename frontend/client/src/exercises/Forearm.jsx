import React from 'react';
import ExercisePage from './ExercisePage';

const Forearm = () => {
  return (
    <ExercisePage
      title="Forearm"
      subtitle="Primary exercises"
      endpoint="api/exercises/forearm"
    />
  );
};

export default Forearm;
