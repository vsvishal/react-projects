import "./Card.css";

function Card({ restaurant }) {
  // console.log("restaurant: ", restaurant);

  const { name, cuisines, avgRating, costForTwo, locality } = restaurant.info;

  const cardStyle = {
    backgroundColor: "gray",
  };
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="card-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
        alt="food"
      />
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
