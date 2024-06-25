import React from "react";
import { useNavigate } from "react-router-dom";
import adminServices from "../services/adminServices";
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    adminServices.logout();
    navigate("/");
  };

  return (
    <div className="container offset-3 mt-5">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Logout</h5>
            <p class="card-text">Are you sure you want to logout?</p>
            <button class="btn btn-danger" onClick={handleLogout}>
              Logout 📲
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
