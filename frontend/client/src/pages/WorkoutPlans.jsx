import style from './WorkoutPlans.module.css'

function WorkoutPlans() {

  return (
    <div className={style['exercises-layout']}>
    <div className={style['exercises-header']}>
      <h4>Workout Plans</h4>
      <p>Here are your lists!</p>
    </div>

    <div className={style['exercises-box']}>
      <div className={style['exercise-details']}>
        <h4>My Workout</h4>
        <p>Your self picked workouts</p>
      </div>
      
    </div>
  </div>
);
}

export default WorkoutPlans