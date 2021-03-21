import React, { useState } from "react";
import "./Destination.css";
import { useParams } from "react-router";
import People from "../../assets/icon/group.svg";
import vehicles from "../../fakeData/vehicles.json";
import ReactMapGL from "react-map-gl";

const PickUpPoint = () => {
  let [viewport, setViewport] = useState({
    latitude: 23.82235,
    longitude: 90.365417,
    zoom: 8,
    width: "400px",
    height: "400px",
  });
  const [searchResult, setSearchResult] = useState({});
  const [destination, setDestination] = useState({
    from: "",
    to: "",
  });
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
  const handleBlur = (e) => {
    if (e.target.name === "from") {
      const newDestination = { ...destination };
      newDestination.from = e.target.value;
      setDestination(newDestination);
    } else if (e.target.name === "to") {
      const newDestination = { ...destination };
      newDestination.to = e.target.value;
      setDestination(newDestination);
    }
  };
  const { vehicle, vehicleIcon, capacity, price } = searchResult;
  return (
    <div className="container">
      <div className="parent row g-4" style={{ marginTop: "7rem" }}>
        <div style={{ height: result && "460px" }} className="pick-up col-lg-6">
          {!result && (
            <form onSubmit={handleSearch} action="">
              <h5>Pick From</h5>
              <input
                className="form-control mt-3 mb-3"
                name="from"
                onBlur={handleBlur}
                type="text"
                required
              />
              <h5>Pick To</h5>
              <input
                className="form-control mt-3 mb-3"
                name="to"
                type="text"
                onBlur={handleBlur}
                required
              />
              <button className="w-100 btn btn-success" type="submit">
                Search
              </button>
            </form>
          )}
          {result && (
            <div className="orange-destination-div">
              <h4>From: {destination?.from}</h4>
              <br />
              <h4>To: {destination?.to}</h4>
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
        <div className="map col-lg-6">
          <ReactMapGL
            mapboxApiAccessToken={
              "pk.eyJ1IjoiZGV2ZWxvcGVyZGFpeWFuIiwiYSI6ImNrbWl0bDdwejBrcjgybm52YWg5bnhxOHUifQ.geGOlcnfET9ER3Bv5TNmaw"
            }
            {...viewport}
            onViewportChange={(newViewport) => setViewport(newViewport)}
          ></ReactMapGL>
        </div>
      </div>
    </div>
  );
};

export default PickUpPoint;
