
import style from './WorkoutDetails.module.css'
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import EditForm from './EditForm.jsx'
import { useState } from 'react';

function WorkoutDetails({ workout, workouts, setWorkouts}) {

  const [isEditing, setisEditing] = useState(false)

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


  //const saveEdit = async(updatedWorkouts) => {
//  const saveEdit = async (updatedData) => {
//   const { title, load, reps } = updatedData;  // Destructure the object here

//   try {
//     const response = await fetch(`http://localhost:4000/api/workouts/update/${workout._id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title, load, reps }), // Pass data in the same structured format
//     });

//     if (response.ok) {
//       const updatedWorkout = await response.json();
//       console.log('Workout updated successfully', updatedWorkout);

//       // Update the workouts state with the updated workout
//       const updatedWorkouts = workouts.map((w) =>
//         w._id === updatedWorkout._id ? updatedWorkout : w
//       );
//       setWorkouts(updatedWorkouts);
//       setisEditing(false); // Close the edit form
//     }
//   } catch (error) {
//     console.log('Failed to update the workout', { error: error.message });
//   }
// };

  const cancelEdit = () => {
    setIsEditing(false); 
  };
   
  return (
    <div className={style['workout-container']}>
      <>
        <div className={style['workout-details']}>
          <h4>{workout.title}</h4>
          <p><strong>Load {"(kg)"}:</strong>{workout.load}</p>
          <p><strong>Reps {"(kg)"}:</strong>{workout.reps}</p>
          <p>{formattedDate}</p>
        </div>
        <div className={style['function-icons']}>
          <MdOutlineModeEdit
            className={style['edit-icon']}
            onClick={
              <EditForm
                workout={workout}
                setWorkouts={setWorkouts}
                onSave={saveEdit}
                onCancel={cancelEdit}
              />
            }
          />
          <MdDelete
            className={style['delete-icon']}
            onClick={() => handleDelete(workout._id)}
          />
        </div>
      </>
    </div>
  );
}

export default WorkoutDetails;