import React, { useState } from 'react';
import '../CSS/Login.css'; 

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="login-container">
      {!isSignUp ? (
        <div className="login-form">
          <h2>Sign In</h2>
          <p>Unlock your world.</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          <button className="switch-button" onClick={handleSignUpClick}>Create an account</button>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="new-email">Email</label>
              <input type="email" id="new-email" name="new-email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">Password</label>
              <input type="password" id="new-password" name="new-password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />
            </div>
            <button type="submit" className="sign-up-button">Sign Up</button>
          </form>
          <button className="switch-button" onClick={handleSignInClick}>Already have an account? Sign In</button>
        </div>
      )}
    </div>
  );
}
