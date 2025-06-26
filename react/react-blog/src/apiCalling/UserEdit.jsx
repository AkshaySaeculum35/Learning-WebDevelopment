import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UserEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();

  //   console.log(id);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    // console.log(id);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  };

  const updateUser = async () => {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    const data = await response.json();
    // console.log(data);
    if (data) {
      alert("User updated successfully");
    }
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Edit User Details</h1>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Enter Age"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter Email"
      />
      <br />
      <br />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};
export default UserEdit;
