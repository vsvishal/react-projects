import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-conatainer">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-49146.jpg?w=740&t=st=1693377426~exp=1693378026~hmac=bc133e342a3c1d2624769f27a2f37e19cce91209ae4cbd82a82e333866c99466"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
