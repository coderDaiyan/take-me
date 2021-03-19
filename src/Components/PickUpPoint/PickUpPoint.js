import React from "react";
import "./PickUpPoint.css";
import Map from "../../assets/images/Map.png";
import searchResult from "../../fakeData/searchResult.json";

const PickUpPoint = () => {
  const handleSearch = () => {};
  return (
    <div className="parent" style={{ marginTop: "7rem" }}>
      <div className="pick-up">
        <h5>Pick From</h5>
        <input className="form-control mt-3 mb-3" type="text" />
        <h5>Pick To</h5>
        <input className="form-control mt-3 mb-3" type="text" />
        <button className="w-100 btn btn-success" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="map">
        <img className="map-img" src={Map} alt="" />
      </div>
    </div>
  );
};

export default PickUpPoint;
