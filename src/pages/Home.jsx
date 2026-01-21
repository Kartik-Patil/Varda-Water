import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  FaWater, 
  FaLeaf, 
  FaShieldAlt, 
  FaTruck,
  FaFlask,
  FaRecycle,
  FaHome,
  FaBuilding,
  FaHotel,
  FaCheckCircle,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import '../styles/pages.css';
import '../styles/home-animations.css';
import headerBg from '../assets/images/varda header background .png';
import pureWaterImg from '../assets/images/pure water image.png';
import mineralEnrichedImg from '../assets/images/mineral enriched image .png';
import hygienicImg from '../assets/images/hygine maintained image.png';
import trustedSupplyImg from '../assets/images/trusted supply image .png';
import adImage1 from '../assets/images/advertisement-images/ad1.png';
import adImage2 from '../assets/images/advertisement-images/ad2.png';
import adImage3 from '../assets/images/advertisement-images/ad3.png';
import adImage4 from '../assets/images/advertisement-images/ad4.png';
import product500ml from '../assets/images/product-images/varda 500ml.png';
import product1L from '../assets/images/product-images/varda 1L.png';
import product2L from '../assets/images/product-images/varda 2L.png';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <div className="animated-home">
      {/* Hero Section */}
      <motion.section 
        className="hero-section-animated"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content-animated">
          <motion.h1 
            variants={fadeInUp}
            className="hero-title"
          >
            VARDA – Purity in Every Drop
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="hero-subtitle-animated"
          >
            Premium bottled water crafted through advanced purification for your health and well-being
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="hero-buttons-animated"
          >
            <Link to="/products">
              <motion.button 
                className="cta-button-animated primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="button-text">Order Now</span>
                <span className="button-ripple"></span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>↓</span>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <FeaturesSection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Products Preview Section */}
      <ProductsPreviewSection />

      {/* Quality Process Section */}
      <QualityProcessSection />

      {/* Distribution Section */}
      <DistributionSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Contact CTA Section */}
      <ContactCTASection />
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      image: pureWaterImg,
      title: "Pure Water",
      description: "Multi-stage RO, UV, and ozone purification ensuring 99.9% purity in every sip"
    },
    {
      image: mineralEnrichedImg,
      title: "Mineral Enriched",
      description: "Balanced essential minerals for taste and health benefits you can feel"
    },
    {
      image: hygienicImg,
      title: "Hygienic Packaging",
      description: "Food-grade, BPA-free bottles sealed in automated facilities for safety"
    },
    {
      image: trustedSupplyImg,
      title: "Trusted Supply",
      description: "Reliable distribution network serving homes, offices, and businesses daily"
    }
  ];

  return (
    <section className="features-section-animated" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>What Sets Us Apart</h2>
        <p className="section-subtitle">Experience the VARDA difference</p>
      </motion.div>
      <motion.div 
        className="features-grid-animated"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card-animated"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(10, 79, 163, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="feature-image-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img 
                src={feature.image} 
                alt={feature.title}
                className="feature-image"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// About Preview Section
const AboutPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const adImages = [adImage1, adImage2, adImage3, adImage4];

  return (
    <section className="about-preview-section" ref={ref}>
      <div className="about-preview-container">
        <motion.div 
          className="about-preview-text"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>About VARDA</h2>
          <p className="about-tagline">Delivering Trust, One Bottle at a Time</p>
          <p className="about-description">
            VARDA is a trusted name in premium bottled drinking water, dedicated to delivering 
            uncompromising quality and purity. With state-of-the-art purification technology and 
            stringent quality control, we ensure every drop meets international standards.
          </p>
          <ul className="about-highlights">
            <li><FaCheckCircle /> ISO Certified Processes</li>
            <li><FaCheckCircle /> 150+ Parameter Testing</li>
            <li><FaCheckCircle /> BIS & WHO Compliant</li>
            <li><FaCheckCircle /> Eco-Conscious Operations</li>
          </ul>
          <Link to="/about">
            <motion.button 
              className="learn-more-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </Link>
        </motion.div>
        <motion.div 
          className="about-images-grid"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {adImages.map((image, index) => (
            <motion.div
              key={index}
              className="about-ad-image-wrapper"
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0 
              } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 20px 40px rgba(10, 79, 163, 0.3)"
              }}
            >
              <motion.img
                src={image}
                alt={`VARDA Advertisement ${index + 1}`}
                className="about-ad-image"
                whileHover={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Products Preview Section
const ProductsPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    { size: "500 ml", best: "Daily Use", price: "From ₹10", image: product500ml },
    { size: "1 Litre", best: "Family Size", price: "From ₹20", image: product1L },
    { size: "20 Litre", best: "Commercial", price: "From ₹30", image: product2L }
  ];

  return (
    <section className="products-preview-section" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <h2>Our Products</h2>
        <p className="section-subtitle">Premium water in sizes for every need</p>
      </motion.div>
      <motion.div 
        className="products-grid-animated"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="product-card-animated"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="product-image-container"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image} alt={product.size} className="product-image" />
            </motion.div>
            <h3>{product.size}</h3>
            <p className="product-best">Best for: {product.best}</p>
            <p className="product-price">{product.price}</p>
            <Link to="/contact">
              <motion.button 
                className="enquire-button"
                whileHover={{ scale: 1.05, backgroundColor: "#0052a3" }}
                whileTap={{ scale: 0.95 }}
              >
                Enquire Now
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="view-all-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <Link to="/products">
          <motion.button 
            className="view-all-button"
            whileHover={{ scale: 1.05 }}
          >
            View All Products →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

// Quality Process Section
const QualityProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Advanced Filtration",
      description: "Multi-stage RO purification removes 99.9% of contaminants"
    },
    {
      number: "02",
      title: "UV Sterilization",
      description: "Ultraviolet treatment eliminates microorganisms without chemicals"
    },
    {
      number: "03",
      title: "Ozone Treatment",
      description: "Final disinfection ensures long-lasting freshness naturally"
    }
  ];

  return (
    <section className="quality-process-section" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <h2>Our Quality Process</h2>
        <p className="section-subtitle">Science-backed purity in every bottle</p>
      </motion.div>
      <div className="process-flow">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="process-step-animated"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <motion.div 
              className="step-number-animated"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {step.number}
            </motion.div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="process-arrow">→</div>}
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="quality-cta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <Link to="/quality">
          <motion.button 
            className="learn-more-button"
            whileHover={{ scale: 1.05 }}
          >
            Learn More About Our Quality Standards
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

