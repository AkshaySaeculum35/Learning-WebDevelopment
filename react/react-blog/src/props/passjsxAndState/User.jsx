const User = ({ name = "New User" }) => {
  return (
    <div>
      <h1>User Component</h1>
      <h1>Name is : {name}</h1>
    </div>
  );
};
export default User;
