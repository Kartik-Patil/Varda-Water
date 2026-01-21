import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDroplet } from 'react-icons/fa6';
import whiteLogo from '../../assets/images/white-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.div 
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={whiteLogo} alt="VARDA Pure Water" className="logo-image" />
          </motion.div>
        </Link>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <motion.li className="navbar-item" whileHover={{ y: -2 }}>
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </motion.li>
          <motion.li className="navbar-item" whileHover={{ y: -2 }}>
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </motion.li>
          <motion.li className="navbar-item" whileHover={{ y: -2 }}>
            <Link to="/products" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
          </motion.li>
          <motion.li className="navbar-item" whileHover={{ y: -2 }}>
            <Link to="/quality" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Quality
            </Link>
          </motion.li>
          <motion.li className="navbar-item" whileHover={{ y: -2 }}>
            <Link to="/distribution" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Distribution
            </Link>
          </motion.li>
          <motion.li className="navbar-item" whileHover={{ y: -2 }}>
            <Link to="/sustainability" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Sustainability
            </Link>
          </motion.li>
          <motion.li className="navbar-item">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="navbar-link navbar-link-cta" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </motion.div>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
