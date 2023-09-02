import "./Card.css";

function Card({ resName, cuisine }) {
  const cardStyle = {
    backgroundColor: "gray",
  };
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="card-img"
        src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35126.jpg?w=1060"
        alt="food"
      />
      <div className="details">
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.9 star</h4>
        <h4>21 minutes</h4>
      </div>
    </div>
  );
}

export default Card;
