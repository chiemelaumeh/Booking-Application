import React from "react";
import "./addProperty.css";
import { useLocation } from "react-router-dom";
import upload from "../../assets/upload.png";

const AddProperty = () => {
  const location = useLocation();
  return (
    <>
      <div className="addProperty">
        <div className="addPropertyContainer">
          <div className="addPropertySection">
            
          </div>
          <div className="addPropertySection">
            <div className="imageRow">
              <div className="imageSection">
                <img src={upload} className="imageBox" alt="" />
                <input className="rf" type="file" title=" " name="" id="" />
              </div>
              <div className="imageSection">
                <img src={upload} className="imageBox" alt="" />
                <input className="rf" type="file" name="" id="" />
              </div>
              <div className="imageSection">
                <img src={upload} className="imageBox" alt="" />
                <input className="rf" type="file" name="" id="" />
              </div>
            </div>
            <div className="imageRow">
              <div className="imageSection">
                <img src={upload} className="imageBox" alt="" />
                <input className="rf" type="file" name="" id="" />
              </div>
              <div className="imageSection">
                <img src={upload} className="imageBox" alt="" />
                <input className="rf" type="file" name="" id="" />
              </div>
              <div className="imageSection">
                <img src={upload} className="imageBox" alt="" />
                <input className="rf" type="file" name="" id="" />
              </div>
            </div>
            <div className="submitContiner">

            <button className="submitButton">Create Propery</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
