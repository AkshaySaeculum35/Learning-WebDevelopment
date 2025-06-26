import { NavLink, Route, Routes } from "react-router";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";

function CallingSelfData() {
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          width: "400px",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      <h1 className=" bg-gray-400">Fetch data from API</h1>
      {/* <UserList /> */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </>
  );
}
export default CallingSelfData;
