import NavBar from './Components/NavBar'
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
      <NavBar />
      <div className="pt-10">
        <div id="Home"><Home /></div>
        <div id="About"><About /></div>
        <div id="Projects"><Portfolio /></div>
        <div id="Experience"><Experience /></div>
        <div id="Contact"><Contact /></div>
      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
