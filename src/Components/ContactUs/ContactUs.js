import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <div className="google-map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.979869308007!2d91.11172131471557!3d23.96115198448598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49adebfdd6392b98!2zMjPCsDU3JzQwLjIiTiA5McKwMDYnNTAuMSJF!5e0!3m2!1sen!2sin!4v1662704776224!5m2!1sen!2sin"
                    width="100% "
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="map"
                ></iframe>
            </div>
            <div className="map-divider"></div>
            <div className="contactUs-container">
                <div className="container">
                    <h1 className="contactUs-title">Contact Us</h1>
                    <div style={{ height: '2px', background: '#fff', margin: '15px 0px' }} />
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faPhone} className="icons" />
                        <h4>+880 1701-361836</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="icons" />
                        <h4>jahanara.group7@gmail.com</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="icons" />
                        <h4>H#1352, Adjacent of Poniout bypass Road Brahmanbaria</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
