import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp, FaPhoneAlt, FaComments, FaTimes } from "react-icons/fa";
import "../CSS/WhatsAppCall.css";

const WhatsAppCall = () => {
    const phoneNumber = "918506017646";
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="floating-contact-container" aria-label="Quick Contact Actions">
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    <motion.div
                        key="expanded-actions"
                        className="floating-contact-buttons"
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 15 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* WhatsApp Button */}
                        <motion.a
                            href={`https://wa.me/${phoneNumber}?text=Hello%20Shubham,%20I%20saw%20your%20portfolio!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="floating-btn whatsapp-btn"
                            aria-label="Chat on WhatsApp"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <FaWhatsapp />
                            <span className="floating-tooltip">WhatsApp</span>
                        </motion.a>

                        {/* Call Button */}
                        <motion.a
                            href={`tel:+${phoneNumber}`}
                            className="floating-btn call-btn"
                            aria-label="Call Shubham Vishwakarma"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <FaPhoneAlt />
                            <span className="floating-tooltip">Call Now</span>
                        </motion.a>

                        {/* Collapse Toggle */}
                        <motion.button
                            type="button"
                            className="floating-toggle-btn"
                            onClick={() => setIsExpanded(false)}
                            aria-label="Minimize contact buttons"
                            title="Minimize"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85 }}
                        >
                            <FaTimes />
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.button
                        key="collapsed-trigger"
                        type="button"
                        className="floating-btn trigger-btn"
                        onClick={() => setIsExpanded(true)}
                        aria-label="Open contact options"
                        title="Contact Shubham"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                    >
                        <FaComments />
                        <span className="trigger-pulse"></span>
                        <span className="floating-tooltip">Get in touch</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WhatsAppCall;
