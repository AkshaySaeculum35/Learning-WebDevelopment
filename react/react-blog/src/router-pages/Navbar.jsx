import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/about">
        <h1>About</h1>
      </NavLink>
      <NavLink to="/login">
        <h1>Login</h1>
      </NavLink>
    </>
  );
};
export default Navbar;
