import { lazy, Suspense, useState } from "react";
import "./App.css";
import UseApi from "./useAPI/UseApi";
import ColorMixer from "./colorMixer/ColorMixer";
// import LazyLoading from "./lazyLoading/LazyLoading";

//lazy loading import
const User = lazy(() => import("./lazyLoading/LazyLoading"));

// include taiwlind css in react js example

// function App() {
//   return (
//     <>
//       <h1 className=" bg-gray-400">Tailwind css</h1>
//     </>
//   );
// }

//lazy loading example

// function App() {
//   const [load, setLoad] = useState(false);
//   return (
//     <>
//       <div>
//         <h1>Lazy Loading</h1>
//         {load ? (
//           <Suspense fallback={<h3>loading...</h3>}>
//             <User />
//           </Suspense>
//         ) : null}

//         <button onClick={() => setLoad(true)}>Load User</button>
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <>
      <ColorMixer />
    </>
  );
}
export default App;
