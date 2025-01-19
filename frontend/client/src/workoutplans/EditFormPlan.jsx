import { useState } from 'react';
import style from '../components/EditForm.module.css';

function EditFormPlan({ workoutPlan, setWorkoutPlans, onCancel }) {
  const [title, setTitle] = useState(workoutPlan.title);
  const [load, setLoad] = useState(workoutPlan.load);
  const [reps, setReps] = useState(workoutPlan.reps);
  const [error, setError] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch(`http://localhost:4000/api/workoutplans/update/${workoutPlan._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, load: parseInt(load, 10), reps: parseInt(reps, 10) }),
      });

      const updatedWorkout = await response.json();

      if (response.ok) {
        console.log('Workout updated successfully', updatedWorkout);

        setWorkoutPlans((prevworkoutPlans) =>
          prevworkoutPlans.map((wPlan) =>
            wPlan._id === updatedWorkout._id ? updatedWorkout : wPlan
          )
        );
        location.reload()
        console.log('updated workout list', updatedWorkout)
        onCancel()

      } else {
        setError(updatedWorkout.error || 'Failed to update the workout');
      }
    } catch (error) {
      console.error('Error updating workout:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form className={style['workout-form']} onSubmit={handleSave}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        placeholder="Load (kg)"
        required
      />
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="Reps"
        required
      />

      <button
        type="button"
        className={style['cancel-icon-on-edit']}
        onClick={onCancel}
      >
        Cancel
      </button>

      <button type="submit" className={style['save-icon-on-edit']}>
        Save
      </button>

      {error && <div className={style['error']}>{error}</div>}
    </form>
  );
}

export default EditFormPlan;
