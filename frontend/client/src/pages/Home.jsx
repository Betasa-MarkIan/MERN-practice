
import { useState, useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails.jsx'
import WorkoutForm from '../components/WorkoutForm.jsx'
import style from './Home.module.css'

function Home() {

  const [ workouts, setWorkouts ] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts/')
      const json = await response.json()

      if(response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  return(
    <>
    <div className={style['homepage']}>
      <div className={style['homepage-left-section']}>

      {workouts && workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails 
            key={workout._id} 
            workout={workout}
            workouts={workouts}
            setWorkouts={setWorkouts}
             />
          ))
        ) : (
          <p className={style['no-workout-mssg']}>No workouts added yet</p>
        )}
      </div>

      <div className={style['homepage-right-section']}>
        <WorkoutForm 
         workouts={workouts}
         setWorkouts={setWorkouts}
        />
      
      </div>
      
    </div>
    </>
  )
}

export default Home