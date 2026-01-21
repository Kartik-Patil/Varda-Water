import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const Distribution = () => {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Distribution & Business Solutions</h1>
        <p className="page-subtitle">Reliable Supply for Every Sector</p>
      </section>

      <section className="content-section">
        <h2>Who We Serve</h2>
        <p>
          VARDA's extensive distribution network ensures consistent, timely delivery of premium 
          bottled water to diverse customers across the region. Our logistics team specializes 
          in flexible scheduling and volume management to meet your exact requirements.
        </p>

        <div className="business-options">
          <div className="business-card">
            <h3>🏠 Residential Supply</h3>
            <p>
              Direct home delivery of 20L cans and bottled water with subscription plans, flexible 
              schedules, and doorstep service for families seeking pure, safe drinking water.
            </p>
          </div>
          <div className="business-card">
            <h3>🏢 Corporate & Offices</h3>
            <p>
              Customized solutions for offices of all sizes – from small businesses to large corporate 
              campuses. Includes dispenser installation, regular supply, and dedicated account management.
            </p>
          </div>
          <div className="business-card">
            <h3>🏨 Hotels & Restaurants</h3>
            <p>
              Bulk supply for hospitality industry with branded/unbranded options, predictable pricing, 
              and reliable inventory management to ensure your guests never run out.
            </p>
          </div>
          <div className="business-card">
            <h3>🎉 Events & Catering</h3>
            <p>
              Large volume orders for weddings, conferences, festivals, and special events with short-notice 
              availability and on-site delivery coordination.
            </p>
          </div>
          <div className="business-card">
            <h3>🏫 Institutions & Schools</h3>
            <p>
              Safe, hygienic water supply for educational institutions, hospitals, gyms, and community 
              centers with affordable pricing and compliance documentation.
            </p>
          </div>
          <div className="business-card">
            <h3>🏪 Retail Partnerships</h3>
            <p>
              Stock VARDA in your store with competitive wholesale rates, marketing support, and assured 
              inventory replenishment to maximize shelf turnover.
            </p>
          </div>
        </div>

        <h2>Become a VARDA Distributor</h2>
        <p>
          Join our growing network of successful distributors and build a profitable business with 
          India's trusted water brand. We offer comprehensive support to help you succeed.
        </p>

        <div className="benefits-section">
          <h3>Distributor Benefits:</h3>
          <ul>
            <li>✓ <strong>Exclusive Territory Rights</strong> – Protected geographic zones for reduced competition</li>
            <li>✓ <strong>Attractive Margins</strong> – Competitive pricing structure with volume incentives</li>
            <li>✓ <strong>Brand Recognition</strong> – Leverage VARDA's trusted name and growing market presence</li>
            <li>✓ <strong>Marketing Support</strong> – Point-of-sale materials, digital assets, and promotional campaigns</li>
            <li>✓ <strong>Training & Guidance</strong> – Operational training, sales techniques, and business development support</li>
            <li>✓ <strong>Low Investment</strong> – Minimal initial capital with flexible payment terms</li>
            <li>✓ <strong>Quality Assurance</strong> – Consistent product quality backed by certifications</li>
            <li>✓ <strong>Logistics Support</strong> – Efficient supply chain and timely delivery infrastructure</li>
          </ul>
        </div>

        <h2>Start Your Dealership Journey</h2>
        <p>
          Whether you're an entrepreneur looking for a new opportunity or an existing business seeking 
          to expand your product line, VARDA offers a proven model with strong growth potential. 
          Limited territories available.
        </p>
        <Link to="/contact">
          <button className="cta-button">Apply for Distributorship</button>
        </Link>
      </section>
    </div>
  );
};

export default Distribution;
