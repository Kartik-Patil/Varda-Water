import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      ref={footerRef}
      className="footer"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <h3 className="footer-logo">VARDA</h3>
          <p className="footer-tagline">Purity in Every Drop</p>
          <p className="footer-description">
            Premium bottled drinking water crafted through advanced purification. 
            Trusted by thousands for quality, taste, and reliability.
          </p>
        </motion.div>

        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/quality">Water Quality</Link></li>
            <li><Link to="/distribution">Distribution</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h4>Connect With Us</h4>
          <div className="social-links">
            <motion.a 
              href="#" 
              className="social-link" 
              aria-label="Facebook"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-link" 
              aria-label="Twitter"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-link" 
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-link" 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
          <div className="contact-info">
            <p><FaPhone /> +91 7353550555</p>
            <p><FaEnvelope /> buyasaqua@gmail.com</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        variants={fadeInUp}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; {currentYear} VARDA Beverages Pvt. Ltd. All rights reserved. | Committed to Quality, Safety, and Sustainability</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
