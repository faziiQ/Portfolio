import './App.css'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        <NavBar />
      <div className="pt-10"> {/* Increased padding to ensure content doesn't hide under navbar */}
        <div id="Home"><Home /></div>
        <div id="About"><About /></div>
        <div id="Projects"><Portfolio /></div>
        <div id="Experience"><Experience /></div>
        <div id="Contact"><Contact /></div>
        <Footer />
      </div>
      <Toaster/>
      </div>
    </>
  )
}

export default App
