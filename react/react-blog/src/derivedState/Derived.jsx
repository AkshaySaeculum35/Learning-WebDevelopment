import { useState } from "react";

const Derived = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const handleAddUsers = () => {
    setUsers([...users, user]);
  };
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  return (
    <div>
      <h2>Total user:{total}</h2>
      <h2>Last user:{last}</h2>
      <h2>Unique Total user:{unique}</h2>
      <h1>Derived states in react js</h1>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter New User"
      />
      <button onClick={handleAddUsers}>Add User</button>
      {users.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </div>
  );
};
export default Derived;
