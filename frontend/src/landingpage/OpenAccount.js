import React from 'react';
import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a GatiStocks account</h1>
        <p>
          Experience a modern trading platform with real-time data, intuitive design,
          and seamless performance across devices.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;