import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './styles/main.css';
import './styles/Responsive.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollArrow from './components/ScrollArrow';
import NameLoading from './components/NameLoading';
import { useState } from 'react';
import Footer from './components/Footer';


const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 3100);

    Aos.init({
      duration: 1000,

    })

  }, [])


  return (
    <>
      {
        loading ?
          <NameLoading />
          :
          <>
            <Navbar />
            <main id='main' >
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <ScrollArrow />
          </>
      }


    </>
  )
}

export default App