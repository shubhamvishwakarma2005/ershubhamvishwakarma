import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import '../CSS/Loader.css';

function Loader({ onComplete }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="page-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="loader-content">

        {/* SV Logo */}
        <motion.div
          className="loader-logo"
          initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 150
          }}
        >
          SV
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Shubham <span>Vishwakarma</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Loading Bar */}
        <div className="loader-track">
          <motion.div
            className="loader-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </div>

        <motion.small
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Loading Portfolio...
        </motion.small>

      </div>

    </motion.div>
  );
}

export default Loader;