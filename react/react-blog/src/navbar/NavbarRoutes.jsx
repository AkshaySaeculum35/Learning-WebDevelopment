import { Navigate, Route, Routes } from "react-router";

import "./App.css";
import Navbar from "./Navbar";
import Home from "../router-pages/Home";
import UserList from "../apiCalling/UserList";
import UserDetails from "./UserDetails";
import Login from "../router-pages/Login";
import About from "../router-pages/About";
import College from "../router-pages/College";
import Student from "../router-pages/college-pages/Student";
import Details from "../router-pages/college-pages/Details";
import Department from "../router-pages/college-pages/Department";

function NavbarRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          {/* optional segment */}
          <Route path="/users/list?" element={<UserList />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />

          <Route path="user">
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/about" element={<About />} />
          </Route>
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="Detail" element={<Details />} />
          <Route path="department" element={<Department />} />
        </Route>
        {/* <Route path="/*" element={<PageNotFound />} /> */}

        <Route path="/*" element={<Navigate to="/user/login" />} />
      </Routes>
    </>
  );
}
export default NavbarRoutes;
