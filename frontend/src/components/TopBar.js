import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function TopBar() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [balance, setBalance] = useState(0);
  const [totalPnL, setTotalPnL] = useState(0);
  const [open, setOpen] = useState(false);

  const userId = localStorage.getItem("userId");

  // Generate initials
  const getInitials = (name) => {
    if (!name) return "U";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  // RANDOM COLOR
  const getColor = (name) => {
    const colors = [
      "#387ed1", "#ff6b6b", "#6bcB77",
      "#f7b801", "#9b5de5", "#00bbf9"
    ];

    let index = 0;
    for (let i = 0; i < name.length; i++) {
      index += name.charCodeAt(i);
    }

    return colors[index % colors.length];
  };

  useEffect(() => {

    if (!userId) return;

    axios.get(`https://gatistocks-backend.onrender.com/auth/user/${userId}`)
      .then(res => setBalance(res.data.balance || 0))
      .catch(() => setBalance(0));

    axios.get(`https://gatistocks-backend.onrender.com/trade/holdings/${userId}`)
      .then(res => {

        const data = res.data || [];

        // P&L CALCULATION
        const total = data.reduce((acc, h) => {
          return acc + Number(h.pnl || 0);
        }, 0);

        setTotalPnL(total);

      })
      .catch(() => setTotalPnL(0));

  }, [userId]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 20px",
      background: "#fff",
      borderRadius: "10px",
      marginBottom: "15px",
      alignItems: "center"
    }}>

      
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

        
        <img
          src="/media/images/kitee.png"   
          alt="logo"
          style={{
            height: "50px",
            objectFit: "contain"
          }}
        />

        

      </div>

      {/* RIGHT */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

        {user ? (
          <>
            
            <div>
              <span style={{ marginRight: "15px" }}>
                Balance: ₹{balance.toFixed(2)}
              </span>

              <span style={{
                color: totalPnL >= 0 ? "green" : "red",
                fontWeight: "bold"
              }}>
                P&L: ₹{totalPnL.toFixed(2)}
              </span>
            </div>

            {/* 👤 ACCOUNT */}
            <div style={{ position: "relative" }}>

              <div
                onClick={() => setOpen(!open)}
                style={{
                  background: getColor(user.name),
                  color: "#fff",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                {getInitials(user.name)}
              </div>

              {/* DROPDOWN */}
              {open && (
                <div style={{
                  position: "absolute",
                  right: 0,
                  top: "55px",
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "220px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                }}>

                  <div style={{ textAlign: "right" }}>
                    <button
                      onClick={() => setOpen(false)}
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer"
                      }}
                    >
                      ❌
                    </button>
                  </div>

                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    {user.name}
                  </p>

                  <p style={{ margin: "5px 0", fontSize: "13px" }}>
                    {user.email}
                  </p>

                  <hr />

                  <button
                    onClick={() => {
                      logout();
                      navigate("/signup");
                    }}
                    style={{
                      width: "100%",
                      padding: "6px",
                      background: "red",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          </>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "8px 16px",
              background: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Signup
          </button>
        )}

      </div>

    </div>
  );
}

export default TopBar;