import React from 'react';
import '../styles/AboutUs.css'; // Optional: If you want to style the About Us page

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Based in Vancouver, WA. Serving southwest WA as well as the Portland, OR area. We are dedicated to providing high-quality cleaning solutions for residential and commercial spaces.
      </p>
      <p>
        Our team is experienced, reliable, and always goes the extra mile to ensure customer satisfaction. Whether you need a one-time deep clean or regular maintenance, we have the right package for you.
      </p>
      <p>
        Contact us today to learn more about our services and how we can help you achieve a clean and comfortable space!
      </p>
      <img src="/kitchen.jpg" alt="kitchen" />
      <img src="/stair.jpg" alt="stair" />
    </div>
  );
};

export default AboutUs;

