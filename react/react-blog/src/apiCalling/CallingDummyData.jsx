import { useState } from "react";

function CallingDummyData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "https:dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response.users);
    setUserData(response.users);
    setLoading(false);
  }
  return (
    <>
      <h1 className=" bg-gray-400">Fetch data from API</h1>
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
        <li>FirstName</li>
        <li>LastName</li>
        <li>Age</li>
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
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.age}</li>
            </ul>
          );
        })
      ) : (
        <h1>Data Loading...</h1>
      )}
    </>
  );
}
export default CallingDummyData;
