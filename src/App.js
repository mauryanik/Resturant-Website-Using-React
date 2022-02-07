import React from 'react'
// import Resturant  from './Component/Basics/Resturant'
// import UseState from './Component/hooks/useState'
//import UseEffect from './Component/hooks/UseEffect';
import Todo from './Component/todoreact/todo';
import Temp from './Component/weather/temp';
export const App = () => {
  return (
    <div>
      <Temp />
    </div>
  )
};

 //import reactDom from "react-dom"

// // export const App = () => {
// //   return (
// //     <div>
// //       Welcome to my Website.
// //     </div>
// //   )
// // }

// const App = () => {
//   return (
//     //React.fragment
//     <>
//       <MyName />
//       <MyName />
//       <MyName />
//       <h1 className="myclassName">Hello React!!! {3 + 5} </h1>
//       <p>react is good</p>
//       <img src="" alt="" />
//       <h4></h4>
//     </>
    
//   );
// };
// const MyName = () => {
//   return <h4>Nikesh Kumar Maurya </h4>
// }

//how react is actually looking into it
// const App = () => {
//   return React.createElement("h1", {}, "Hello React");
// }
export default App