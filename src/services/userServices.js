// import { instance, protectedInstance } from "./instance";

// // define the user endpoints
// // const baseURL = "http://localhost:3001/api";

// const userServices = {
//     register: async (name,username,password,location) =>
//     {
//         return await instance.post("/users",{
//             name,
//             username,
//             password,
//             location
//         });
//     },
//     // login: async (username,password) =>
//     // {
//     //     return await instance.post("/users/login",{
//     //         username,
//     //         password
//     //     });
//     // }

// login : async (username, password) => {
//   return await instance.post("users/login", { username, password });
// },

//  setAuthToken : (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// }
// }


// // export userServices
// export default userServices;

import axios from 'axios';

const API_URL = 'http://localhost:3001/api/users';

const register = (name ,username, password, location) => {
    return axios.post(`${API_URL}/register`, { name, username, password,location });
  };

const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
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
  setAuthToken,
};
