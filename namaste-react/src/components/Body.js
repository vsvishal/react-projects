import Card from "./Card";
import "./Body.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    // console.log("restaurantList : ", restaurantList);

    setRestaurants(restaurantList);
    setAllRestaurants(restaurantList);
  };

  console.log("I am inside body");

  const highestRatingResHandler = (resDataList) => {
    let filteredRes = resDataList.filter((rest) => rest.info.avgRating >= 4.5);
    setRestaurants(filteredRes);
  };

  const searchRestHandler = () => {
    const searchRest = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(searchRest);
  };

  // Conditional Rendering
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are Offline !! Please check your internet connection
      </h1>
    );
  }

  return restaurants?.length === 0 ? (
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
          <button className="search-btn" onClick={searchRestHandler}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => highestRatingResHandler(allRestaurants)}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {restaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Card restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
