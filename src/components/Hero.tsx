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
      {/* Animated Background with gradient mesh */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Hi, I'm</span>
            <span className="text-yellow-400 block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient">
              Jakkula Nithin Raj
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-light px-4 text-white/90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block">IT Enthusiast</span>
            <span className="mx-3 text-yellow-400">•</span>
            <span className="inline-block">Problem Solver</span>
            <span className="mx-3 text-yellow-400">•</span>
            <span className="inline-block">Developer</span>
          </motion.p>
          
         <motion.div
  className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-center items-center gap-4"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <motion.button
    onClick={() => scrollToSection('projects')}
    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">Explore My Work</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={false}
    />
  </motion.button>

  <motion.a
    href="https://flowcv.com/resume/frwm61f3fsmu"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-btn text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">Download Resume</span>
  </motion.a>
</motion.div>

          
          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/jakkulanithinraj2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-btn rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/nithinrajjakkula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-btn rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.a>
            <motion.a
              href="mailto:nithinrajjakkula@gmail.com"
              className="p-3 sm:p-4 glass-btn rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.a>
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