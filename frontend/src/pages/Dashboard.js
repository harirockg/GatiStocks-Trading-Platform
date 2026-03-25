import React, { useEffect, useState, useContext } from "react";
//import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import Watchlist from "../components/Watchlist";
import Holdings from "../components/Holdings";
import Orders from "../components/Orders";
import MarketOverview from "../components/MarketOverview"; // 🔥 ONLY THIS
import MarketStats from "../components/MarketStats";

function Dashboard() {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // NOT LOGGED IN
  if (!user) {
    return (
      <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

        <TopBar />

        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h2>Start Trading 🚀</h2>
          <p>Please signup to start trading</p>

          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "10px 20px",
              background: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Signup Now
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <Watchlist />
        </div>

      </div>
    );
  }

  // LOGGED IN
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      <TopBar />

      <div style={{ display: "flex", padding: "20px" }}>

        {/* LEFT */}
        <div style={{
          width: "25%",
          background: "#fff",
          padding: "15px",
          borderRadius: "10px",
          height: "150vh"
        }}>
          <Watchlist />
        </div>

        {/* RIGHT */}
        <div style={{
          width: "75%",
          marginLeft: "20px"
        }}>

          {/* HOLDINGS */}
          <div style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "20px"
          }}>
            <Holdings />
          </div>

          {/* ORDERS */}
          <div style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "20px"
          }}>
            <Orders />
          </div>

          <br />

          
          <div style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px"
          }}>
            <MarketOverview />
            <MarketStats />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;