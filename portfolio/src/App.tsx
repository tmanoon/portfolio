import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header  from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';

import './style/main.css'
import Socials from './components/Socials';

function App() {

  return (
    <Router>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </main>    
    <Socials />
    <Footer />
  </Router>
  )
}

export default App
