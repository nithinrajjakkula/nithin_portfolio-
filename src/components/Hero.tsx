import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="text-yellow-400 block sm:inline">Jakkula Nithin Raj</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            IT Enthusiast | Problem Solver | Developer
          </motion.p>
          
         <motion.div
  className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-center items-center gap-4"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <button
    onClick={() => scrollToSection('projects')}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    Explore My Work
  </button>

  <a
    href="https://flowcv.com/resume/frwm61f3fsmu"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    Download Resume
  </a>
</motion.div>

          
          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/jakkulanithinraj2003"
              className="p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/nithinrajjakkula"
              className="p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:nithinrajjakkula@gmail.com"
              className="p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default Hero;