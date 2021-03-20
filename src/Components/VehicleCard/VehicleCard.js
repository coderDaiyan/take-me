import React from "react";
import "./VehicleCard.css";
import fakeData from "../../fakeData/vehicles.json";
import { Link } from "react-router-dom";

const VehicleCard = () => {
  return (
    <>
      <div className="all-vehicle-cards container-fluid row">
        {fakeData.map((vehicle) => (
          <div className="vehicle-card col-md-4">
            <Link to={`/destination/${vehicle.id}`}>
              <img className="vehicle-img" src={vehicle.vehicleIcon} alt="" />
            </Link>
            <h2>{vehicle.vehicle}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default VehicleCard;
