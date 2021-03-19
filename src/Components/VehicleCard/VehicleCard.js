import React from "react";
import "./VehicleCard.css";
import fakeData from "../../fakeData/data.json";
import { Link } from "react-router-dom";

const VehicleCard = () => {
  return (
    <div className="all-vehicle-cards">
      {fakeData.map((vehicle) => (
        <div className="vehicle-card">
          <Link to={`search/${vehicle.vehicle}`}>
            <img className="vehicle-img" src={vehicle.vehicleIcon} alt="" />
          </Link>
          <h2>{vehicle.vehicle}</h2>
        </div>
      ))}
    </div>
  );
};

export default VehicleCard;
