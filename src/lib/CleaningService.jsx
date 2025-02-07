import React from 'react';
import './CleaningService.css';

function CleaningService() {
  const services = [
    { size: 'Small', price: 250 },
    { size: 'Medium', price: 350 },
    { size: 'Large', price: 450 }
  ];

  return (
    <div className="cleaning-service">
      <h1>House Cleaning Services</h1>
      <div className="service-details">
        <div className="graphics">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            width="100"
            height="100"
            className="broom-graphic"
          >
            <path
              fill="#FFA500"
              d="M32 0C14.33 0 0 14.33 0 32s14.33 32 32 32 32-14.33 32-32S49.67 0 32 0zm0 60C16.56 60 4 47.44 4 32S16.56 4 32 4s28 12.56 28 28-12.56 28-28 28z"
            />
            <path
              fill="#A52A2A"
              d="M25.5 25h13l-4 15h-5l-4-15z"
            />
            <path
              fill="#2F4F4F"
              d="M32 34.7l3 11.7h-6l3-11.7z"
            />
          </svg>
        </div>
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

