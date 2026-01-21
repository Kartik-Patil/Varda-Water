import React from 'react';
import '../styles/pages.css';

const Quality = () => {
  return (
    <div className="page-container">
      <section className="page-header">
        <h1>Water Quality & Purification</h1>
        <p className="page-subtitle">
          Science-Backed Purity Through Advanced Technology
        </p>
      </section>

      <section className="content-section">
        <h2>Our Multi-Stage Purification Process</h2>
        <p>
          Every drop of VARDA water passes through a comprehensive purification system designed 
          to remove contaminants while preserving essential minerals. Our state-of-the-art facility 
          combines proven technologies with continuous quality monitoring.
        </p>

        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Source Selection</h3>
            <p>Water sourced from protected, tested groundwater or municipal supplies, pre-screened for quality</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Pre-Filtration & Sediment Removal</h3>
            <p>Multi-layer filters remove sand, silt, rust, and suspended particles larger than 5 microns</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Activated Carbon Treatment</h3>
            <p>Eliminates chlorine, odors, organic compounds, and improves taste through adsorption</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Reverse Osmosis (RO) Purification</h3>
            <p>
              Our advanced RO system forces water through semi-permeable membranes, removing dissolved 
              solids, heavy metals, bacteria, viruses, and 99.9% of contaminants down to 0.0001 microns. 
              This ensures crystal-clear purity while maintaining optimal mineral balance.
            </p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>UV Sterilization</h3>
            <p>
              Ultraviolet light treatment at 254 nm wavelength destroys DNA of bacteria, viruses, and 
              microorganisms, providing chemical-free disinfection without altering taste or adding 
              by-products. This critical step ensures microbiological safety.
            </p>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <h3>Ozonation Treatment</h3>
            <p>
              Ozone (O₃) gas is infused to provide final-stage disinfection and preservation. This 
              powerful oxidant eliminates remaining microorganisms, enhances water freshness, and extends 
              shelf life naturally without chemical preservatives. Ozone naturally reverts to oxygen, 
              leaving no residue.
            </p>
          </div>
          <div className="step">
            <div className="step-number">7</div>
            <h3>Mineral Balancing</h3>
            <p>Essential minerals are carefully adjusted to optimal levels for health and taste</p>
          </div>
          <div className="step">
            <div className="step-number">8</div>
            <h3>Quality Testing & Bottling</h3>
            <p>Laboratory analysis for 150+ parameters before automated, touchless bottling in sterile conditions</p>
          </div>
        </div>

        <h2>Quality Testing & Hygiene Standards</h2>
        <p>
          Our in-house laboratory conducts comprehensive testing on every production batch, analyzing 
          physical properties (pH, TDS, turbidity), chemical composition (heavy metals, fluoride, 
          nitrates), and microbiological safety (total coliform, E.coli, bacterial count). We adhere 
          to BIS 10500 standards and WHO guidelines.
        </p>
        <p>
          Our bottling facility maintains Class 100 cleanroom standards with HEPA filtration, UV-sterilized 
          surfaces, and automated no-touch filling systems. All bottles undergo triple washing with RO water 
          and UV sterilization before filling. Regular third-party audits ensure compliance and continuous 
          improvement.
        </p>

        <h2>Certifications & Compliance</h2>
        <p>
          VARDA is certified by Bureau of Indian Standards (BIS), holds ISO 22000:2018 Food Safety 
          Management certification, and complies with FSSAI regulations. Our processes are regularly 
          audited by regulatory bodies to ensure unwavering quality standards.
        </p>
      </section>
    </div>
  );
};

export default Quality;
