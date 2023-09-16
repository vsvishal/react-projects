import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestuarantMenu from "./RestuarantMenu";
import Shimmer from "./Shimmer";

const Grocery = lazy(() => import("./Grocery"));

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
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
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
