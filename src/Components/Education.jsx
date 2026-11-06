
import React from 'react';
import '../CSS/Education.css';
import { motion } from 'motion/react';

import {
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen
} from 'react-icons/fa';

const sectionHeading = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

const cardAnimation = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction,
    y: 25
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
});

const tagAnimation = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
};

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '2px' }}
            whileInView={{ opacity: 1, letterSpacing: '4px' }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            MY JOURNEY
          </motion.span>

          <h2>
            Education & <span>Experience</span>
          </h2>

          <p>
            My academic background and professional training.
          </p>
        </motion.div>

        <div className="row g-5">

          {/* Education */}
          <div className="col-lg-6">

            <motion.div
              className="timeline-heading"
              variants={sectionHeading}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaGraduationCap />
              <h3>My Education</h3>
            </motion.div>

            <div className="timeline">

              <motion.div
                className="timeline-item"
                variants={cardAnimation(-70)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.span
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="timeline-card"
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="timeline-date">
                    <FaCalendarAlt /> Currently Completed
                  </span>

                  <h4>Bachelor of Computer Applications</h4>
                  <h5>BCA Passout</h5>

                  <p>
                    Studying computer applications,
                    programming and software development.
                  </p>

                  <span className="timeline-place">
                    <FaBookOpen /> College / University
                    (To be updated)
                  </span>
                </motion.div>
              </motion.div>

            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-6">

            <motion.div
              className="timeline-heading"
              variants={sectionHeading}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <FaBriefcase />
              <h3>My Experience</h3>
            </motion.div>

            <div className="timeline">

              <motion.div
                className="timeline-item"
                variants={cardAnimation(70)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.span
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="timeline-card"
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="timeline-date">
                    <FaCalendarAlt /> 15 June 2026 – Present
                  </span>

                  <h4>Full Stack Developer Intern</h4>
                  <h5>DigiCoders</h5>

                  <p>
                    Currently undergoing internship training
                    and gaining practical experience in
                    frontend, backend and database development.
                  </p>

                  <span className="timeline-place">
                    <FaMapMarkerAlt /> Lucknow, Uttar Pradesh
                  </span>

                  <div className="experience-tags">
                    {[
                      'HTML',
                      'CSS',
                      'JavaScript',
                      'ReactJS',
                      'PHP',
                      'MySQL',
                      'Laravel'
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={tagAnimation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: index * 0.08 }}
                        whileHover={{
                          scale: 1.12,
                          y: -3
                        }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;