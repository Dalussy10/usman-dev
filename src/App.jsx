import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ScheduleCall from './component/Schedule';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Admin from './Admin';

function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        
        <Route path="/schedule" element={<ScheduleCall />} />
        <Route path="/admin" element={<Admin/> } />
      </Routes >
      <Footer />
    </BrowserRouter>
  );
}

export default App
