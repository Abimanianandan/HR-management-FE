import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const dashboard = () => {
  return (
    <div>
      <div className="d-flex ">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default dashboard