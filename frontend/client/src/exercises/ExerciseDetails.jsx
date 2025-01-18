import AddExerciseForm from './AddExerciseForm.jsx'
import style from '../exercises/Exercise.module.css'
import { IoIosAdd } from "react-icons/io";
import { useState } from 'react';

function ExerciseDetails ({ exercise }) {
  const [showForm, setShowForm] = useState(false)

  const handleOnClick = () => {
    setShowForm(true)
  }

  return (
    <div className={style['exercise-details']}>
      <div className={style['exercise-text']}>
        {showForm ? (
          <AddExerciseForm exercise={exercise} />
        ) : (
          <>
            <h4>{exercise.title}</h4>
            <p>
              <strong>Equipment: </strong> {exercise.equipment}
            </p>
            <p>
              <strong>Description: </strong> {exercise.description}
            </p>
          </>
        )}
      </div>
  
      <div className={style['exercise-function']}>
        <div
          className={style['exercise-add-button']}
          onClick={handleOnClick}
        >
          <button>Add</button>
          <IoIosAdd />
        </div>
      </div>
    </div>
  );
}  
 export default ExerciseDetails