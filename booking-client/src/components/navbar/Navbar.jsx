import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">myBooking</span>
        </Link>

        {user ? 
        <>
         <p>{user.username}</p>
         <button className="navButton">{user.username}Logout</button>
        </>
        
        :  (
          <div className="navItems">
            <button className="navButton">Register</button>
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
