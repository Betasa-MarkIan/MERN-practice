
import { useState, useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails.jsx'
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
        <div className={style['homepage-left-subsection']}>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
        </div>

        <div className={style['homepage-right-subsection']}>


        </div>
        
      </div>

      <div className={style['homepage-right-section']}>
        right page section
      </div>
      
    </div>
    </>
  )
}

export default Home