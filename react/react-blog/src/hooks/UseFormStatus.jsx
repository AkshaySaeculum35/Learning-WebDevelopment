import { useFormStatus } from "react-dom";
const UseFormStatus = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Form submitted");
  };

  function CustomForm() {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="text" placeholder="Enter Password" />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>useFormStatus hook in react js 19</h1>

      <form action={handleSubmit}>
        <CustomForm />
      </form>
    </div>
  );
};
export default UseFormStatus;
