import React, { useState } from 'react';
import './signup.css';
const SignUp = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    dob: '',
    password: '',
    securityQuestion: '',
  });
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    // You can send the form data to an API or backend here
  };

  return (
    <div className="frame">
      <div className="header-container">
        <div className="header-text">QuizLab</div>
        <div className="logo"></div>
      </div>

      <div className="form-container">
        <div id="signupform">
          <h2 className="form-title">Sign up</h2>
          <p className="form-subtitle">Challenge your knowledge with QuizLab!</p>

          <form className="signup-form" onSubmit={handleSubmit}>
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
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy"
                value={formData.dob}
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
                    src={showPassword ? 'src/assets/open-eye.png' : 'src/assets/close-eye.png'}
                    alt="toggle-password"
                    className="closeeye-icon"
                  />
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="security-question">Security Question (for password recovery)</label>
              <select
                id="security-question"
                name="securityQuestion"
                value={formData.securityQuestion}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled selected>
                  Select a topic
                </option>
                <option value="train">Tàu hỏa</option>
                <option value="swimming_pool">Bể bơi</option>
                <option value="apple">Quả táo</option>
                <option value="wool_hat">Mũ len</option>
                <option value="singer">Ca sĩ</option>
                <option value="graphics_card">Card đồ họa</option>
                <option value="banh_cuon">Bánh cuốn</option>
              </select>
            </div>

            <button type="submit" className="sign-in-button">
              Sign up
            </button>
          </form>

          <div className="create-account">
            <span>Already have an account?</span>
            <a href="sign-in.html" id="signInLink">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

