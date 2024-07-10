import React, { useState, useEffect } from 'react';
import '../CSS/AdSlider.css'; // Import the CSS file for the ad slider

// Import images
import ad1 from '../images/add1.jpg';
import ad2 from '../images/add2.jpg';
import ad3 from '../images/add3.jpg';
import ad4 from '../images/add4.jpg';
import ad5 from '../images/add5.jpg';

export default function AdSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Change the index every 5 seconds
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="ad-container">
        {[
          { backgroundImage: `url(${ad1})` },
          { backgroundImage: `url(${ad2})` },
          { backgroundImage: `url(${ad3})` },
          { backgroundImage: `url(${ad4})` },
          { backgroundImage: `url(${ad5})` },
        ].map((ad, index) => (
          <div
            key={index}
            className={`ad-box ${index === activeIndex ? 'active' : ''}`}
            style={{ ...ad }}
          ></div>
        ))}
      </div>
    );
  }