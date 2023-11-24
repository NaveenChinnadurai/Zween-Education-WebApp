
import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'

function App() {

  return (
    <div className='app-div'>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
