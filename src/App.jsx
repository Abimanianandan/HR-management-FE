import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import UserDetails from "./components/UserDetails"
import SalaryManagement from "./components/SalaryManagement"
import Attendance from "./components/Attendance"
import LeaveManagement from "./components/LeaveManagement"
import AddUser from "./components/AddUser"
import SalaryEdit from "./components/SalaryEdit"
import LeaveEdit from "./components/LeaveEdit"
import UserEdit from "./components/UserEdit"
import AttendanceEdit from "./components/AttendanceEdit"
import Logout from "./components/Logout"


const App = () => {
  return (
  <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Dashboard />}>
          <Route path="userDetails" element={<UserDetails />}></Route>
          <Route path="salary" element={<SalaryManagement/>}></Route>
          <Route path="attendance" element={<Attendance />}></Route>
          <Route path="leave" element={<LeaveManagement />}></Route>
          <Route path="addUser" element={<AddUser/>}></Route>
          <Route path="logout" element={<Logout/>}></Route>
        </Route>
        <Route path="/edit/:id" element={<UserEdit />}/>
      <Route path="/salaryedit/:id" element={<SalaryEdit/>}/>
      <Route path="/leaveedit/:id" element={<LeaveEdit />} />
      <Route path="/attendanceedit/:id" element={<AttendanceEdit/>}/>
     </Routes>
  </BrowserRouter>
 
    )
}

export default App