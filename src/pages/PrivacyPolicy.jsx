import React from 'react';
import '../styles/pages.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Privacy Policy</h1>
        <p className="page-subtitle">Last updated: January 7, 2026</p>
      </section>

      <section className="content-section legal-content">
        <h2>Introduction</h2>
        <p>
          VARDA ("we", "our", or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and 
          safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us 
          when you:
        </p>
        <ul>
          <li>Place an order</li>
          <li>Contact us for support</li>
          <li>Subscribe to our newsletter</li>
          <li>Participate in surveys or promotions</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about products and services</li>
          <li>Improve our website and customer service</li>
          <li>Send promotional materials (with your consent)</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal 
          information. However, no method of transmission over the Internet is 
          100% secure.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@vardawater.com
          <br />
          Phone: +1 (800) VARDA-H2O
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
