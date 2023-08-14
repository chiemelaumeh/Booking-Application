import React from "react";
import { useState } from "react";
import "./addProperty.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import upload from "../../assets/upload.png";

const AddProperty = () => {
  const [propertyFields, setPropertyFields] = useState({
    name: "",
    address: "",
    title: "",
    desc: "",
    city: "",
    type: "",
    distance: "",
    cheapestPrice: 0,
  });

  const handleChange = (e) => {
    setPropertyFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const location = useLocation();
  return (
    <>
      <div className="addProperty">
        <div className="addPropertyText">
          <div className="title-address">
            <div className="spanDiv">
              <span className="label">Property Name</span>
              <input
                type="text"
                value={propertyFields.name}
                id="name"
                className="title-address-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">Property Address</span>
              <input
                type="text"
                value={propertyFields.address}
                id="address"
                className="title-address-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">Property Title</span>
              <input
                type="text"
                value={propertyFields.title}
                id="title"
                className="title-address-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">Property Description</span>
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
              <span className="label">City</span>
              <input
                type="text"
                value={propertyFields.city}
                id="city"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">Property Type</span>
              <input
                type="text"
                value={propertyFields.type}
                id="type"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">Distance from city center</span>
              <input
                type="text"
                value={propertyFields.distance}
                id="distance"
                className="city-type-input"
                onChange={handleChange}
              />
            </div>
            <div className="spanDiv">
              <span className="label">Cheapest Price</span>
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
          <button className="submitButton">Create Property</button>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
