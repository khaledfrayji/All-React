import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Login</h1>
        <p>Login with your EduConnect card credentials to access courses and lessons.</p>
      </header>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
        <Link to="/courses" ><p>Don't have a card?</p></Link>
      </form>
    </div>
  );
};

export default Login;
