import { Suspense, use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((response) => response.json());

// console.log(fetchData());

const userResource = fetchData();
const UseApi = () => {
  return (
    <div>
      <h1>use API in react js</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <User userResource={userResource} />
      </Suspense>
    </div>
  );
};

const User = ({ userResource }) => {
  const userData = use(userResource);
  console.log(userData.users);

  return (
    <div>
      <h1>Users lIst</h1>
      {userData?.users?.map((user, index) => {
        return <p key={index}>{user.firstName}</p>;
      })}
    </div>
  );
};
export default UseApi;
