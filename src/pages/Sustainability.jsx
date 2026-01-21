import React from 'react';
import '../styles/pages.css';

const Sustainability = () => {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Sustainability & Environmental Care</h1>
        <p className="page-subtitle">
          Protecting Water, Protecting Our Planet
        </p>
      </section>

      <section className="content-section">
        <h2>Our Environmental Responsibility</h2>
        <p>
          At VARDA, we recognize that delivering pure water today must not compromise the 
          environment of tomorrow. Sustainability is embedded in every stage of our operations – 
          from responsible sourcing to eco-conscious packaging and waste management. We are 
          committed to minimizing our ecological footprint while maximizing positive impact.
        </p>

        <h2>Eco-Friendly Practices</h2>
        <div className="initiatives-grid">
          <div className="initiative-item">
            <h3>♻️ 100% Recyclable Packaging</h3>
            <p>
              All VARDA bottles are made from 100% recyclable PET plastic (Grade 1) that can be 
              repurposed into new products. We encourage customers to return empty bottles through 
              our collection program, reducing landfill waste.
            </p>
          </div>
          <div className="initiative-item">
            <h3>🌊 Water Conservation</h3>
            <p>
              Our RO plant recycles and treats reject water for non-potable use such as cleaning 
              and landscaping. We've reduced water wastage by 40% through efficiency improvements, 
              ensuring every drop is valued.
            </p>
          </div>
          <div className="initiative-item">
            <h3>⚡ Energy Efficiency</h3>
            <p>
              Solar panels power 30% of our facility's energy needs. Energy-efficient motors, LED 
              lighting, and optimized machinery reduce our carbon footprint significantly.
            </p>
          </div>
          <div className="initiative-item">
            <h3>🚚 Green Logistics</h3>
            <p>
              Optimized delivery routes minimize fuel consumption and emissions. Our fleet includes 
              fuel-efficient vehicles, and we're exploring electric vehicle adoption for last-mile delivery.
            </p>
          </div>
          <div className="initiative-item">
            <h3>🌳 Plastic Reduction Initiatives</h3>
            <p>
              We're actively researching biodegradable alternatives and lightweighting our bottles 
              to use less plastic per unit. Our 20L cans are reusable, significantly reducing 
              single-use plastic consumption.
            </p>
          </div>
          <div className="initiative-item">
            <h3>🌍 Community Impact</h3>
            <p>
              We support local clean water initiatives, conduct awareness programs on plastic waste 
              management, and collaborate with NGOs for environmental education in schools.
            </p>
          </div>
        </div>

        <h2>Recycling & Circular Economy</h2>
        <p>
          VARDA actively promotes a circular economy model. We partner with recycling organizations 
          to ensure collected plastic is processed responsibly. Our bottle-return program incentivizes 
          customers to participate in waste reduction, creating a closed-loop system that benefits 
          both business and environment.
        </p>

        <h2>Our Commitment to the Future</h2>
        <p>
          We're continuously investing in research and innovation to make our operations more 
          sustainable. Our goals include achieving carbon neutrality by 2030, transitioning to 
          50% renewable energy, and further reducing plastic usage through alternative materials. 
          Sustainability isn't just a policy at VARDA – it's our promise to future generations.
        </p>

        <p className="highlight-text">
          <strong>Choose VARDA. Choose Sustainability.</strong><br />
          Every bottle you buy supports our environmental initiatives and contributes to a cleaner, 
          greener planet.
        </p>
      </section>
    </div>
  );
};

export default Sustainability;
