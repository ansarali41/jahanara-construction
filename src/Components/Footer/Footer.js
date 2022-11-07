import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeadShake from 'react-reveal/HeadShake';
import './Footer.css';

const Footer = () => {
    return (
        <div className="contactUs-container">
            <div className="row p-5 w-100">
                <div className="col-md-8">
                    <div className="container">
                        <h1 className="contactUs-title">Contact Us</h1>
                        <div style={{ height: '2px', background: '#fff', margin: '15px 0px', marginRight: 62 }} />
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faPhone} className="icons" />
                            <HeadShake>
                                <h5 className="footer-items">+8801710208508</h5>
                            </HeadShake>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="icons" />
                            <HeadShake>
                                <a href="mailto:info@jahanaragroupbd.com" className="footer-items a-link-style">
                                    info@jahanaragroupbd.com
                                </a>
                            </HeadShake>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="icons" />
                            <HeadShake>
                                <h5 className="footer-items">H#1352, Adjacent of Poniout bypass Road Brahmanbaria</h5>
                            </HeadShake>
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faFacebook} className="icons" />
                            <HeadShake>
                                <a className="footer-items a-link-style" href="https://www.facebook.com/jahanaragroup24" target="_blank" rel="noreferrer">
                                    Facebook Page
                                </a>
                            </HeadShake>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-10 container pt-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.979869308007!2d91.11172131471557!3d23.96115198448598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49adebfdd6392b98!2zMjPCsDU3JzQwLjIiTiA5McKwMDYnNTAuMSJF!5e0!3m2!1sen!2sin!4v1662704776224!5m2!1sen!2sin"
                        width="100% "
                        height="200"
                        style={{ border: 10 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </div>
            </div>
            <div className="d-flex justify-content-center copy-right-text pt-2">
                <p className="bottom-text">
                    <small>All Rights Reserved ©{new Date().getFullYear()} M/S JAHANARA CONSTRUCTION & SUPPLIER</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;
