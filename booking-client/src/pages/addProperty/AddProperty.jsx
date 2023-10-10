import React, { useContext } from "react";
import { useState } from "react";
import "./addProperty.css";
import axios from "axios";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/upload.png";
import AddPropertyContext from "../../context/AddPropertyContext";

const AddProperty = () => {
  const [propertyFields, setPropertyFields] = useState({
    name: "",
    address: "",
    title: "",
    desc: "",
    city: "",
    type: "",
    distance: "",
    cheapestPrice: "",
  });
   const navigate = useNavigate();
  const [emptyField, setEmptyField] = useState(Object.keys(propertyFields));
  const handleChange = (e) => {
    setPropertyFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const location = useLocation();
  const { newProperty, loading, error, dispatch } =
    useContext(AddPropertyContext);

  const handleClick = async (e) => {
    e.preventDefault();
    // dispatch({ type: "ADD_START" });
    const empty = Object.values(propertyFields);

    if (empty.includes("")) {
      setEmptyField(empty);
      return;
    }
    try {
      const response = await axios.post("/hotels", propertyFields);
      console.log(response)
      dispatch({ type: "ADD_SUCCESS", payload: response.data });
      console.log(newProperty)
    } catch (error) {
      dispatch({ type: "ADD_FAILURE", payload: error.response.data });
      console.log(console.error)
    }
  };

  return (
    <>    
      <div className="addProperty">
      <AiOutlineCloseCircle onClick={()=>navigate("/")} className="close-icon" />
        <div className="addPropertyText">
          <div className="title-address">
            <div className="spanDiv">
              <span className="label">
                Property Name
                {!emptyField[0] && (
                  <span className="emptyField"> Input required</span>
                  )}
              </span>

              <input
                type="text"
                value={propertyFields.name}
                id="name"
                className="title-address-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">
                Property Address{" "}
                {!emptyField[1] && (
                  <span className="emptyField"> Input required</span>
                  )}
              </span>
              <input
                type="text"
                value={propertyFields.address}
                id="address"
                className="title-address-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">
                Property Title{" "}
                {!emptyField[2] && (
                  <span className="emptyField"> Input required</span>
                )}
              </span>
              <input
                type="text"
                value={propertyFields.title}
                id="title"
                className="title-address-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">
                Property Description{" "}
                {!emptyField[3] && (
                  <span className="emptyField"> Input required</span>
                )}
              </span>
              <textarea
                type=""
                value={propertyFields.desc}
                id="desc"
                className="title-address-input textarea"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="city-type">
            <div className="spanDiv">
              <span className="label">
                City{" "}
                {!emptyField[4] && (
                  <span className="emptyField"> Input required</span>
                )}
              </span>
              <input
                type="text"
                value={propertyFields.city}
                id="city"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">
                Property Type{" "}
                {!emptyField[5] && (
                  <span className="emptyField">Input required</span>
                )}
              </span>
              <input
                type="text"
                value={propertyFields.type}
                id="type"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">
                Distance from city center{" "}
                {!emptyField[6] && (
                  <span className="emptyField"> Input required</span>
                )}
              </span>
              <input
                type="text"
                value={propertyFields.distance}
                id="distance"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">
                Cheapest Price{" "}
                {!emptyField[7] && (
                  <span className="emptyField"> Input required</span>
                )}
              </span>
              <input
                placeholder="Numbers Only"
                value={propertyFields.cheapestPrice}
                id="cheapestPrice"
                type="number"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="addPropertyContainer">
          <div className="imageRow">
            <div className="imageSection">
              <img src={upload} className="imageBox" alt="" />
              <input
                className="choose-file"
                type="file"
                title=" "
                name=""
                id=""
              />
            </div>
            <div className="imageSection">
              <img src={upload} className="imageBox" alt="" />
              <input className="choose-file" type="file" name="" id="" />
            </div>
            <div className="imageSection">
              <img src={upload} className="imageBox" alt="" />
              <input className="choose-file" type="file" name="" id="" />
            </div>
          </div>
          <div className="imageRow">
            <div className="imageSection">
              <img src={upload} className="imageBox" alt="" />
              <input className="choose-file" type="file" name="" id="" />
            </div>
            <div className="imageSection">
              <img src={upload} className="imageBox" alt="" />
              <input className="choose-file" type="file" name="" id="" />
            </div>
            <div className="imageSection">
              <img src={upload} className="imageBox" alt="" />
              <input className="choose-file" type="file" name="" id="" />
            </div>
          </div>
          <div className="submitContiner"></div>
          <button
            disabled={loading}
            onClick={handleClick}
            className="submitButton"
          >
            Create Property
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
