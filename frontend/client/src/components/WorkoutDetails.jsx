
import style from './WorkoutDetails.module.css'
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import EditForm from './EditForm.jsx'
import { useState } from 'react';

function WorkoutDetails({ workout, workouts, setWorkouts}) {

  const [isEditing, setIsEditing] = useState(false)

  const formattedDate = new Date(workout.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  const handleDelete = async (id) => {
      const response = await fetch(`api/workouts/delete/${id}`, {
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
        setWorkouts(workouts.filter(workout => workout._id !== id));
      }
  }
  return (
    <div className={style['workout-container']}>
      {isEditing ? (
        <EditForm
          workout={workout}
          setWorkouts={setWorkouts}
          onCancel={() => setIsEditing(false)} 
        />
      ) : (

        <>
      
          <div className={style['workout-details']}>
            <h4>{workout.title}</h4>
            <p>
              <strong>Load {"(kg)"}:</strong> {workout.load}
            </p>
            <p>
              <strong>Reps {"(kg)"}:</strong> {workout.reps}
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
                onClick={() => handleDelete(workout._id)}
              />
         
          </div>
        </>
      )}
    </div>
  )
}

export default WorkoutDetails;