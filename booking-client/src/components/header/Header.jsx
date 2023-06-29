import "./header.css";
import { FaBed } from "react-icons/fa";
import { BiSolidPlane } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
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
        <h1 className="headerTitle">The joy of home wherever you go</h1>
        <p className="headerDesc">
          Take your longest vacation yet. Fly away to your dream vacation
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <SlCalender className="headerIcon" />
            <span className="headerSearchText">Date to Date</span>
          </div>
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
