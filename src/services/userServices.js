
import axios from 'axios';

const API_URL = 'https://hr-management-be.onrender.com';

const register = (name ,username, password, location) => {
    return axios.post(`${API_URL}/api/users/register`, { name, username, password,location });
  };


const login = (username, password) => {
  return axios.post(`${API_URL}/api/users/login`, { username, password });
};

// Logout an user
const logout = () => {
  // Remove token from local storage or session storage
  localStorage.removeItem('token'); 

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