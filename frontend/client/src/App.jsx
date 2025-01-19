import { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import './index.css'
import Home from './pages/Home.jsx'
import Header from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import WorkoutPlans from './pages/WorkoutPlans.jsx'
import Shoulder from './exercises/Shoulder.jsx'
import Chest from './exercises/Chest.jsx'
import BackWing from './exercises/BackWing.jsx'
import AbsCore from './exercises/AbsCore.jsx'
import Forearm from './exercises/Forearm.jsx'
import Monday from './workoutplans/Monday.jsx'
import Tuesday from './workoutplans/Tuesday.jsx'
import Wednesday from './workoutplans/Wednesday.jsx'
import Thursday from './workoutplans/Thursday.jsx'
import Friday from './workoutplans/Friday.jsx'
import Saturday from './workoutplans/Saturday.jsx'
import Sunday from './workoutplans/Sunday.jsx'





function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Footer />
        <Routes>

          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exercises/Shoulder" element={<Shoulder />}/>
          <Route path="/exercises/Chest" element={<Chest />}/>
          <Route path="/exercises/BackWing" element={<BackWing />}/>
          <Route path="/exercises/Forearm" element={<Forearm />}/>
          <Route path="/exercises/AbsCore" element={<AbsCore />}/>
          <Route path="/workoutplans" element={<WorkoutPlans />} />
          <Route path="/workoutplans/Monday" element={<Monday />} />
          <Route path="/workoutplans/Tuesday" element={<Tuesday />} />
          <Route path="/workoutplans/Wednesday" element={<Wednesday />} />
          <Route path="/workoutplans/Thursday" element={<Thursday />} />
          <Route path="/workoutplans/Friday" element={<Friday />} />
          <Route path="/workoutplans/Saturday" element={<Saturday />} />
          <Route path="/workoutplans/Sunday" element={<Sunday />} />
      
        </Routes>
      </BrowserRouter>

    </div>
    
   
  )
}

export default App
