
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import userServices from '../services/userServices';
import adminServices from '../services/adminServices';

const Login = () => {
  const navigate = useNavigate();
  const [adminname, setAdminname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    adminServices.login(adminname, password)
      .then(response => {
        alert(response.data.message);
        // Store the JWT token in local storage
        const token = response.data.token;
        localStorage.setItem('token', token);
        // Set the token in Axios defaults
        adminServices.setAuthToken(token);
        // Clear the form
        setAdminname('');
        setPassword('');
        // Redirect to dashboard
        setTimeout(() => {
          navigate('/userDetails');
        }, 500);
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setError(error.response.data.message);
        } else {
          setError('Failed to login. Please try again.');
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card bg-info">
              <div className="card-header bg-info">Login</div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="adminname">Adminname</label>
                    <input
                      type="text"
                      value={adminname}
                      className="form-control"
                      name="adminname"
                      id="adminname"
                      onChange={(e) => setAdminname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </form>
                {error && <p className="text-danger mt-3">{error}</p>}
                <p>
                  Don't have an account?{' '}
                  <Link to="/register" className="text-danger">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


