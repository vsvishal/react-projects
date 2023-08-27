const heading = React.createElement(
  "h1",
  { id: "heading", style: { backgroundColor: "green" } },
  "Hello world from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from Javascript";

// root.appendChild(heading);
