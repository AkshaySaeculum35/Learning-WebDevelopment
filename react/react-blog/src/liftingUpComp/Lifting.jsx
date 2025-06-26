import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function Lifting() {
  const [user, setUser] = useState("");

  return (
    <div>
      <h1>Lifting up data into components</h1>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </div>
  );
}
export default Lifting;
