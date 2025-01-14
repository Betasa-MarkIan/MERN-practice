import { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './index.css'
import Home from './pages/Home.jsx'
import Header from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Footer />
        <Routes>

          <Route path="/" element={<Home />}/>
          

        </Routes>
      </BrowserRouter>

    </div>
    
   
  )
}

export default App
