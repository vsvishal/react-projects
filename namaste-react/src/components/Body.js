import Card from "./Card";
import "./Body.css";
import resDataList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect() called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5184278&lng=73.9775314&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    // console.log(jsonData);
    const restaurantList =
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(restaurantList);
    setAllRestaurants(restaurantList);
  };

  console.log("I am inside body");

  const highestRatingResHandler = (resDataList) => {
    let filteredRes = resDataList.filter((rest) => rest.info.avgRating >= 4.5);
    setRestaurants(filteredRes);
  };

  // Conditional Rendering
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchRest = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurants(searchRest);
            }}
          >
            Search
          </button>
        </div>
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
