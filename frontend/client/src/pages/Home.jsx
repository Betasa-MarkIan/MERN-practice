import { useState, useEffect } from 'react';
import WorkoutDetails from '../components/WorkoutDetails.jsx';
import WorkoutForm from '../components/WorkoutForm.jsx';
import style from './Home.module.css';

function Home() {
  const [workouts, setWorkouts] = useState(null);

  // Fetch workouts when the component mounts
  const fetchWorkouts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/workouts/');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    } catch (error) {
      console.error('Error fetching workouts:', error.message);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []); // Only run when the component mounts

  return (
    <div className={style['homepage']}>
      {/* Left Section: List of Workouts */}
      <div className={style['homepage-left-section']}>
        {workouts && workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              workouts={workouts}
              setWorkouts={setWorkouts} // Pass the setter for direct updates
            />
          ))
        ) : (
          <p className={style['no-workout-mssg']}>No workouts added yet</p>
        )}
      </div>

      {/* Right Section: Add New Workout Form */}
      <div className={style['homepage-right-section']}>
        <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} />
      </div>
    </div>
  );
}

export default Home;
