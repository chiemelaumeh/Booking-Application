import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Reserve from "../../components/reserve/Reserve";
import { FaBed } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";

import "./hotel.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import SearchContext from "../../context/SearchContext";
import AuthContext from "../../context/AuthContext";

const Hotel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const { dates, destination, options } = useContext(SearchContext);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };


  function dayDifference(date1, date2) {
    const milliSecondsPerDay = 1000 * 60 * 60 * 24;
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / milliSecondsPerDay);
    return diffDays;
  }
 
  const days = dayDifference(dates[0].startDate, dates[0].endDate);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <GrClose className="close" onClick={() => setOpen(false)} />
              <AiOutlineArrowLeft
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <AiOutlineArrowRight
                className="arrow"
                onClick={() => handleMove("")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button onClick={handleClick} className="bookNow">
              Reserve or book now
            </button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <ImLocation2 />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance} from city center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * options.room  * data.cheapestPrice }</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal &&
       <Reserve setOpenModal={setOpenModal} hotelId={id} />
       }
    </div>
  );
};

export default Hotel;
