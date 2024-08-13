
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
      const response = await axios.get("https://hr-management-be.onrender.com/api/admin/allUsers");
      setUserData(response.data.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hr-management-be.onrender.com/api/admin/${id}`);
      alert("user deleted successfully")
      setDeleteData(preData => preData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-5">
      
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {userData.map((item,index)=>{
          return(
            <div key={index}>
                <div className="col">
    <div className="card user text-light bg-dark" style={{color:"blue"}}>
      <div className="card-body">
        <h5 className="card-title text-warning">Name: {item.name}</h5>
        <p className="card-text">Email: {item.username}</p>
        <p className="card-text">Location: {item.location}</p>
        <p className="card-text">Id: {item._id}</p>
        <Link className="btn btn-success mt-3" to={`/edit/${item._id}`}>Edit</Link>

        <button className="btn btn-danger ms-3 mt-3" onClick={() => handleDelete(item._id)}>Delete</button>
      </div>
    </div>
  </div>
  
            </div>
          )
        })}
 
</div>
    </div>
  );
};

export default UserDetails;
