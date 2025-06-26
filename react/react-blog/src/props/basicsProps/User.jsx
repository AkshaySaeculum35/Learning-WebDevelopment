// const User = (props) => {
//   return (
//     <div>
//       <h1>User Component</h1>
//       <h1>My name is :{props.name}</h1>
//       <h1>and My age is :{Props.age}</h1>
//       <h1>and My email is :{Props.email}</h1>
//     </div>
//   );
// };

//if direct use same name than use curly braces

// const User = ({ name, age, email }) => {
//   return (
//     <div>
//       <h1>User Component</h1>
//       <h1>My name is :{name}</h1>
//       <h1>and My age is :{age}</h1>
//       <h1>and My email is :{email}</h1>
//     </div>
//   );
// };

const User = ({ user }) => {
  return (
    <div>
      <hr />
      <h1>User Component</h1>
      <h1>My name is :{user.name}</h1>
      <h1>and My age is :{user.age}</h1>
      <h1>and My email is :{user.occupation}</h1>
    </div>
  );
};
export default User;
