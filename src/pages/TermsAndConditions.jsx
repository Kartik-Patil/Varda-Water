import React from 'react';
import '../styles/pages.css';

const TermsAndConditions = () => {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Terms and Conditions</h1>
        <p className="page-subtitle">Last updated: January 7, 2026</p>
      </section>

      <section className="content-section legal-content">
        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using VARDA's website and services, you agree to be 
          bound by these Terms and Conditions. If you disagree with any part 
          of these terms, you may not access our services.
        </p>

        <h2>Products and Services</h2>
        <h3>Product Availability</h3>
        <p>
          All products are subject to availability. We reserve the right to 
          discontinue any product at any time without notice.
        </p>

        <h3>Pricing</h3>
        <p>
          Prices are subject to change without notice. The price charged will 
          be the price displayed at the time of order placement.
        </p>

        <h2>Orders and Payment</h2>
        <ul>
          <li>All orders are subject to acceptance and availability</li>
          <li>We reserve the right to refuse or cancel any order</li>
          <li>Payment must be made in full at the time of purchase</li>
          <li>Accepted payment methods are displayed at checkout</li>
        </ul>

        <h2>Delivery</h2>
        <p>
          Delivery times are estimates and not guaranteed. VARDA is not 
          responsible for delays caused by circumstances beyond our control.
        </p>

        <h2>Returns and Refunds</h2>
        <p>
          Damaged or defective products may be returned within 7 days of 
          delivery. Please contact our customer service for return authorization.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          VARDA shall not be liable for any indirect, incidental, special, 
          consequential, or punitive damages resulting from your use of our 
          products or services.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and 
          images, is the property of VARDA and protected by copyright laws.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance 
          with applicable laws.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about these Terms and Conditions, contact us at:
          <br />
          Email: legal@vardawater.com
          <br />
          Phone: +1 (800) VARDA-H2O
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
