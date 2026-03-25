import React, { useEffect, useState } from "react";
import axios from "axios";
import BuySellModal from "./BuySellModal";

function Holdings() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const userId = localStorage.getItem("userId");

  const fetchHoldings = () => {
    if (!userId) return;

    axios
      .get(`https://gatistocks-backend.onrender.com/trade/holdings/${userId}`)
      .then(res => setData(res.data || []))
      .catch(() => setData([]));
  };

  useEffect(() => {

    fetchHoldings();

    const interval = setInterval(fetchHoldings, 2000);

    return () => clearInterval(interval);

  }, [userId]);

  if (!userId) {
    return <h4>Start Trading 🚀 (Login Required)</h4>;
  }

  if (data.length === 0) {
    return <h4>No Holdings Yet 📊</h4>;
  }

  return (
    <div>

      <h3 style={{ marginBottom: "10px" }}>Portfolio</h3>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "14px"
      }}>

        {/* HEADER */}
        <thead>
          <tr style={{
            borderBottom: "2px solid #ddd",
            textAlign: "center"
          }}>
            <th style={{ textAlign: "left", padding: "10px" }}>Stock</th>
            <th>Qty</th>
            <th>Buy</th>
            <th>Current</th>
            <th>P&L</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((h, i) => {

            const buy = Number(h.buyPrice ?? 0); 
            const current = Number(h.currentPrice ?? buy); 
            const qty = Number(h.qty ?? 0);

            const pnl = (current - buy) * qty;

            return (
              <tr key={i} style={{
                borderBottom: "1px solid #eee",
                textAlign: "center"
              }}>

                <td style={{
                  textAlign: "left",
                  padding: "10px",
                  fontWeight: "500"
                }}>
                  {h.name}
                </td>

                <td>{qty}</td>

                <td>₹{buy.toFixed(2)}</td>

                <td>₹{current.toFixed(2)}</td>

                <td style={{
                  color: pnl >= 0 ? "green" : "red",
                  fontWeight: "bold"
                }}>
                  ₹{pnl.toFixed(2)}
                </td>

                <td>
                  <button
                    onClick={() =>
                      setSelected({
                        name: h.name,
                        price: current
                      })
                    }
                    style={{
                      background: "#387ed1",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Trade
                  </button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>

      {/* MODAL */}
      {selected && (
        <BuySellModal
          stock={selected}
          close={() => {
            setSelected(null);
            fetchHoldings();
          }}
        />
      )}

    </div>
  );
}

export default Holdings;



