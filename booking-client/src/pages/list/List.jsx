import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { format } from "date-fns";
import { useLocation} from "react-router-dom";
import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../components/hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination || "london");
  const [dates, setDates] = useState(location.state.dates || [{
    endDate: new Date(),
    startDate: new Date(),
    key: "selection",
  
  }]);
  const [options, setOptions] = useState(location.state.options || {adult: 1, children: 0, room: 1});
  const [openDates, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, refetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`);



  const handleClick = () => {
    refetch()
    
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} onChange={(e) => setDestination(e.target.value)}type="text" />
            </div>
            <div className="listItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDates)}>
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )} `}
              </span>
              {openDates && (
                <DateRange
                  onChange={(item) => setDates ([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price
                    <small>per night</small>
                  </span>
                  <input type="text" onChange={(e) => setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price
                    <small>per night</small>
                  </span>
                  <input type="text" onChange={(e) => setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={0}
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data &&
                 data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
