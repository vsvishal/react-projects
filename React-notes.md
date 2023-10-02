# 🤠 React Notes 🤠

## 🤓 React Fiber Architecture

[👆 website: github](https://github.com/acdlite/react-fiber-architecture)

### What is reconciliation?

### The algorithm React uses to diff one tree (older Virtual dome) with another (newer virtual dome) to determine which parts need to be changed.

## Comparing objects is easier and faster than comparing objects and HTML, so Virtual Dom at the end is an object

### update - A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

### Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

#

## Difference between tilde ( ~ ) and caret ( ^ ) in package.json

[👆 website: geeksforgeeks](https://www.geeksforgeeks.org/difference-between-tilde-and-caret-in-package-json/)

### 🤓 Tilde (~) notation: It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version. As we know patch updates are bug fixes that’s why we can say ~ notation allows us to automatically accept bug fixes.

### Caret (^) notation: It is used for automatically updating minor updates along with patch updates.

### Syntax: The syntax of the npm version looks like the following.

### Major.Minor.Patch

#

## 🤓 Package.json vs Package-lock.json

[👆 website: atatus](https://www.atatus.com/blog/package-json-vs-package-lock-json/#:~:text=your%20entire%20problem.-,package%2Dlock.,sub%2Ddependencies%20and%20their%20versions.)

### Package.json is a file that contains all the relevant information about your project, the dependencies it has installed, and so on.

### When someone clones your repo and runs npm install the presence of ^ will cause them to get the latest patched version (whether that be a major or minor patch). Codes that are not in consonance with the latest version will break down.

### This is when they released package-lock.json. Now, this file will lock npm dependencies the way they were at the time of making the program. So, even if someone clones your repo and installs this package later, he will get hands on the version that the program was scripted in. Basically, it just ignores tilde and carat functions.

#

### 👨‍🚀 Transitive Dependency - The Package installed has another package dependency, the same way the dependent package has another package dependency, and it continues.....

### 👨‍🚀 To ignite the app using the parcel package use the below cmd

```sh
    npx parcel index.html - for dev build
    npx parcel build index.html - for prod build
```

### 👨‍🚀 NPX is a package executer, and it is used to execute javascript packages directly, without installing them

### browserslist package - The browsers to which you want your web to support

[👆 website: browserslist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

#

### Update "scripts" in package.json to make the command short to start the application

### So next time instead of running full cmd, just use "npm run start / npm start" (only for dev) but for prod, full cmd is required "npm run build"

```json
"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```

#

### 👨‍🚀 JSX is not HTML is JS, it is HTML/XML like syntax

### 👨‍🚀 Babel converts (transcompiles) the JSX code to JS code which the browser understands

### 👨‍🚀 JSX => React.createElement => ReactElement - JS object => HTMLElement (render) [This all things are done by Babel]

### 👨‍🚀 Babel is a Javascript compiler

### 👨‍🚀 Always start the React Component name with a capital letter

## 👨‍🚀 React Functional component is a normal JS function that returns some JSX (React element)

## 👨‍🚀 Component Composition is composing one component into one another

## 👨‍🚀JSX doesn't directly execute/replace {variable}, its do some sanitization before it, so it avoids any kind of attacks.

```javascript
// React Element
const title = <h2>I am title React element</h2>;

// React Component
const TitleComponent = () => {
  return <h3>I am Title Component</h3>;
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
```

## 👨‍🚀 The First thing before starting to develop the react app is to create a visualization (plan)

## 👨‍🚀 Add extension JSON viewer in Chrome

## 👨‍🚀 useCallback(fn, [dependencies]) - This hook is used to optimize the running of Function if something is done on its dependencies, basically it caches to optimize the running of Function again. It memorizes the function

## 👨‍🚀 useEffect(fn, [dependencies]) - If anything changes in dependencies then run the Function. It will get always called after the 1st-time component is rendered (after the body is loaded). If you want to do anything after rendering a component then use this.

## 👨‍🚀 If I need a reference for anything then use the userRef() hook

## 👨‍🚀 Config driven UI - It means controlling your UI through data

## 👨‍🚀 Whenever you loop the list always add unique key={uniqui_id} to it, if you don't provide a key e.g. while looping array through map() then React will re-render all the elements which is not good for optimization. So, by adding a key, React will re-render only the changed thing. To allow React to uniquely identify the element always use the key, so performance will be good. It will called after the component has been rendered.

## 👨‍🚀 React doesn't recommend using the index as a key, if you don't have any unique index then use the index as a key.

## 👨‍🚀 A module cannot have multiple default export, in one file only one default export is allowed

```javascript
  // Below is not allowed if it is done in the same JS file
  export default CDN_URL;
  export default LOGO_URL

  // For multiple export use Named export
  export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/123/";
  export const LOGO_URL = "https://img.freepik.com/free-vector/fast-free-deliver";

  // Named import is imported like
  import { CDN_URL } from "../utils/constants";
```

## 👨‍🚀 Whenever a state variable updates, React re-renders the component

## 👨‍🚀 If you don't use the hook var, and try to update the normal var, then react will not re-render the component.

## 👨‍🚀 React helps in syncing the UI layer with the Data layer

## 👨‍🚀 React is fast because it is doing efficient DOM manipulation

## 👨‍🚀 Separation of concerns and single responsibility principles in Microservice is where each service has its own job.

## 👨‍🚀 Better UI approach (UI Loads => Render the skeleton => API call => Rerender)

## 👨‍🚀 If you try to hit Swiggy API it will get blocked by CORS (error: has been blocked by CORS policy: No 'Access-Control-Allow-Origin'), since localhost, CORS is different than Swiggy server CORS. To bypass it add the Cors Chrome extension

## 👨‍🚀 useId() hook

## 👨‍🚀 Shimmer UI: A Better Way to Show Loading States, to show the skeleton of the app.

## 👨‍🚀 `javascript const [btnName, setBtnName] = useState("Login");` This btnName var is constant, react is not changing its value, actually during rerender, it creates new var when again component is loaded.

## 👨‍🚀 Whenever the React state variable changes, React re-renders that component again

## 👨‍🚀 UseEffect()

```javascript
  useEffect(callBackFun, dependency array);

  // If no dependecy array is given then useEffect() will run every time that component render
  useEffect(callBackFun)

  // If dependecy array is empty [], then useEffect() will run only once when 1st time component render
  useEffect(callBackFun, [])

  // If the dependency array is [btnName] then it is called every time btnName is updated
    useEffect(() => {
    console.log("Header useEffect() called");
  }, [btnName]);
```

## 👨‍🚀 Never create a hook outside the component, otherwise it will throw an error. And always keep the hook at the top

## 👨‍🚀 useState() hook is used for creating local state variables inside the component.

## 👨‍🚀 Never create a hook inside another function, loop, or condition.

```javascript
  useRouteError() hook from "react-router-dom" helps us in giving exact/precise error
  import { useRouteError } from "react-router-dom";
```

```javascript
// Link from react-router-dom is used to navigate the page without loading the all page, only particular components get loaded
<li>
  <Link to={"/about"}>About Us</Link>
</li>
```

## 👨‍🚀 There are 2 types of routing in web apps

- Client Side Routing (SPA uses this)
- Server Side Routing

## 👨‍🚀 Cannot destructure Property of Undefined

```javascript
// Provide a fallback of an empty object if obj may be null
// https://bobbyhadz.com/blog/javascript-cannot-destructure-property-of-undefined
const { name } = resInfo || {};
```

## 👨‍🚀 In class base component 1st constructor is called => render() is called => componentDidMount() is called when the componet has already mounted

## 👨‍🚀 If ther is Parent Child component then, 1st Parents constructor is called => render() is called => Childs constructor is called => Child render() is called => Child componentDidMount() is called then => Parents componentDidMount() is called.

### componentDidMount() is used to make API calls.

```javascript
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  - Parent Constructor()
  - Parent render()

    // Render is done in a single batch, this is the render phase
    - First Child Constructor()
    - First Child render()

    - Second Child Constructor()
    - Second Child render()

    // Dom updates in a single batch, here react tries to optimize since Dom manipulation is expensive. This is the "commit" phase
    - First Child componentDidMount()
    - Second Child componentDidMount()

  - Parent componentDidMount()

  // componentWillUnmount() will  get called when we are leaving the page, it was used for a clean-up activity, suppose you have created setInterval() inside componentDidMount() and you forgot to clean up inside componentWillUnmount(), then even if you leave the page, the timer will keep running which is bad.
```

## 👨‍🚀 Always follow the Single Responsibility principle when writing code

## 👨‍🚀 Dynamic bundling / Code splitting / Chunking / Lazy loading/On-demand loading / Dynamic import (If we don't do this, then a single JS bundle will contain all the component code, which will make the bundle very heavy)

- ➡️ When you do system design planning for the front-end, then do Logical separation of bundles. (i.e. Bundle should have enough code for that feature)
- ➡️ From Network tab => JS => in browser you can check bundle

## 👨‍🚀 Different way of writing CSS

1. Sass (Not recommended way)
2. styled-components
3. Material UI (library)
4. Bootstrap
5. Chakra UI
6. Ant Design
7. Tailwind CSS (MOST POPULAR)

## Steps to create a new react project using parcel

1. Create App.js, index.html, index.css
2. npm init
3. npm install -D parcel

## 👨‍🚀 To ignite the app using the parcel package use the below cmd

```javascript
    npx parcel build index.html - for prod build
    npx parcel index.html - for dev build
```

## 👨‍🚀 Higher Order component

- It is a function that takes in a component enhances the received component and returns back
- It is a Pure function, which means it does not change any behavior of received component
- It just enhances the component (adds something on top of it) and returns back

## 👨‍🚀 Can I modify the state variable of Parent from Children (Lifting the state up)

https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

- It's not possible to directly
- We can create a state handler function in the parent component and pass it as a prop of the child component. After that, we can use the child component function to set the parent component's state. In such a way, we can manage the state of the parent component from the child component.

## 👨‍🚀 To avoid prop drilling (passing props from top-level component to way down to component) use React context()

## 👨‍🚀 Redux is not a mandatory tool to use in React, the application state also can be managed without Redux in React. Mostly use Redux for very large applications. Use "Redux Toolkit" instead of native "React-Redux", it simplifies.

## 👨‍🚀 There are various external libraries like Redux

- Redux (One advantage of Redux is application becomes easier to debug)
- zustand

## 👨‍🚀 Redux

- Redux store is a big javascript object that is kept in a Global central space
- To avoid the Redux store from becoming very large, clumsy there are slices in the Redux store (e.g. loggedIn users slice, cart slice)
- [For Write Data] e.g. When you click on button => Redux dispatches an "Action" => Action calls the "Function" (Reducer) => then this Function updates the slice of Redux store [modies the required thing (e.g Cart)]
- For Reading Data we use "Selector" also known as "Subscribing to store" (If data in store changes, the component updates automatically). React Subscribe through selector
- While subscribing to the store, only subscribe to a specific portion of the store which is required otherwise it will hit performance.
- ```javascript
  // Subscribing to the specific slice of store using a Selector, good for performance
  const cartItems = useSelector((store) => store.cart.items);

  // Below is bad for performance, since here the whole store is subscribed, so if anything changes in the store, it loads the complete store again.
  const store = useSelector((store) => store);
  const cartItems = store.cart.items;


  //
   clearCart: (state) => {
      state.items.length = 0;
      console.log(state) // It will not print the log in console properly

      // For seeing log properly use current
      import { current } from "@reduxjs/toolkit";
      console.log(current(state))

      // state = [] - not allowed, if you do, it is not mutating the state, it only changes the reference
      <!-- return {items: []} // it will work, since here you are mutating the state -->
    },
  ```

![Redux theory](https://github.com/vsvishal/react-projects/blob/09c1bc54a9ad14192b406e4f7570dbd58ed2d7f8/images/redux-theory.jpg)

- ```javascript
  <!-- Vanilla (older) Redux => DON'T MUTATE THE STATE, used to follow below coding practice, returning was mandatory -->
    const newState = [...state];
    newState.items.push(action.payload);
    return newState;

  <!-- In the newer version current, Redux toolkit, we have to mutate the state or return a new state, no need to return anything,
  currently it does the same thing as an older version behind the scene with the help of the "immer" library -->
    state.items.push(action.payload)
  ```

## 👨‍🚀 Types of testing (developer can write)

- Unit Testing - Testing 1 component in isolation
- Integration Testing
- End to End Testing (e2e testing)

## 👨‍🚀 React Testing Library

- React Testing Library builds on top of the DOM Testing Library by adding APIs for working with React components.
- Specific to a testing framework (though we recommend Jest as our preference, the library works with any framework).

### Testing dependency Installation

1. npm install --save-dev @testing-library/react
2. npm install --save-dev jest
3. npm install --save-dev babel-jest @babel/core @babel/preset-env
4. Configure babel.config.js

5. Now Jest Babel will conflict with Parcel Babel to avoid this create ".parcelrc" & add the required configuration
   To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.
6. Jest configuration (npx jest --init)
   ![jest init](https://github.com/vsvishal/react-projects/blob/0f963c2652dceea25556a1f2608b82a3400efcfd/images/jest-init.png)

```javascript
.parcelrc:
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }

}
```

[👆 website: parceljs](https://parceljs.org/languages/javascript/#babel)

7. npm install --save-dev jest-environment-jsdom
8. npm i -D @babel/preset-react - to make JSX work with test cases
9. Include @babel/preset-react inside my babel
10. Add this to "babel.config.js"
11. npm i -D @testing-library/jest-dom

```javascript
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { targets: { runtime: "automatic" } }],
  ],
};
```

### 👨‍🚀 Whenever you are testing the UI component in React, you have to render that component on the JSDom 1st.

```javascript
// Test Case Example
import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test case fun name can be it or test both are same
test("Should load heading inside Contact component", () => {
  render(<Contact />);

  // Quering
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

// To group multiple test cases use describe()
describe("Contact Us Page Test Case", () => {});
```

- If you don't have anything to find the element then add data-testid="" inside the element

```javacript
 const searchInput = screen.getByTestId("searchInput");
```

- act() - whenver your component is updating the state or it has async rap under act()
- You can check the coverage report in the browser by going to "coverage" folder => "lco-report" => "index.html"
