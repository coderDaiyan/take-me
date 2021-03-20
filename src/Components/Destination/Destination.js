import React, { useState } from "react";
import "./Destination.css";
import { useParams } from "react-router";
import People from "../../assets/icon/group.svg";
import vehicles from "../../fakeData/vehicles.json";

const PickUpPoint = () => {
  const [searchResult, setSearchResult] = useState({});
  const [result, setResult] = useState(false);
  let { vehicleId } = useParams();
  const handleSearch = (e) => {
    const searchResultById = vehicles.find(
      (vehicle) => vehicle.id == vehicleId
    );
    setSearchResult(searchResultById);
    setResult(true);
    console.log(searchResult);
    if (e.target.value === "") {
      alert("Error");
    }
    e.preventDefault();
  };
  const { vehicle, vehicleIcon, capacity, price } = searchResult;
  return (
    <div className="parent" style={{ marginTop: "7rem" }}>
      <div style={{ height: result && "600px" }} className="pick-up">
        <form onSubmit={handleSearch} action="">
          <h5>Pick From</h5>
          <input className="form-control mt-3 mb-3" type="text" required />
          <h5>Pick To</h5>
          <input className="form-control mt-3 mb-3" type="text" required />
          <button className="w-100 btn btn-success" type="submit">
            Search
          </button>
        </form>
        {result && (
          <div className="search-results">
            <img
              className="vehicle-icon"
              src={searchResult.vehicleIcon && vehicleIcon}
              alt=""
            />
            <h4>{searchResult.vehicle && vehicle}</h4>
            <img className="people-icon" src={People} alt="" />
            <h4>{searchResult && capacity}</h4>
            <div className="price">
              <h4>${searchResult && price}</h4>
            </div>
          </div>
        )}
        {result && (
          <div className="search-results">
            <img
              className="vehicle-icon"
              src={searchResult.vehicleIcon && vehicleIcon}
              alt=""
            />
            <h4>{searchResult.vehicle && vehicle}</h4>
            <img className="people-icon" src={People} alt="" />
            <h4>{searchResult && capacity}</h4>
            <div className="price">
              <h4>${searchResult && price}</h4>
            </div>
          </div>
        )}
        {result && (
          <div className="search-results">
            <img
              className="vehicle-icon"
              src={searchResult.vehicleIcon && vehicleIcon}
              alt=""
            />
            <h4>{searchResult.vehicle && vehicle}</h4>
            <img className="people-icon" src={People} alt="" />
            <h4>{searchResult && capacity}</h4>
            <div className="price">
              <h4>${searchResult && price}</h4>
            </div>
          </div>
        )}
      </div>
      <div className="map">
        <div className="map-img">
          <iframe
            title="Google Maps"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=50025&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PickUpPoint;
