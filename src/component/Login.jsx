import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Login.css'; 

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUpClick = () => {
    setIsSignUp(true);
    clearForm();
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
    setMessage('');
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      setMessage(`Welcome back! Token: ${res.data.token}`);
    } catch (err) {
      setMessage(err.response.data.msg);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { fullName, email, password, confirmPassword });
      //setMessage(`Account created! Token: ${res.data.token}`);
    } catch (err) {
      setMessage(err.response.data.msg);
    }
  };

  return (
    <div className="login-container">
      <p>{message}</p>
      {!isSignUp ? (
        <div className="login-form">
          <h2>Sign In</h2>
          <p>Unlock your world.</p>
          <form onSubmit={handleSignInSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
          <button className="switch-button" onClick={handleSignUpClick}>Create an account</button>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-email">Email</label>
              <input
                type="email"
                id="new-email"
                name="new-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password">Password</label>
              <input
                type="password"
                id="new-password"
                name="new-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="sign-up-button">Sign Up</button>
          </form>
          <button className="switch-button" onClick={handleSignInClick}>Already have an account? Sign In</button>
        </div>
      )}
    </div>
  );
}
