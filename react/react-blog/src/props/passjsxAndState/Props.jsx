import User from "./User";
import Wrapper from "./Wrapper";

const Props = () => {
  return (
    <div>
      <h1>Props in react js</h1>
      {/* <User name="Akshay" /> */}

      <Wrapper color={"orange"}>
        <h1>Hello Akshay</h1>
        <p style={{ color: "red" }}>How are you</p>
      </Wrapper>
      <Wrapper>
        <h1>Hello Ashu</h1>
      </Wrapper>
    </div>
  );
};
export default Props;
