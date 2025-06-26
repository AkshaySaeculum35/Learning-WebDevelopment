import { useActionState, useState } from "react";

function ValidationWithHook() {
  const [name, setName] = useState();
  const [nameErr, setNameErr] = useState();
  const [password, setPassword] = useState();
  const [passErr, setPassErr] = useState();

  const handleLogin = (prev, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error:
          "Name can not be empty should not contain more than 5 characters",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "Password contain omly number and alphabets",
        name,
        password,
      };
    } else {
      return { message: "Login done", name, password };
    }
  };
  const [data, action, pending] = useActionState(handleLogin);

  return (
    <>
      <div>
        <h1>Validation with useActionState in react</h1>

        {data?.message && (
          <span className="text-green-600 block">{data?.message}</span>
        )}
        {data?.error && (
          <span className="text-red-600 block">{data?.error}</span>
        )}
        <form action={action}>
          <input
            defaultValue={data?.name}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <br />
          <br />
          <input
            defaultValue={data?.password}
            type="text"
            name="password"
            placeholder="Enter password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
export default ValidationWithHook;
