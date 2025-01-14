import style from './Footer.module.css'

function Footer() {
  return(
    <>
      <div className={style['footer-box']}>
        <div>
         This is the footer
        </div>

        <div className={style['footer-copyright']}>
          <p>
          Workout Planner &copy; January 2025 - All Rights Reserved 
          </p>
        </div>
       
      </div>
    </>

  )
  
}

export default Footer