import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div
    className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100 position-fixed"
    style={{ width: "280px" }}
  >
    <span className="fs-4 text-warning">Admin Dashboard 🕸</span>

    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to={"userDetails"} className="nav-link text-info">
          <i class="fa-solid fa-book" style={{ color: "#FFD43B" }}></i>{" "}
          <h6>User-Details 👨‍💼</h6>
        </Link>
      </li>
      <li>
        <Link to={"salary"} className="nav-link text-info">
          <i class="fa-solid fa-square-plus" style={{ color: "#FFD43B" }}></i>{" "}
         <h6> Salary-Management 💸💰</h6>
        </Link>
      </li>
      <li>
        <Link to={"attenDance"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
          <h6>Attendance-Management 📒</h6>
        </Link>
      </li>
      <li>
        <Link to={"leave"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
         <h6> Leave-Management 📑</h6>
        </Link>
      </li>
      <li>
        <Link to={"addUser"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
         <h6>Add User +👨‍💼</h6> 
        </Link>
      </li>
      <li>
        <Link to={"logout"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
         <h6>Logout 📲</h6> 
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar