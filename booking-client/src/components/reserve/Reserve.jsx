import "./reserve.css";
import useFetch from "../../components/hooks/useFetch";
import { useContext, useState } from "react";
import SearchContext from "../../context/SearchContext";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpenModal, hotelId }) => {
  const navigate = useNavigate()
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return isFound;
  };

  const handleClick = async() => {
      
    try {
         await Promise.all(selectedRooms.map((roomId)=> {
        const response = axios.put(`/rooms/availability/${roomId}`, {dates: allDates})
        return response.data
      }))
      setOpenModal(false)
      navigate("/")
    } catch (error) {
      
    }
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <button onClick={() => setOpenModal(false)} className="rClose">
          X
        </button>
        <span>Select your rooms:</span>
        {data &&
          data.map((item, i) => (
            <div className="rItem" key={i}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people <b>{item.maxPeople}</b>
                </div>
                <div className="rPricw">{item.price}</div>
              </div>
              {item.roomNumbers.map((roomNumber, i) => (
                <div className="room" key={i}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
