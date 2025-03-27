import React, { useState } from 'react';
import './signup.css'; // Make sure this path is correct

const SignIn = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle checkbox change for password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission logic (e.g., API call or state management)
  };

  return (
    <div className="frame">
      <div className="header-container">
        <div className="header-text">QuizLab</div>
        <div className="logo"></div>
      </div>

      <div className="form-container">
        <div id="signinform">
          <h2 className="form-title">Sign in</h2>
          <p className="form-subtitle">Please login to continue to your account.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={showPassword ? 'assets/open-eye.png' : 'assets/close-eye.png'}
                    alt="toggle-password"
                    className="closeeye-icon"
                  />
                </button>
              </div>
            </div>

            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleInputChange}
              />
              <label htmlFor="remember">Keep me logged in</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign in
            </button>
          </form>

          <div className="create-account">
            <span>Need an account?</span>
            <a href="sign-up.html" id="signUpLink">
              Create one
            </a>
          </div>

          <div className="create-account">
            <a href="password-forgot.html" id="passwordForgotLink">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
