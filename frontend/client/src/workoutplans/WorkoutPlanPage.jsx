import React from 'react'
import { useState, useEffect } from 'react';
import style from './WorkoutPlan.module.css';
import WorkoutPlanDetails from './WorkoutPlanDetails.jsx'
import WorkoutPlanForm from './WorkoutPlanForm.jsx'

const WorkoutPlanPage = ({ category }) => {

  const [workoutPlans, setWorkoutPlans] = useState(null)
  
    const fetchWorkoutPlans = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/workoutplans/${category}`);
        const json = await response.json();
  
        if (response.ok) {
          setWorkoutPlans(json);
        }
      } catch (error) {
        console.error('Error fetching workout plans:', error.message);
      }
    };
  
    useEffect(() => {
      fetchWorkoutPlans();
    }, [category]); // Only run when the component mounts


   return (
      <div className={style['plan-section']}>
        <div className={style['plan-left-section']}>
        {workoutPlans && workoutPlans.length > 0 ? (
          workoutPlans.map((workoutPlan) =>
            (
              <WorkoutPlanDetails
                key={workoutPlan._id}
                workoutPlan={workoutPlan}
                workoutPlans={workoutPlans}
                setWorkoutPlans={setWorkoutPlans} 
              />
            ))
        ) : (
          <p className={style['no-workout-mssg']}>No workouts added yet</p>
        )}
      </div>
  
      <div className={style['plan-right-section']}>
        <WorkoutPlanForm workoutPlans={workoutPlans} setWorkoutPlans={setWorkoutPlans} category={category} />
      </div>
    </div>
  );
}

export default WorkoutPlanPage;
