
import React from "react";
import "../CSS/WhatsAppCall.css";

const WhatsAppCall = () => {
    const phoneNumber = "918506017646";

    return (
        <div className="floating-contact-buttons">

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn whatsapp-btn"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l5.9-1.5A11.8 11.8 0 0 0 20.5 3.5ZM12 21a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.2 9.2 0 1 1 12 21Zm5.1-6.9c-.3-.2-1.7-.9-2-.9s-.5-.2-.7.2-.8.9-1 1.1-.4.2-.7.1a7.5 7.5 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.3.3-.5s0-.4 0-.5-.7-1.6-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/>
                </svg>
            </a>

            {/* Call Button */}
            <a
                href={`tel:+${phoneNumber}`}
                className="floating-btn call-btn"
                aria-label="Call"
                title="Call Now"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.2.6 3.4.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10 21 3 14 3 4.2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.3.6 3.4a1 1 0 0 1-.2 1l-2.3 2.2Z"/>
                </svg>
            </a>

        </div>
    );
};

export default WhatsAppCall;
