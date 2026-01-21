import React from 'react';
import Card from '../components/common/Card';
import '../styles/pages.css';

const Products = () => {
  const products = [
    {
      title: '500 ml',
      description: 'Our most popular size for everyday hydration',
      features: ['Easy-grip ergonomic design', 'Fits standard cup holders', 'Perfect portion control'],
      usage: 'Best for: Daily use, gym, office desk'
    },
    {
      title: '1 Litre',
      description: 'Family-size bottle for sharing and extended use',
      features: ['Value for money', 'Resealable cap', 'Longer hydration'],
      usage: 'Best for: Home, picnics, outdoor activities'
    },
    {
      title: '2 Litre',
      description: 'Premium large bottle for households and gatherings',
      features: ['Extended freshness', 'Economic choice', 'Sturdy handle grip'],
      usage: 'Best for: Families, parties, meal times'
    },
    {
      title: '20 Litre Can',
      description: 'Commercial-grade water for dispensers and bulk needs',
      features: ['BPA-free food-grade plastic', 'Tamper-proof seal', 'Compatible with standard dispensers'],
      usage: 'Best for: Offices, homes, businesses, institutions'
    }
  ];

  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Our Product Range</h1>
        <p className="page-subtitle">Premium Bottled Water for Every Need</p>
      </section>

      <section className="content-section">
        <p className="intro-text">
          VARDA offers a complete range of packaged drinking water to suit every requirement – 
          from personal hydration to commercial supply. Each bottle is filled with purified water 
          that meets the highest quality standards, sealed to preserve freshness and delivered 
          with care. Choose the size that fits your lifestyle.
        </p>
      </section>

      <section className="products-grid">
        {products.map((product, index) => (
          <Card key={index} className="product-card">
            <h3>{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <ul className="product-features">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p className="product-usage">{product.usage}</p>
          </Card>
        ))}
      </section>

      <section className="content-section bulk-order-note">
        <h2>Bulk Orders & Custom Requirements</h2>
        <p>
          Planning an event, managing a large office, or running a business? We offer special 
          pricing for bulk orders and customized delivery schedules. Contact our sales team for 
          corporate packages, subscription plans, and volume discounts tailored to your needs.
        </p>
        <button className="cta-button">Request Bulk Quote</button>
      </section>
    </div>
  );
};

export default Products;
