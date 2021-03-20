import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found text-center">
      <div style={{ marginTop: "150px" }}>
        <h1 className="four-o-four mb-3">404</h1>
        <h5 style={{ color: "#006266" }} className="not-found-text">
          Not Found
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
