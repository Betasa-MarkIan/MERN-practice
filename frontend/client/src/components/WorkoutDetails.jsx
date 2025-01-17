
import style from './WorkoutDetails.module.css'
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";

function WorkoutDetails({ workout, workouts, setWorkouts}) {

  const formattedDate = new Date(workout.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/workouts/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(response.ok) {
        console.log('Workout deleted successfully')
        setWorkouts(workouts.filter(workout => workout._id !== id));

      }
    }
    catch(error) {
      console.log('Failed to delete the workout', {error: error.message})
    }
    
   
  }

  return(
     <div className={style['workout-container']}>
      <div className={style['workout-details']}>
        <h4>{workout.title}</h4>
        <p><strong>Load {"(kg)"}:</strong>{workout.load}</p>
        <p><strong>Reps {"(kg)"}:</strong>{workout.reps}</p>
        <p>{formattedDate}</p>
      </div>
      <div className={style['function-icons']}>
        <MdOutlineModeEdit 
        className={style['edit-icon']} 
        />

        <MdDelete 
        className={style['delete-icon']} 
        onClick={() => handleDelete(workout._id)}
        />

      </div>
      

     </div>

  )
}

export default WorkoutDetails