import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from './Img/img1.webp';

const Login = ({ onLogin }) => {
  const [identifier, setIdentifier] = useState(''); // Changed from username to identifier
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Define the hardcoded credentials
    const validCredentials = [
      { identifier: 'Abhishek@gmail.com', password: 'Abhi@123' },
      { identifier: 'Abhibank@gmail.com', password: 'password123' }
    ];

    try {
      // Simulating login process with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if the identifier (username or email) and password match any valid credentials
      const validUser = validCredentials.find(
        cred => (cred.identifier === identifier || cred.email === identifier) && cred.password === password
      );

      if (validUser) {
        // If login is successful, call the onLogin function if provided
        if (onLogin) {
          onLogin();
        }
        // Navigate to home page
        navigate('/');
      } else {
        // If login fails, set error message
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img 
              src={A} 
              alt="login form" 
              className="img-fluid rounded-start w-100" 
            />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <i className="bi bi-cube-fill text-warning fs-1 me-3"></i>
                <h1 className="fw-bold mb-0">
                  <span className="text-danger">CIBC</span> Bank
                </h1>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Login into your account
              </h5>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="identifier" className="form-label">Username or Email</label>
                  <input 
                    type="text" 
                    id="identifier" 
                    className="form-control form-control-lg"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <button 
                  type="submit" 
                  className="btn btn-dark btn-lg mb-4 px-5"
                >
                  Login
                </button>
              </form>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account? <a href="./Signup" style={{ color: '#393f81' }}>Register here</a>
              </p>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
