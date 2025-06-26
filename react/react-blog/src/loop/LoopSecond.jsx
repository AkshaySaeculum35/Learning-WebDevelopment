import User from "./User";

const LoopSecond = () => {
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
      <h1>Reuse component in Loop</h1>
      {userData.map((user) => {
        return (
          <div>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};
export default LoopSecond;
