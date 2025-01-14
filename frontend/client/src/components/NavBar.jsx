import style from './NavBar.module.css'

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
      <div className={style['home-subheading']}>Home</div>
      <div className={style['exercise-subheading']}>Exercise list</div>
      <div className={style['workout-plans-subheading']}>Workout plans</div>
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