const Loop = () => {
  const userName = ["akshay", "ashu", "aadi"];

  const userData = [
    {
      name: "akshay",
      age: "23",
      gender: "male",
      email: "akshay@gmail.com",
    },
    {
      name: "ashu",
      age: "21",
      gender: "male",
      email: "ashu@gmail.com",
    },
    {
      name: "sneha",
      age: "20",
      gender: "female",
      email: "sneha@gmail.com",
    },
  ];
  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Loop;
