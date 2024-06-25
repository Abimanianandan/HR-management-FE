
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/admin';

const register = (name ,adminname, password, location) => {
    return axios.post(`${API_URL}/register`, { name, adminname, password,location });
  };


const login = (adminname, password) => {
  return axios.post(`${API_URL}/login`, { adminname, password });
};

// Logout an admin
const logout = () => {
  // Remove token from local storage or session storage
  localStorage.removeItem('token'); // Assuming you're using localStorage

  // Remove Authorization header
  delete axios.defaults.headers.common['Authorization'];
};

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default {
  register,
  login,
  logout,
  setAuthToken,
};
