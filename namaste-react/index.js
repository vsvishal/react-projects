import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", style: { backgroundColor: "green" } },
//   "Hello world from React"
// );

// React Element
const title = <h2>I am title React element</h2>;

// React Component
const TitleComponent = () => {
  return <h3>I am Titile Component</h3>;
};

const HeadingComponent = () => {
  return (
    <>
      <h1 className="head">This is Heading Component</h1>
      {title}
      <TitleComponent />
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from Javascript";

// root.appendChild(heading);
