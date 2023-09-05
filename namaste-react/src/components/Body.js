import Card from "./Card";
import "./Body.css";
import resDataList from "../utils/mockData";
import { useEffect, useState } from "react";

function Body() {
  const [restaurants, setRestaurants] = useState(resDataList);

  useEffect(() => {
    console.log("useEffect() called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5184278&lng=73.9775314&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);
  };

  console.log("I am inside body");

  const highestRatingResHandler = (resDataList) => {
    let filteredRes = resDataList.filter((rest) => rest.info.avgRating >= 4.5);
    setRestaurants(filteredRes);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => highestRatingResHandler(resDataList)}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
