 import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
      <h1>Hello, world!</h1>
      <p>If you see this, React is rendering properly.</p>
    </div>
      <div>
        <Navbar />
      <div className="pt-10"> {/* Increased padding to ensure content doesn't hide under navbar */}
        <div id="Home"><Home /></div>
        <div id="About"><About /></div>
        <div id="Projects"><Portfolio /></div>
        <div id="Experience"><Experience /></div>
        <div id="Contact"><Contact /></div>
        <Footer />
      </div>
      <Toaster  position="top-center" />
      </div>
    </>
  )
}

export default App
