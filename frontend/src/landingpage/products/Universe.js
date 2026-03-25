import React from "react";
import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The GatiStocks Universe</h1>
        <p>
          Enhance your trading experience with a range of integrated features and tools within the platform.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcasee.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/Streakk.png" />
          <p className="text-small text-muted">Strategy management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/optiontrade.png" />
          <p className="text-small text-muted">Smart Trading</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/GatiStocksfundhouse.png" />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpii.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/ditto.png" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
