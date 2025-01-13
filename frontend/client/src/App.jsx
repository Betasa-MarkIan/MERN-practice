import { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import './index.css'
import Home from './pages/Home.jsx'

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />}/>

    </Routes>

  )
}

export default App
