import { CDN_URL } from "../utils/constants";

function Card({ restaurant }) {
  // console.log("restaurant: ", restaurant);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    restaurant.info;

  const cardStyle = {
    backgroundColor: "gray",
  };
  return (
    <div className="res-card" style={cardStyle}>
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="food" />
      <div className="details">
        <h3>{name} </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>⭐️ {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
        <h4>21 minutes</h4>
      </div>
    </div>
  );
}

export default Card;
