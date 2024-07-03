import React, { useState } from 'react';
import '../CSS/NavBar.css';

import profileIcon from '../images/profile.jpg';
import Login from './Login';

export default function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showTrainInfo, setShowTrainInfo] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleTrainInfoClick = () => {
    setShowTrainInfo(!showTrainInfo);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <span className="rail">RAILWAY</span><span className="yatri">EXPRESS</span>
        </div>
        <div className="menu">
          <a href="#">Train Tickets</a>
          <a href="#">Food On Train</a>
          <div className="dropdown">
            <a href="#" onClick={handleTrainInfoClick}>Train Info</a>
            {showTrainInfo && (
              <div className="dropdown-content">
                <a href="#">Seat Availability</a>
                <a href="#">PNR Status</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <a href="#" onClick={handleMoreClick}>More</a>
            {showMore && (
              <div className="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
              </div>
            )}
          </div>
        </div>
        <div className="profile">
          <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
          <button className="login-button" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
      {showLogin && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-button" onClick={handleCloseLogin}>X</button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}
