
import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import BackToTop from './Components/BackToTop';
import WhatsAppCall from "./Components/WhatsAppCall";

import { ThemeProvider } from './Context/ThemeContext';

function App() {

  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">

        {loading ? (

          <Loader
            key="page-loader"
            onComplete={handleLoadingComplete}
          />

        ) : (

          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
            <BackToTop />
            <WhatsAppCall />
          </motion.div>

        )}

      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
