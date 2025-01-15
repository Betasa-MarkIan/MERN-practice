import style from './NavBar.module.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <>
    <div className={style['header-box']}>
      {/* for title */}
      <div className={style['title-section']}>
        <h1 className={style['title01']}>Workout</h1>
        <h1 className={style['title02']}>planner</h1>
      </div>

      {/* for subsections in the header */}
      <div className={style['sub-headings-section']}>

        <div className={style['home-subheading']}><Link to="/home">Home
        </Link></div>

        <div className={style['exercise-subheading']}>
          <p className={style['drop-text']}>Exercise List</p>
          <div className={style['dropdown-content']}>
            <Link to="#" className='#'>Neck</Link>
            <Link to="#" className='#'>Shoulder</Link>
            <Link to="#" className='#'>Chest</Link>
            <Link to="#" className='#'>Back/Wing</Link>
            <Link to="#" className='#'>Biceps</Link>
            <Link to="#" className='#'>Triceps</Link>
            <Link to="#" className='#'>Forearm</Link>
            <Link to="#" className='#'>Abs/Core</Link>
            <Link to="#" className='#'>Leg</Link>
            <Link to="#" className='#'>Calf</Link>
            <Link to="#" className='#'>Hips</Link>
            <Link to="#" className='#'>Cardio</Link>
            <Link to="#" className='#'>Full body</Link>
            
          </div>
         
        </div>



        <div className={style['workout-plans-subheading']}><Link to="/workout-plans">Workout plans
        </Link></div>
      </div>

      {/* for the account icon */}
      <div className={style['account-section']}>
        account
      </div>
    
    </div>
    </>
    
  )
} 

export default Header