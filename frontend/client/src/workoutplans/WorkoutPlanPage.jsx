import React from 'react'
import { useState, useEffect } from 'react';
import style from './WorkoutPlan.module.css';
import WorkoutPlanDetails from './WorkoutPlanDetails.jsx'
import WorkoutPlanForm from './WorkoutPlanForm.jsx'

const WorkoutPlanPage = ({ category }) => {

  const [workoutPlans, setWorkoutPlans] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  
    const fetchWorkoutPlans = async () => {
      try {
        const response = await fetch(`api/workoutplans/${category}`);
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

    const handleConfirmation = () => {
      if(workoutPlans.length === 0 ) {
        setError('No workout exist')

        setTimeout(() =>{
          setError(null)
        }, 2000)
      } else {
        setShowPrompt(true)
      }
    }
    const handleCancel = () => {
      setShowPrompt(false)
    }
    const handleConfirm = async (category) => {
      setShowPrompt(true)

      const response = await fetch(`api/workoutplans/delete/category/${category}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(!response.ok) {
        console.log('Failed to delete workout plan')
      }
      if(response.ok) {
        console.log('Workout plan deleted successfully')
        setWorkoutPlans(workoutPlans.filter(workoutPlan => workoutPlan.category !== category));
        setShowPrompt(false)
        setMessage('All workouts successfully deleted')
        setTimeout(() => {
          setMessage('')
        }, 2000)
      }
    }
    return (
      <div className={style['plan-section']}> 
        <div className={style['plan-left-section']}>
          {workoutPlans && workoutPlans.length > 0 ? (
            workoutPlans.map((workoutPlan) => (
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
          <button className={style['delete-all-option']} onClick={handleConfirmation}>Delete all</button>
        </div>

        {showPrompt && (
          <div className={style['confirmation-prompt']}>
            <div>
              <p>Do you want to clear all workouts in the {category.toUpperCase()} workout plan? </p>
            </div>
            <div>
              <button className={style['cancel-delete-all']} onClick={handleCancel}>Cancel</button>
              <button className={style['procees-delete-all']} onClick={() => handleConfirm(category)}>Proceed</button>
            </div>
          </div> 
        )}
        {error && <p className={style['error-prompt']}>{error}</p>}
        {message && <p className={style['message-prompt']}>{message}</p>}
      </div>
    );
    
}

export default WorkoutPlanPage
