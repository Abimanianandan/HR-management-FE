import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LeaveManagement = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => [
    await axios
      .get("http://localhost:3001/api/leave/allLeaves")
      .then((res) => setLeaveData(res.data.leave))
      .catch((err) => console.log(err)),
  ];
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/leave/${id}`);
      setDeleteData(preData => preData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting leaves:", error);
    }
  };
  return (
    <div className="container mt-5">
         <table class="table table-hover ">
      <thead>
        <tr>
       
          <th scope="col">UserId</th>
          {/* <th scope="col">LeaveType</th> */}
          <th scope="col">StartDate</th>
          <th scope="col">EndDate</th>
          <th scope="col">Status</th>
          <th scope="col">Reason</th>
          {/* <th scope="col">AppliedDate</th> */}
          <th scope="col">Edit/Delete</th>
        </tr>
      </thead>
        <tbody>
        {leaveData.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <td>{item.userId}</td>
                {/* <td>{item.leaveType}</td> */}
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.status}</td>
                <td>{item.reason}</td>
                {/* <td>{item.appliedDate}</td> */}
                <td>
                <Link className="btn btn-success mt-3" to={`/leaveedit/${item._id}`}>Edit</Link> 
                <button className="btn btn-danger ms-3 mt-3" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
                
              </tr>
            </>
          );
        })} 
      </tbody> 


    </table>
    </div>
  
  )
}

export default LeaveManagement