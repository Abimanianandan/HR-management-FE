
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SalaryEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    basicPay: "", 
    allowances: "",
    bonuses: "",
    deductions: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hr-management-be.onrender.com/api/salary/${id}`);
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
    console.log('Submitting:', editData); 
    try {
      await axios.put(`https://hr-management-be.onrender.com/api/salary/${id}`, editData);
      navigate("/salary");
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
      <h1 className="d-flex justify-content-center">Edit Salary</h1>
      <div className="container d-flex justify-content-center m-3 ms-5">
        <div className="border border-3 p-5 ms-5">
          <form onSubmit={handleFormSubmit}>
            <label className="mt-3 ms-4 text-primary">
              Basic Pay:
              <input
                type="number"
                name="basicPay"
                className="form-control"
                value={editData.basicPay || ''}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-3 ms-4 text-primary">
              Allowances:
              <input
                type="number"
                name="allowances"
                className="form-control"
                value={editData.allowances || ''}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-3 ms-4 text-primary">
              Bonuses:
              <input
                type="number"
                name="bonuses"
                className="form-control"
                value={editData.bonuses || ''}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="mt-3 ms-4 text-primary">
              Deductions:
              <input
                type="number"
                name="deductions"
                className="form-control"
                value={editData.deductions || ''}
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

export default SalaryEdit;
