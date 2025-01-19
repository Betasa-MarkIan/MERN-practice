import React from 'react'
import style from './Exercise.module.css'
import ExerciseDetails from './ExerciseDetails.jsx'
import useFetchExercises from './useFetchExercises.jsx'

const ExercisePage = ({ title, subtitle, endpoint }) => {
  const { exercises, loading, error } = useFetchExercises(endpoint)

  return (
    <div className={style['exercises-layout']}>
      <div className={style['exercises-header']}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>

      <div className={style['exercises-box']}>
        {loading && <p>Loading exercises...</p>}
        {error && <p className={style['error-message']}>Error: {error}</p>}
        {exercises && exercises.length > 0 ? (
          exercises.map((exercise) => (
            <ExerciseDetails
              exercise={exercise}
            />
          ))
        ) : (
          !loading && <p className={style['no-workout-mssg']}>No exercise added yet</p>
        )}
      </div>
    </div>
  )
}

export default ExercisePage
