
import React, { useState } from 'react';
import '../CSS/Header.css';

import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring
} from 'motion/react';

import {
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon
} from 'react-icons/fa';

import { useTheme } from '../Context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  // Scroll Progress
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: smoothProgress }}
      />

      <motion.nav
        className="portfolio-navbar"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container">

          <div className="navbar-inner">

            {/* Logo */}
            <motion.a
              className="portfolio-logo"
              href="#home"
              onClick={closeMenu}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                SV
              </motion.span>

              <div>
                <h4>Shubham</h4>
                <small>Vishwakarma</small>
              </div>
            </motion.a>

            {/* Mobile Button */}
            <motion.button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex' }}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Navigation Menu */}
            <div
              className={`portfolio-menu ${menuOpen ? 'show' : ''}`}
            >

              <ul className="navbar-nav-custom">

                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4
                    }}
                  >
                    <a
                      className={`nav-link ${index === 0 ? 'active' : ''}`}
                      href={link.href}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                {/* Let's Talk Button */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  <motion.a
                    className="talk-btn"
                    href="#contact"
                    onClick={closeMenu}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk
                  </motion.a>
                </motion.li>

                {/* Dark / Light Mode Toggle */}
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    type="button"
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.85 }}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={theme}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.25 }}
                        style={{ display: 'flex' }}
                      >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </motion.li>

              </ul>

              {/* Social Links */}
              <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >

                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedinIn />
                </motion.a>

              </motion.div>

            </div>

          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Header;
