
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<About/>} />

        
      </Routes>
      </Router>
    </div>
  )
}

export default App
