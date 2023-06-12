// import React from "react";
// import ReactDOM from "react-dom";
// import "../styles/index.css";
// import SecondsCounter from "./component/counter.jsx";

// let counter = 0;
// function renderCounter() {
//     ReactDOM.render(
//         <Counter count={counter} color="#1A120B" />,
//         document.querySelector('#app')
//     )
//     counter++;
// }
// setInterval(renderCounter, 1000);

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/counter.jsx";

//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
