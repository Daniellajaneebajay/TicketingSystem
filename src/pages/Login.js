import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Eye, EyeOff } from 'lucide-react'; 
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="auth-wrapper">
      <div className="shape-blue"></div>
      <div className="shape-red"></div>

      <div className="auth-content">
        <div className="brand-section">
          <img src="/assets/dole.svg" alt="DOLE Logo" className="logo-img" />
          <h1 className="dept-name">Department of Labor and Employment</h1>
          <h2 className="welcome-heading">Welcome!</h2>
          <p className="sub-heading">Please enter your details</p>
        </div>

        <div className="form-container">
          <div className="glass-card">
            
            <div className="auth-input-group">
              <input type="email" placeholder="Email" />
            </div>

            <div className="auth-input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <div 
                className="eye-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            <div className="role-selector">
              <label>Sign In As</label>
              <select className="custom-select">
                <option>Select</option>
                <option>Admin</option>
                <option>Officer</option>
              </select>
            </div>

            <button 
              className="forgot-lnk" 
              type="button"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password
            </button>

            <button 
              className="submit-btn" 
              type="submit"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;