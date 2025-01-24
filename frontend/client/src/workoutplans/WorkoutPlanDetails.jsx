import style from '../components/WorkoutDetails.module.css'
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import EditFormPlan from './EditFormPlan.jsx'
import { useState } from 'react';

function WorkoutPlanDetails({ workoutPlan, workoutPlans, setWorkoutPlans }) {


  const [isEditing, setIsEditing] = useState(false)

  const formattedDate = new Date(workoutPlan.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  const handleDelete = async (id) => {
      const response = await fetch(`api/workoutplans/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(!response.ok) {
        console.log('Failed to delete workout')
      }
      if(response.ok) {
        console.log('Workout deleted successfully')
        setWorkoutPlans(workoutPlans.filter(workoutPlan => workoutPlan._id !== id));
      }
  }
  return (
    <div className={style['workout-container']}>
      {isEditing ? (
        // create edit form later -- created
        <EditFormPlan
          workoutPlan={workoutPlan}
          setWorkoutPlans={setWorkoutPlans}
          onCancel={() => setIsEditing(false)} 
        />
      ) : (

        <>
      
          <div className={style['workout-details']}>
            <h4>{workoutPlan.title}</h4>
            <p>
              <strong>Load {"(kg)"}:</strong> {workoutPlan.load}
            </p>
            <p>
              <strong>Reps {"(kg)"}:</strong> {workoutPlan.reps}
            </p>
            <p>{formattedDate}</p>
          </div>
          <div className={style['function-icons']}>
            <MdOutlineModeEdit
              className={style['edit-icon']}
              onClick={() => setIsEditing(true)} 
            />
            <MdDelete
              className={style['delete-icon']}
              onClick={() => handleDelete(workoutPlan._id)}
            />
         
          </div>
        </>
      )}
    </div>
  )
}
export default WorkoutPlanDetails