// Distribution Section
const DistributionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const distributionTypes = [
    { icon: <FaHome />, title: "Residential", description: "Home delivery with subscriptions" },
    { icon: <FaBuilding />, title: "Corporate", description: "Office & business solutions" },
    { icon: <FaHotel />, title: "Hospitality", description: "Hotels & restaurants supply" },
    { icon: <FaTruck />, title: "Distributors", description: "Partnership opportunities" }
  ];

  return (
    <section className="distribution-section-animated" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <h2>Distribution Network</h2>
        <p className="section-subtitle">Serving every sector with reliability</p>
      </motion.div>
      <motion.div 
        className="distribution-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {distributionTypes.map((type, index) => (
          <motion.div
            key={index}
            className="distribution-card-animated"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 102, 204, 0.5)"
            }}
          >
            <motion.div 
              className="distribution-icon"
              whileHover={{ scale: 1.2 }}
            >
              {type.icon}
            </motion.div>
            <h3>{type.title}</h3>
            <p>{type.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// Sustainability Section
const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      className="sustainability-section-animated"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="sustainability-content">
        <motion.div 
          className="sustainability-icon-large"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaRecycle />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Committed to Sustainability
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          100% recyclable packaging, 40% water wastage reduction, and carbon neutrality by 2030
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/sustainability">
            <motion.button 
              className="sustainability-button"
              whileHover={{ scale: 1.05 }}
            >
              Our Green Initiatives
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Contact CTA Section
const ContactCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section 
      className="contact-cta-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
    >
      <div className="contact-cta-content">
        <h2>Get in Touch</h2>
        <p>Have questions? Need bulk orders? We're here to help!</p>
        <div className="contact-buttons">
          <motion.a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <FaWhatsapp /> WhatsApp Us
          </motion.a>
          <Link to="/contact">
            <motion.button 
              className="contact-form-button"
              whileHover={{ scale: 1.05 }}
            >
              Contact Form
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
