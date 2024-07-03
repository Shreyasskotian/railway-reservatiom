import React from 'react';
import '../CSS/Footer.css'; // Import the CSS file

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>Features</h3>
        <ul>
     
          <li>PNR Status</li>
          <li>Train Time Table</li>
          <li>Seat Availability</li>
         
        </ul>
      </div>
      <div className="footer-column">
        <h3>Book with Us</h3>
        <ul>
          <li>Train Tickets</li>
          <li>Food on Train</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Info</h3>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Media</li>
        </ul>
      </div>
      <div className="footer-column">
    
      </div>
      <div className="footer-column logo-column">
        <div className="footer-logo">
          <span className="rail">RAILWAY</span><span className="yatri">EXPRESS</span>
        </div>
        <p>RailwayExpress is a one-stop solution for all your railway reservation needs. We offer a comprehensive platform for booking train tickets online, providing you with a seamless and efficient experience.</p>
        <div className="social-icons">
          <span>[◉°]</span>
          <span>ⓕ</span>
          <span>🐦</span>
        </div>
      </div>
    </div>
  );
}
