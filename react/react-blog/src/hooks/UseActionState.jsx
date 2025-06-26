import { useActionState } from "react";

const UseActionState = () => {
  const handleSubmit = async (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    console.log("handle submit call", name, password);

    if (name && password) {
      return { message: "Data Submitted", name, password };
    } else {
      return { error: "failed to submit,Enter proper data", name, password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>useActionState hook in react js</h1>

      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="Enter username"
          name="name"
        />
        <br />
        <br />
        <input
          defaultValue={data?.password}
          type="password"
          placeholder="Enter password"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending}>Submit</button>
        <br />
        <br />
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </div>
  );
};
export default UseActionState;
