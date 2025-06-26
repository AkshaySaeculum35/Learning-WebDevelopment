import { useRef } from "react";

const Uncontrolled = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const handleForm = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, " ", password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();

    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log("Values", user, password);

    console.log("Form submitted ref");
  };

  return (
    <div>
      <h1>Uncontrolled Comnponent</h1>

      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name" />
        <br />
        <br />
        <input type="password" id="password" placeholder="Enter password" />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <hr />
      <hr />

      <h1>Uncontrolled Comnponent with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input
          type="text"
          ref={userRef}
          id="userRef"
          placeholder="Enter user name"
        />
        <br />
        <br />
        <input
          type="password"
          ref={passwordRef}
          id="passwordRef"
          placeholder="Enter password"
        />
        <br />
        <br />
        <button>SubmitRef</button>
      </form>
    </div>
  );
};
export default Uncontrolled;
