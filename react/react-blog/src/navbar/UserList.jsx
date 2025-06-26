import { Link } from "react-router";

const UserList = () => {
  const userData = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Alice", age: 40 },
    { id: 5, name: "Charlie", age: 45 },
  ];
  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Users List page</h1>
      {userData.map((item, index) => {
        return (
          <div key={index}>
            <Link to={"/users/" + item.id}>
              <h4>{item.name}</h4>
            </Link>
          </div>
        );
      })}

      <h1>Users List page with name in url</h1>
      {userData.map((item, index) => {
        return (
          <div key={index}>
            <Link to={"/users/" + item.id + "/" + item.name}>
              <h4>{item.name}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default UserList;
