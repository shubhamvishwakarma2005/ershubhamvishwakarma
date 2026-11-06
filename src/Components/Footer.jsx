
import React from 'react';
import '../CSS/Footer.css';
import { motion } from 'motion/react';

import {
  FaGithub,
  FaLinkedinIn,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

const footerAnimation = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

function Footer() {

  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row g-4">

          {/* Brand */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.div
              className="footer-brand"
              whileHover={{ x: 5 }}
            >

              <motion.div
                className="footer-logo"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                SV
              </motion.div>

              <div>
                <h3>Shubham</h3>
                <span>Vishwakarma</span>
              </div>

            </motion.div>

            <p className="footer-description">
              I'm a passionate Full Stack Developer
              who loves building modern, responsive
              and user-friendly web applications.
            </p>

            <motion.div
              className="footer-social"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >

              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -6, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -6, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn />
              </motion.a>

            </motion.div>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
          >

            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">

              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5
                  }}
                >
                  <a href={link.href}>
                    {link.name}
                  </a>
                </motion.li>
              ))}

            </ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            className="col-lg-4 col-md-6"
            variants={footerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
          >

            <h4 className="footer-title">Let's Connect</h4>

            <p className="footer-connect">
              Have an interesting project or opportunity?
              Feel free to get in touch.
            </p>

            <motion.a
              href="#contact"
              className="footer-contact-btn"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me →
            </motion.a>

          </motion.div>

        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p>
            © 2026 <strong>Shubham Vishwakarma</strong>.
            Made with{' '}
            <motion.span
              className="heart-icon"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{ display: 'inline-block' }}
            >
              <FaHeart />
            </motion.span>
            {' '}All Rights Reserved.
          </p>

          <motion.a
            href="#home"
            className="back-to-top"
            whileHover={{ y: -7, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.a>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;
