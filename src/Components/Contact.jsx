
import React, { useState } from 'react';
import '../CSS/Contact.css';
import { motion } from 'motion/react';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35
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

function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mail = 'shubhamvishwakarma8506@gmail.com';

    const body = `
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
    `;

    window.location.href =
      `mailto:${mail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants}>
            GET IN TOUCH
          </motion.span>

          <motion.h2 variants={itemVariants}>
            Contact <span>Me</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            Have a project in mind? Let's work together.
          </motion.p>
        </motion.div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
            >

              <motion.h3 variants={itemVariants}>
                Let's Talk
              </motion.h3>

              <p>
                I'm always open to discussing new projects,
                creative ideas and opportunities.
              </p>

              <motion.div
                className="contact-detail"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FaEnvelope />
                <div>
                  <h6>Email Address</h6>
                  <p>shubhamvishwakarma8506@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <FaPhoneAlt />
                <div>
                  <h6>Phone Number</h6>
                  <p>+91 8506017646</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <FaMapMarkerAlt />
                <div>
                  <h6>Location</h6>
                  <p>Lucknow, Uttar Pradesh, India</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-social"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.a
                  href="https://github.com/shubhamvishwakarma2005"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6, scale: 1.12, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6, scale: 1.12, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </motion.div>

            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
            >

              <h3>Send Me a Message</h3>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <motion.div
                    className="col-md-6 mb-3"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="col-md-6 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                  >
                    <label>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="col-12 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                  >
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="col-12 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                  >
                    <label>Your Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </motion.div>

                  <motion.div
                    className="col-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      className="contact-submit"
                      whileHover={{
                        scale: 1.04,
                        y: -4
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message <FaPaperPlane />
                    </motion.button>
                  </motion.div>

                </div>

              </form>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
