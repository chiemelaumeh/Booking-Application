import "./header.css";
import { FaBed } from "react-icons/fa";
import { BiSolidPlane } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <BiSolidPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <AiFillCar />
            <span>Car rentas</span>
          </div>
          <div className="headerListItem">
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airpot taxis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
