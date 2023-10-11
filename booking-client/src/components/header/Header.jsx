import "./header.css";
import SearchContext from "../../context/SearchContext";
import { useContext, useState } from "react";
import { FaBed } from "react-icons/fa";
import { BiSolidPlane } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PiPersonFill } from "react-icons/pi";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const { profileBox, setProfileBox } = useContext(GlobalContext);
  const [openDates, setOpenDates] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    // localStorage.setItem("dates", JSON.stringify(dates))
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        
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
            <span onClick={()=> setProfileBox(!profileBox)}>Rentals</span>
          </div>
          <div className="headerListItem">
            <FaBed />
            <span>Attractions</span>
          </div>
          
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">The joy of home wherever you go</h1>
            <p className="headerDesc">
              Take your longest vacation yet. Fly away to your dream vacation
            </p>
            {!user && (
              <Link to={"/login"}>
                <button className="headerBtn">Sign in / Register</button>
              </Link>
            )}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem" >
                <SlCalender className="headerIcon" />
                <span
                  onClick={() => setOpenDates(!openDates)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )} `}</span>
                {openDates && (
                  <DateRange
                    minDate={new Date()}
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem" >
                <PiPersonFill className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        ></button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtnLow" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
