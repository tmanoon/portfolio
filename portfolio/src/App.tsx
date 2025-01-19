import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './style/main.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main >
      <Socials />
      <Footer />
    </>
  )
}

export default App
