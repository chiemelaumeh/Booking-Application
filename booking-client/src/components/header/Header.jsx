import "./header.css";
import { useState } from "react";
import { FaBed } from "react-icons/fa";
import { BiSolidPlane } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
            <span>Airport taxis</span>
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
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <SlCalender className="headerIcon" />
            <span className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
