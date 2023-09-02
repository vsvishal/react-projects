import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let name = "Vishal Sharma";
const myobj = { usrname: "Bhau Sharma", age: 26 };
const myarr = [1, 2, 3];

const myReactElement = React.createElement(
  "h1",
  { style: { backgroundColor: "#212121", color: "white" } },
  "Hello World !",
  myarr
);

function User({ data: { usrname, age } }) {
  return (
    <>
      <h1>
        {" "}
        My name is {usrname} {age}{" "}
      </h1>
    </>
  );
}

// console.log(myReactElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<User data={myobj} />);

reportWebVitals();
