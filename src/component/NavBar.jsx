import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';

import profileIcon from '../images/profile.jpg';

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <span className="rail">RAILWAY</span><span className="yatri">EXPRESS</span>
        </div>
        <div className="profile">
          <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </div>
    </div>
  );
}
