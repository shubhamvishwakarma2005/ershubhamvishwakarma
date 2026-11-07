
import React from 'react';
import { motion } from 'motion/react';
import '../CSS/About.css';

import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBullseye
} from 'react-icons/fa';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
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

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.span variants={fadeUp}>
            GET TO KNOW ME
          </motion.span>

          <motion.h2 variants={fadeUp}>
            About <span>Me</span>
          </motion.h2>

          <motion.p variants={fadeUp}>
            Discover more about my journey and passion.
          </motion.p>
        </motion.div>

        <div className="row align-items-center">

          {/* Left Side */}
          <motion.div
            className="col-lg-5 mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <div className="about-image-box">

              <motion.div
                className="about-profile"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >

              <motion.img
                src="/WhatsApp Image 2026-06-25 at 2.36.57 PM copy.jpeg"
                alt="Shubham Vishwakarma"
                className="about-profile-photo"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="about-experience"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <FaCode />
                <div>
                  <h4>Developer</h4>
                  <p>Creative Thinker</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="col-lg-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 }
              }
            }}
          >
            <div className="about-content">

              <motion.h3 variants={fadeUp}>
                I'm Shubham Vishwakarma
              </motion.h3>

              <motion.h5 variants={fadeUp}>
                Full Stack Developer
              </motion.h5>

              <motion.p variants={fadeUp}>
                I am a passionate and dedicated developer
                interested in creating modern, responsive
                and user-friendly web applications.

                I enjoy working with different technologies,
                learning new skills and solving real-world
                problems through coding.
              </motion.p>

              {/* About Details */}
              <motion.div
                className="about-details"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >

                <motion.div
                  className="about-detail-item"
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                >
                  <FaGraduationCap />
                  <div>
                    <h6>Education</h6>
                    <p>Bachelor of Computer Applications (BCA)</p>
                  </div>
                </motion.div>

                <motion.div
                  className="about-detail-item"
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                >
                  <FaLaptopCode />
                  <div>
                    <h6>Technical Skills</h6>
                    <p>HTML, CSS, JavaScript, ReactJS, PHP</p>
                  </div>
                </motion.div>

                <motion.div
                  className="about-detail-item"
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                >
                  <FaBullseye />
                  <div>
                    <h6>Career Objective</h6>
                    <p>
                      To become a skilled software developer
                      and build innovative applications.
                    </p>
                  </div>
                </motion.div>

              </motion.div>

              {/* Connect Button */}
              <motion.a
                href="#contact"
                className="about-btn"
                variants={fadeUp}
                whileHover={{
                  scale: 1.06,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect →
              </motion.a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
