import { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import './index.css'
import Home from './pages/Home.jsx'
import Header from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import WorkoutPlans from './pages/WorkoutPlans.jsx'
import Shoulder from './exercises/Shoulder.jsx'

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
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          

        </Routes>
      </BrowserRouter>

    </div>
    
   
  )
}

export default App
