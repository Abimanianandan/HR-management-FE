
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://hr-management-be-2.onrender.com/api/admin/allUsers");
      setUserData(response.data.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hr-management-be-2.onrender.com/api/admin/${id}`);
      setDeleteData(preData => preData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Location</th>
            <th scope="col">Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.location}</td>
              <td>
                <Link className="btn btn-success mt-3" to={`/edit/${item._id}`}>Edit</Link>
                <button className="btn btn-danger ms-3 mt-3" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
