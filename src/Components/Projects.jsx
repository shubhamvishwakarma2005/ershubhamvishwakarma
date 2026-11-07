
import React from 'react';
import '../CSS/Projects.css';
import { motion } from 'motion/react';

import {
  FaShoppingCart,
  FaChartLine,
  FaHamburger,
  FaTasks,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

function Projects() {

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern online shopping website with product listings, cart and checkout functionality.',
      tech: ['ReactJS', 'Bootstrap', 'CSS'],
      icon: <FaShoppingCart />,
      image: '/projects/ecommerce.png',
      number: '01',
      category: 'Web Development',
      theme: 'project-blue'
    },
    {
      title: 'Admin Dashboard',
      description: 'An admin panel to manage users, records and important application data.',
      tech: ['ReactJS', 'PHP', 'MySQL'],
      icon: <FaChartLine />,
      image: '/projects/dashboard.png',
      number: '02',
      category: 'Dashboard',
      theme: 'project-purple'
    },
    {
      title: 'Quick Bite',
      description: 'A local food delivery application concept for ordering fast food anytime.',
      tech: ['ReactJS', 'PHP', 'MySQL'],
      icon: <FaHamburger />,
      image: '/projects/quickbite.png',
      number: '03',
      category: 'Food Delivery',
      theme: 'project-orange'
    },
    {
      title: 'Task Manager',
      description: 'A simple task management application to organize and track daily activities.',
      tech: ['ReactJS', 'CSS', 'JavaScript'],
      icon: <FaTasks />,
      image: '/projects/taskmanager.jpg',
      number: '04',
      category: 'Productivity',
      theme: 'project-green'
    }
  ];

  const headingAnimation = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.92
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="section-heading"
          variants={headingAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>MY RECENT WORK</span>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            Some of the projects I have worked on.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-6" key={project.number}>

              <motion.div
                className="project-card"
                custom={index}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >

                {/* Project Preview */}

                <div className={`project-preview ${project.theme}`}>

                  <motion.span
                    className="project-number"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.number}
                  </motion.span>

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  />

                  <motion.span
                    className="project-category"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.category}
                  </motion.span>

                </div>

                {/* Project Information */}

                <div className="project-info">

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="project-tech">

                    {project.tech.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ y: -3, scale: 1.08 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.span>
                    ))}

                  </div>

                  <div className="project-actions">

                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.08, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> GitHub
                    </motion.a>

                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.08, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project <FaExternalLinkAlt />
                    </motion.a>

                  </div>

                </div>

              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
