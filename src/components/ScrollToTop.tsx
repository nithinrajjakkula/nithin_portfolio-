import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-[99] p-3 rounded-full bg-indigo-600 text-white dark:bg-yellow-400 dark:text-black shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </motion.button>
    )
  );
};

export default ScrollToTop;
