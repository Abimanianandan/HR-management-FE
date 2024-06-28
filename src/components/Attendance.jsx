import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://hr-management-be-2.onrender.com/api/attendance/allAttendance");
      setAttendanceData(response.data.attendance);
    } catch (error) {
      console.log("Error fetching attendance data:", error);
      setError("Failed to fetch attendance data. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hr-management-be-2.onrender.com/api/attendance/${id}`);
      setAttendanceData(prevData => prevData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting attendance:", error);
      setError("Failed to delete attendance record. Please try again later.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>
                <Link className="btn btn-success mt-3" to={`/attendanceedit/${item._id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger ms-3 mt-3" onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
