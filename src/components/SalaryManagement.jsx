import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SalaryManagement = () => {
  const [salaryData, setSalaryData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => [
    await axios
      .get("https://hr-management-be-2.onrender.com/api/salary/allSalary")
      .then((res) => setSalaryData(res.data.salaries))
      .catch((err) => console.log(err)),
  ];
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hr-management-be-2.onrender.com/api/salary/${id}`);
      setDeleteData(preData => preData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting salaries:", error);
    }
  };
  return (
    <div className="container mt-5">
         <table class="table table-hover ">
      <thead>
        <tr>
          <th scope="col">UserId</th>
          <th scope="col">BasicPay</th>
          <th scope="col">Allowances</th>
          <th scope="col">Bonuses</th>
          <th scope="col">Deductions</th>
          <th scope="col">Total</th>
          <th scope="col" >Edit/Delete</th>
        </tr>
      </thead>
        <tbody>
        {salaryData.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.basicPay}</td>
                <td>{item.allowances}</td>
                <td>{item.bonuses}</td>
                <td>{item.deductions}</td>
                <td>{item.total}</td>
                <td>
                <Link className="btn btn-success mt-3" to={`/salaryedit/${item._id}`}>Edit</Link>
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
export default SalaryManagement
