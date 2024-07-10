import React from 'react';
import '../CSS/Home.css'; // Import the CSS file
import AdSlider from './AdSlider'; // Import the new AdSlider component

export default function Home() {
  return (
    <div className="home">
      <div className="breadcrumb">
        <a href="#">Home</a> / <a href="#">Train Tickets</a>
      </div>
      <div className="booking-container">
        <div className="booking-header">
          <h1>Train Ticket Booking</h1>
        </div>
        <div className="booking-form">
          <input type="text" placeholder="From Station" />
          <button className="swap-button">⇄</button>
          <input type="text" placeholder="To Station" />
          <div className="date-picker">
            <p>Departure Date</p>
            <p className="selected-date">02 Jul, Tue</p>
            <button className="calendar-button">📅</button>
            <div className="date-options">
              <button>3 July Wed</button>
              <button>4 July Thu</button>
              <button>5 July Fri</button>
            </div>
          </div>
          <button className="search-button">Search Trains</button>
        </div>
      </div>
      <AdSlider /> {/* Include the AdSlider component here */}
    </div>
  );
}
