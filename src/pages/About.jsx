import React from 'react';
import '../styles/pages.css';

const About = () => {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>About VARDA</h1>
        <p className="page-subtitle">Delivering Trust, One Bottle at a Time</p>
      </section>

      <section className="content-section">
        <h2>Who We Are</h2>
        <p>
          VARDA is a trusted name in premium bottled drinking water, dedicated to delivering 
          uncompromising quality and purity. With state-of-the-art purification technology and 
          stringent quality control, we ensure every drop meets international standards. Our 
          commitment extends beyond water – we're building healthier communities through clean, 
          safe, and accessible hydration.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be the most trusted and preferred bottled water brand, recognized for purity, 
          quality, and sustainable practices that safeguard health and protect our planet.
        </p>

        <h2>Our Mission</h2>
        <p>
          To provide safe, pure, and mineral-enriched drinking water through advanced purification 
          technology and hygienic processes. We aim to make quality hydration accessible to every 
          household, office, and institution while maintaining environmental responsibility and 
          supporting local communities.
        </p>

        <h2>Why Choose VARDA</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>🔬 Scientific Excellence</h3>
            <p>Advanced RO+UV+Ozone purification backed by rigorous laboratory testing</p>
          </div>
          <div className="value-item">
            <h3>🏆 Quality Assurance</h3>
            <p>ISO certified processes and compliance with BIS and WHO standards</p>
          </div>
          <div className="value-item">
            <h3>🌱 Eco-Conscious</h3>
            <p>Sustainable practices from source to delivery, minimizing environmental impact</p>
          </div>
          <div className="value-item">
            <h3>🤝 Customer First</h3>
            <p>Reliable delivery, responsive service, and transparent operations</p>
          </div>
        </div>

        <h2>Quality Assurance Commitment</h2>
        <p className="highlight-text">
          Every batch of VARDA water undergoes comprehensive testing for over 150 parameters 
          including microbiological safety, chemical composition, and mineral balance. Our 
          automated bottling facility operates in controlled, hygienic conditions, ensuring 
          contamination-free packaging. From source to seal, we guarantee purity you can trust.
        </p>
      </section>
    </div>
  );
};

export default About;
