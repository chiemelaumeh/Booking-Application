import { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { HiOutlineMenu } from "react-icons/hi"
import axios from "axios"


const Navbar = () => {
  const [profileBox, setProfileBox] = useState(false)

  const handleClick = async() => {

    dispatch({ type: "LOGOUT" });
    try {
      await axios.get("/auth/logout")
    } catch (error) {
      
    }
    
  }
  const { user, dispatch } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">myBooking</span>
        </Link>

        {user ? (
          <>
            {/* <button onClick={handleClick} className="navButton">
              Logout
            </button> */}
            <HiOutlineMenu onClick={()=> setProfileBox(!profileBox)} className="navIcon"/>

          </>
        ) : (
          <div className="navItems">
            <Link
            to={"/register"}
            >
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
