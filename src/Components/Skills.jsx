
import React from 'react';
import '../CSS/Skills.css';
import { motion } from 'motion/react';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaLaravel
} from 'react-icons/fa';

import { SiMysql } from 'react-icons/si';

function Skills() {

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#f97316' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#38bdf8' },
    { name: 'JavaScript', icon: <FaJs />, color: '#facc15' },
    { name: 'ReactJS', icon: <FaReact />, color: '#38bdf8' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#a855f7' },
    { name: 'PHP', icon: <FaPhp />, color: '#a5b4fc' },
    { name: 'MySQL', icon: <SiMysql />, color: '#38bdf8' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#ef4444' }
  ];

  const headingAnimation = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.85
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="section-heading"
          variants={headingAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>MY EXPERTISE</span>

          <h2>
            My <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I work with.
          </p>
        </motion.div>

        {/* Skills Cards */}

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={skill.name}
            >

              <motion.div
                className="skill-card"
                custom={index}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -9,
                  scale: 1.04,
                  transition: { duration: 0.25 }
                }}
              >

                {/* Skill Icon */}

                <motion.div
                  className="skill-icon"
                  style={{ color: skill.color }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}

                <h4>{skill.name}</h4>

                <p>Professional Skill</p>

                {/* Animated Skill Line */}

                <div className="skill-line">
                  <motion.span
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + index * 0.1,
                      ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                  />
                </div>

              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
