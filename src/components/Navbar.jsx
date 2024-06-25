import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    <nav className="navbar bg-body-tertiary" >
    <div className="container-fluid">
      <a className="navbar-brand">Welcome..🙏</a>
      <form className="d-flex">
        <Link to={"/register"} className="btn btn-outline-warning m-3 text-danger" >Register</Link>
        <Link to={"/login"} className="btn btn-outline-warning m-3 text-danger" >Login</Link>

      </form>
    </div>
  </nav>
  <Outlet />
  </div>
    )
}

export default Navbar