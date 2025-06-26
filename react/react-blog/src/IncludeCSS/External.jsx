import "../css/style.css";

const External = () => {
  return (
    <>
      <h1 className="heading">External Style in react js</h1>;
      <div className="container">
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
          </div>
          <div className="text-wrap">
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
          </div>
          <div className="text-wrap">
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default External;
