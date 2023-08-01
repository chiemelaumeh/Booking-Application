import { Link, useNavigate  } from "react-router-dom";
import "./profileBox.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi"
import { HiOutlineLockClosed } from "react-icons/hi"
import { PiBuildingsLight } from "react-icons/pi"
import { AiOutlineUser } from "react-icons/ai"
import axios from "axios";
import GlobalContext from "../../context/GlobalContext";




const ProfileBox = () => {
  const navigate = useNavigate()
  const { setProfileBox } = useContext(GlobalContext)
  const { dispatch, user } = useContext(AuthContext);
  const handleClick = async () => {
    dispatch({ type: "LOGOUT" });
    try {
      await axios.get("/auth/logout");
    } catch (error) {}
  };

  return (
    <div className="profileBox">
      <div onClick={()=> setProfileBox(false)} className="profileBoxContainer">
        <div className="profileBoxList border-buttom">
          <AiOutlineUser className="profileIcon" /> Profile
        </div>
        <div className="profileBoxList border-buttom">
          <HiOutlineLockClosed className="profileIcon" /> Change Password
        </div>
        <div onClick={()=> navigate("/addProperty", { state: {user}})} className="profileBoxList border-buttom">
          <PiBuildingsLight className="profileIcon" />
          Add a Property
        </div>
        <div onClick={handleClick} className="profileBoxList ">
          <BiLogOut className="profileIcon" /> Log out
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
