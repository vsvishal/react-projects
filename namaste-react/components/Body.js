import Card from "./Card";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Card resName="Vishal's Food" cuisine="Special Indian Thali" />
        <Card resName="Khana Khajana" cuisine="North Indian Food, Spicy" />
      </div>
    </div>
  );
}

export default Body;
