import { Link, useParams } from "react-router";

const UserDetails = () => {
  const paramData = useParams();

  //   console.log(paramData.id);

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>User Detail page</h1>
      <h2>User id is: {paramData.id}</h2>
      <Link to="/users">Back</Link>
    </div>
  );
};
export default UserDetails;
