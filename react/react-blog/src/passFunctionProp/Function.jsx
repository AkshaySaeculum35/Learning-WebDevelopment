import User from "./User";

const Function = () => {
  const displaName = (name) => {
    alert(name);
  };

  const getUser = () => {
    alert("get User function called");
  };

  return (
    <div>
      <h1>Call parent component function from child component</h1>

      <User displaName={displaName} name="Akshay" getUser={getUser} />
      <User displaName={displaName} name="Ashu" getUser={getUser} />
    </div>
  );
};
export default Function;
