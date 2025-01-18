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
            <Link to="../exercises/Shoulder" className='#'>Shoulder</Link>
            <Link to="../exercises/Chest" className='#'>Chest</Link>
            <Link to="../exercises/BackWing" className='#'>Back/Wing</Link>
            <Link to="../exercises/Forearm" className='#'>Forearm</Link>
            <Link to="../exercises/AbsCore" className='#'>Abs/Core</Link>
            
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