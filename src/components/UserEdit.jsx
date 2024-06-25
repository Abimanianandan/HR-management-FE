
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    username: '',
    password: '',
    location: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/admin/${id}`);
        setEditData(response.data.user);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching item data:", error);
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
      await axios.put(`http://localhost:3001/api/admin/${id}`, editData);
      navigate("/userDetails");
    } catch (error) {
      console.error("Error updating item:", error);
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
      <h1 className="d-flex justify-content-center">Edit Data</h1>
      <div className="container d-flex justify-content-center m-3 ms-5">
        <div className="border border-3 p-5 ms-5">
          <form onSubmit={handleFormSubmit}>
            <label className="mt-3 ms-4 text-primary">
              UserName:
              <input
                type="text"
                name="username"
                className="form-control"
                value={editData.username || ''}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-3 ms-4 text-primary">
              Password:
              <input
                type="password"
                name="password"
                className="form-control"
                value={editData.password || ''}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-3 ms-4 text-primary">
              Location:
              <input
                type="text"
                name="location"
                className="form-control"
                value={editData.location || ''}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-3 ms-4 text-primary">
              Name:
              <input
                type="text"
                name="name"
                className="form-control"
                value={editData.name || ''}
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

export default UserEdit;
