import style from './WorkoutPlans.module.css'
import { Link } from 'react-router-dom'

function WorkoutPlans() {

  return (
    <div className={style['exercises-layout']}>
    <div className={style['exercises-header']}>
      <h4>Workout Plans</h4>
      <p>Here are your lists!</p>
    </div>

    <div className={style['exercises-box']}>
      
      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Monday' className={style['centered-link']}>
          <h4>MONDAY</h4> 
          <p>It's not easy, but it's worth it! Make this Monday your best yet!</p>
        </Link>
      </div>

      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Tuesday' className={style['centered-link']}>
          <h4>TUESDAY</h4> 
          <p>We're just getting started!</p>
        </Link>
      </div>

      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Wednesday' className={style['centered-link']}>
          <h4>WEDNESDAY</h4> 
          <p>Sweat wednesday here we go!</p>
        </Link>
      </div>

      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Thursday' className={style['centered-link']}>
          <h4>THURSDAY</h4> 
          <p>Challenges are what makes life interesting!</p>
        </Link>
      </div>

      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Friday' className={style['centered-link']}>
          <h4>FRIDAY</h4> 
          <p>It ain't over 'till it's over!</p>
        </Link>
      </div>

      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Saturday' className={style['centered-link']}>
          <h4>SATURDAY</h4> 
          <p>Almost there hang'on buddy!</p>
        </Link>
      </div>

      <div className={style['exercise-details']}>
        <Link to='../workoutplans/Sunday' className={style['centered-link']}>
          <h4>SUNDAY</h4> 
          <p>Sunday rest day, Yey!</p>
        </Link>
      </div>

    </div>
  </div>
);
}

export default WorkoutPlans