import { Link } from "react-router-dom";
import "../header/header.css";
import {BsFillBuildingFill} from "react-icons/bs"

const ProfileBox = () => {
  return (
    <div className="profileBox">
      <div className="profileBoxContainer">
        <div className="profileBoxList border-buttom">
        <BsFillBuildingFill className="profileIcon"/> Profile
        </div>
        <div className="profileBoxList border-buttom">
          <BsFillBuildingFill className="profileIcon"/> Password
        </div>
        <div className="profileBoxList border-buttom">
          <BsFillBuildingFill className="profileIcon"/>Add a Property
        </div>
        <div className="profileBoxList">
        <BsFillBuildingFill className="profileIcon"/>  Log out
        </div>

        
      </div>
    </div>
  );
};

export default ProfileBox;
