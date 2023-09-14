import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestuarantMenu from "./src/components/RestuarantMenu";
import Grocery from "./src/components/Grocery";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

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
