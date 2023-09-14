import "./Header.css";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  // This btnName var is constant, react is not changing its value, actually during rerender, it creates new var,
  // since again Header component is loaded
  const [btnName, setBtnName] = useState("Login");
  console.log("Header component");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-conatainer">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlineStatus === true ? "🟢" : "🔴"} </li>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "white" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to={"/grocery"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
