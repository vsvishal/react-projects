import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// // React Element
// const title = <h2>I am title React element</h2>;

// // React Component
// const TitleComponent = () => {
//   return <h3>I am Titile Component</h3>;
// };

// const HeadingComponent = () => {
//   return (
//     <>
//       <h1 className="head">This is Heading Component</h1>
//       {title}
//       <TitleComponent />
//       <p>Lorem ipsum dolor sit amet.</p>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
