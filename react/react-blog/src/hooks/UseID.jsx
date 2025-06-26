import { useId } from "react";

const UseID = () => {
  return (
    <div>
      <h1>useID hook in react js</h1>
      <UserForm />
      <UserForm />
    </div>
  );
};

const UserForm = () => {
  const user = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={user + "name"}>Enter username</label>
        <input type="text" id={user + "name"} placeholder="Enter name" />
        <br />
        <br />
        <label htmlFor={user + "password"}>Enter password</label>
        <input
          type="text"
          id={user + "password"}
          placeholder="Enter password"
        />
      </form>
      <hr />
    </div>
  );
};
export default UseID;
