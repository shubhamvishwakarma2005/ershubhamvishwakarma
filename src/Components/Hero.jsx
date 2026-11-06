import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import '../CSS/Hero.css';

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload
} from 'react-icons/fa';

function Hero() {

  const titles = [
  "Full Stack Developer",
  "Laravel Developer",
  "PHP Developer",
  "Frontend Developer"
];

const [displayText, setDisplayText] = useState("");
const [titleIndex, setTitleIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentTitle = titles[titleIndex];

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && displayText === currentTitle) {
    speed = 1500;
  }

  if (isDeleting && displayText === "") {
    setIsDeleting(false);
    setTitleIndex((prev) => (prev + 1) % titles.length);
    return;
  }

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setDisplayText(
        currentTitle.substring(0, displayText.length + 1)
      );

      if (displayText.length + 1 === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      setDisplayText(
        currentTitle.substring(0, displayText.length - 1)
      );
    }
  }, speed);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, titleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <motion.div
            className="col-lg-7 hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 }
              }
            }}
          >

            <motion.span
              className="hero-tag"
              variants={fadeUp}
            >
              Welcome To My Portfolio
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Hello, I'm <br />
              <span>Shubham Vishwakarma</span>
            </motion.h1>

            <motion.h3 variants={fadeUp}>
              I'm a <span className="typing-text">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </motion.h3>

            <motion.p variants={fadeUp}>
              I am a passionate Full Stack Developer
              who loves building modern, responsive
              and user-friendly web applications.
              I enjoy learning new technologies and
              creating innovative digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="hero-buttons"
              variants={fadeUp}
            >
              <motion.a
                href="#projects"
                className="btn-project"
                whileHover={{ y: -6, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View My Projects <FaArrowRight />
              </motion.a>

              <motion.a
                href="/Shubham_Resume.pdf"
                download="Shubham_Vishwakarma_Resume.pdf"
                className="btn-resume"
                whileHover={{ y: -6, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Download Resume <FaDownload />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-social"
              variants={fadeUp}
            >
              <span>Follow Me:</span>

              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.2, rotate: 8 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.2, rotate: -8 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Profile */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: 100, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <div className="hero-image-area">

              <motion.div
                className="hero-image-circle"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >

              <motion.img
                src="/images/profile.jpg"
                alt="Shubham Vishwakarma"
                className="hero-profile-photo"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />

              </motion.div>

              <motion.div
                className="floating-card"
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>👨‍💻</span>
                <div>
                  <strong>Developer</strong>
                  <small>Creative & Passionate</small>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default Hero;