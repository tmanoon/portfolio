import Header from './components/Header';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
