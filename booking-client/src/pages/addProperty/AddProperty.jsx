import React from "react";
import "./addProperty.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import upload from "../../assets/upload.png";

const AddProperty = () => {
  const location = useLocation();
  return (
    <>
      <div className="addProperty">
        <div className="addPropertyText">
          <div className="title-address">
            <div className="spanDiv">
              <span className="label">Property Name</span>
              <input type="text" className="title-address-input" />
            </div>
            <div className="spanDiv">
              <span className="label">Property Address</span>
              <input type="text" className="title-address-input" />
            </div>
            <div className="spanDiv">
              <span className="label">Property Title</span>
              <input type="text" className="title-address-input" />
            </div>
            <div className="spanDiv">
              <span className="label">Property Desciption</span>
              <textarea type="" className="title-address-input textarea" />
            </div>
          </div>
          <div className="city-type">
            <div className="spanDiv">
              <span className="label">City</span>
              <input type="text" className="city-type-input" />
            </div>
            <div className="spanDiv">
              <span className="label">Property Type</span>
              <input type="text" className="city-type-input" />
            </div>
            <div className="spanDiv">
              <span className="label">Distance from city center</span>
              <input type="text" className="city-type-input" />
            </div>
            <div className="spanDiv">
              <span className="label">Cheapest Price</span>
              <input type="text" className="city-type-input" />
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
          <div className="submitContiner">
          </div>
            <button className="submitButton">Create Property</button>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
