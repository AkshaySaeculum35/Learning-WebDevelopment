import style from "../css/Module.module.css";
const Module = () => {
  return (
    <>
      <h1 className={style.heading}> Style with css module in react js</h1>;
      <div className={style.container}>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div className={style.textWrap}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div className={style.textWrap}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div className={style.textWrap}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div className={style.textWrap}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div className={style.textWrap}>
            <h4>Akshay Gupta</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Module;
