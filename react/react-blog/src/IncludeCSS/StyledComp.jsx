import styled from "styled-components";

const StyledComp = () => {
  // const Heading = styled.h4`
  //   color: red;
  //   border: 1px solid green;
  //   border-radius: 5px;
  //   margin: 20px;
  //   padding: 10px;
  // `;

  const Heading = styled.h1({
    color: "red",
    border: "1px solid green",
    borderRadius: "5px",
    margin: "20px",
    padding: "10px",
  });

  const StyleBtn = styled.button`
    color: red;
    width: 130px;
    height: 40px;
    margin: 20px;
  `;
  return (
    <div>
      <h1>Styled Component with react js</h1>
      <Heading>Hello Akshay</Heading>
      <Heading>Hello Akshay</Heading>
      <Heading>Hello Akshay</Heading>
      <Heading>Hello Akshay</Heading>
      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Login</StyleBtn>
    </div>
  );
};
export default StyledComp;
