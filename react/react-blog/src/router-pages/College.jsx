import { Link, NavLink, Outlet } from "react-router";
import "../navbar/header.css";
const College = () => {
  return (
    <>
      <div className="college" style={{ textAlign: "center" }}>
        <h1>College page</h1>
        <h4>
          <Link to="/">Go Back to Home</Link>
        </h4>
        <Link className="link" to="">
          Student
        </Link>
        <Link className="link" to="department">
          Departments
        </Link>
        <Link className="link" to="detail">
          College Details
        </Link>

        <Outlet />
      </div>
    </>
  );
};
export default College;
