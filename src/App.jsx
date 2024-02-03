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
import { useEffect, useState } from 'react';
import Aos from 'aos';
import BounceLoader from "react-spinners/BounceLoader";
function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [10000])
  return (
    <div className='col app-div'>
      {
        loading ?
          <BounceLoader color="rgba(54, 215, 183, 1)" />
          :
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>
      }

    </div>
  )
}

export default App
