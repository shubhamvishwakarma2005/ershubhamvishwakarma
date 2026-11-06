
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaArrowUp } from 'react-icons/fa';
import '../CSS/BackToTop.css';

function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"

          initial={{ opacity: 0, scale: 0, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 30 }}

          transition={{
            duration: 0.3,
            type: 'spring',
            stiffness: 200
          }}

          whileHover={{
            scale: 1.12,
            y: -5
          }}

          whileTap={{
            scale: 0.9
          }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
