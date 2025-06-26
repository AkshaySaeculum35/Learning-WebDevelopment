import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:3000/users";
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUsersData();
  }, []);

  async function getUsersData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data); // This will be the actual array of users
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const deleteUser = async (id) => {
    // console.log("id: ", id);

    try {
      const response = await fetch(url + "/" + id, { method: "delete" });
      const data = await response.json();
      if (data) alert("record deleted");
      getUsersData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const editUser = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px",
          border: "1px solid #aaa",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
      {!loading ? (
        userData &&
        userData.map((user) => {
          return (
            <ul
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0px",
                border: "1px solid #aaa",
                padding: "10px",
              }}
            >
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "15px",
                }}
              >
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => editUser(user.id)}>Edit</button>
              </li>
            </ul>
          );
        })
      ) : (
        <h1>Data Loading...</h1>
      )}
    </>
  );
}
export default UserList;
