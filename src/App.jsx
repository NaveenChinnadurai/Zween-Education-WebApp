import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'

import AOS from 'aos';
import 'animate.css'
import 'aos/dist/aos.css';
import Home from './pages/home'
import About from './pages/about';
import { Routes,Route } from 'react-router-dom';
import Courses from './pages/courses';
import ContactPage from './pages/contact';
import { useEffect } from 'react';
import Aos from 'aos';
function App() {
  useEffect(()=>{
    Aos.init()
    AOS.init()
  },[])
  return (
    <div className='app-div'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
