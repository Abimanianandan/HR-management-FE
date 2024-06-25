import "../App.css"
import Navbar from "./Navbar"
const Home = () => {
  return (
    <>
    <Navbar />
   <div className="container mt-3" style={{backgroundColor: "pink"}}>
     <div className="row ms-5">
     <h1 className="ms-5 mt-3">We work together to make your process better</h1>
     <div className="col-md-4 offset-md-1 mt-5">
        <h3>Automatic employee profile synchronization</h3>
       <p>Free up your HR staff from repetitive work. Employee records captured in company People reflect automatically in company Payroll.</p>
     </div>
     <div className="col-md-4 offset-md-1 mt-5">
        <h3>Contextual employee directory updates</h3>
       <p>Recorded department transfers, work location changes, and designation upgrades get updated in company Payroll without any manual intervention.</p>
     </div>
     <div className="col-md-4 offset-md-1 mt-5">
        <h3>Up-to-the-minute employee attendance</h3>
       <p>Integrate with biometric devices to capture the right clock-in and clock-out times for all your employees.</p>
     </div>
     <div className="col-md-4 offset-md-1 mt-5">
        <h3>Integrated leave management</h3>
       <p>Factor in your employees' leave data based on the monthly cut-off date and calculate employees' pay by pulling the LOP report in a single click.</p>
     </div>
   </div>
   </div>
   </>
  )
}

export default Home