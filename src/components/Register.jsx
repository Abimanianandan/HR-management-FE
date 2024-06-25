
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();
      userServices.register(name,username, password, location)
            .then(response => {
              alert(response.data.message);
              // Store the JWT token in local storage
              const token = response.data.token;
              localStorage.setItem('token', token);
              // Set the token in Axios defaults
              userServices.setAuthToken(token);
              // Clear the form
              setName('');
              setUsername('');
              setPassword('');
              setLocation('');
              // Redirect to login page
              setTimeout(() => {
                navigate('/login');
              }, 500);
            })
            .catch(error => {
              if (error.response && error.response.data) {
                setError(error.response.data.message);
              } else {
                setError('Failed to register. Please try again.');
              }
            });
        };
     
  return (
  
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card bg-warning">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
               
              </div>
              <div className="mb-3 ">
                <label htmlFor="username">username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
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
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
                 
              </div>
              <div className="mb-3 ">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                  required
                />
               
              </div>
              <button type="submit" className="btn btn-primary" >
                Register
              </button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
            <p >
              you have an already account? <Link to={"/login"}>Login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register