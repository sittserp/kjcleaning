import React from 'react';
import '../styles/CleaningService.css';

function CleaningService() {
  const services = [
    { size: 'Small', price: 250 },
    { size: 'Medium', price: 350 },
    { size: 'Large', price: 450 }
  ];

  return (
    <div className="cleaning-service">
      <h1>House Cleaning Services</h1>
      <div>
        <img src="/hma-logo.jpg" alt="HMA Logo" />
        <div className="pricing">
          <h2>Choose Your Service</h2>
          <div className="pricing-tiers">
            {services.map((service) => (
              <div key={service.size} className="pricing-option">
                <h3>{service.size} Cleaning</h3>
                <p>Starting at ${service.price}</p>
                <button>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleaningService;

