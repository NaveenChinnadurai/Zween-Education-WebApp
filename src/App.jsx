import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import AOS from 'aos';
import 'animate.css'
import 'aos/dist/aos.css';
import Home from './pages/home'
import About from './pages/about';
import { Routes, Route } from 'react-router-dom';
import Courses from './pages/courses';
import ContactPage from './pages/contact';
import { useEffect } from 'react';
import Aos from 'aos';
import RegisterPage from './pages/registerPage';
function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='col app-div'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
