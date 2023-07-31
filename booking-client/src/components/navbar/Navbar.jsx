import { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import GlobalContext from "../../context/GlobalContext";
import { HiOutlineMenu } from "react-icons/hi";
import ProfileBox from "../profileBox/ProfileBox";
import axios from "axios";

const Navbar = () => {
  const { profileBox, setProfileBox } = useContext(GlobalContext);

  const handleClick = async () => {
    dispatch({ type: "LOGOUT" });
    try {
      await axios.get("/auth/logout");
    } catch (error) {}
  };
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">myBooking</span>
        </Link>

        {profileBox && <ProfileBox />}
        {user ? (
          <>
          
            <HiOutlineMenu
              onClick={() => setProfileBox(!profileBox)}
              className="navIcon"
            />
          </>
        ) : (
          <div className="navItems">
            <Link to={"/register"}>
              <button className="navButton">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
