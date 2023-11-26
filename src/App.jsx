import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import 'animate.css';
import Home from './pages/home'
import About from './pages/about';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className='app-div'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
