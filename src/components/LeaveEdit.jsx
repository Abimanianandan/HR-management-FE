import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const LeaveEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    status:''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hr-management-be.onrender.com/api/leave/${id}`);
        setEditData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching item data:", error.response || error.message);
        setError("Failed to fetch data. Please try again.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://hr-management-be.onrender.com/api/leave/${id}`, editData);
      navigate("/leave");
    } catch (error) {
      console.error("Error updating salary:", error.response || error.message);
      setError("Failed to update data. Please try again.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="d-flex justify-content-center">Edit Leave</h1>
      <div className="container d-flex justify-content-center m-3 ms-5">
        <div className="border border-3 p-5 ms-5">
          <form onSubmit={handleFormSubmit}>
            <label className="mt-3 ms-4 text-primary">
              Status:
              <input
                type="text"
                name="status"
                className="form-control"
                value={editData.status || ''}
                onChange={handleChange}
              />
            </label>
           
            <br />
          
            <button type="submit" className="btn btn-primary mt-4 ms-4">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeaveEdit;
