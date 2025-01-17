import { useState } from 'react';
import style from './EditForm.module.css';

function EditForm({ workout, setWorkouts, onCancel }) {
  const [title, setTitle] = useState(workout.title);
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);
  const [error, setError] = useState(null);

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send PATCH request to update workout
      const response = await fetch(`http://localhost:4000/api/workouts/update/${workout._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, load: parseInt(load, 10), reps: parseInt(reps, 10) }),
      });

      const updatedWorkout = await response.json();

      if (response.ok) {
        console.log('Workout updated successfully', updatedWorkout);

        // Update the workouts list in the parent component
        setWorkouts((prevWorkouts) =>
          prevWorkouts.map((w) =>
            w._id === updatedWorkout._id ? updatedWorkout : w
          )
        );

        // Call the cancel function to close the edit form
        onCancel();
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

      {/* Cancel button to close the form */}
      <button
        type="button"
        className={style['cancel-icon-on-edit']}
        onClick={onCancel}
      >
        Cancel
      </button>

      {/* Save button to trigger the onSubmit */}
      <button type="submit" className={style['save-icon-on-edit']}>
        Save
      </button>

      {/* Display error if any */}
      {error && <div className={style['error']}>{error}</div>}
    </form>
  );
}

export default EditForm;
