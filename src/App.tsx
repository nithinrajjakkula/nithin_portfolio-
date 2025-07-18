import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollProvider } from './contexts/ScrollContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <Achievements />
          <Contact />
          <ScrollToTop />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
