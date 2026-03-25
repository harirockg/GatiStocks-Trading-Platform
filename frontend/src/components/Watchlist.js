import React, { useEffect, useState } from "react";
import axios from "axios";
import BuySellModal from "./BuySellModal";

function Watchlist() {

  const [stocks, setStocks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchStocks = () => {
      axios
        .get("http://localhost:3002/stocks")
        .then((res) => {
          setStocks(res.data);
          setLoading(false);
        })
        .catch(() => {
          setStocks([]);
          setLoading(false);
        });
    };

    fetchStocks();

    // auto refresh every 2 sec
    const interval = setInterval(fetchStocks, 2000);

    return () => clearInterval(interval);

  }, []);

  if (loading) {
    return <h4>Loading Stocks... 📊</h4>;
  }

  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      height: "150vh",
      overflowY: "scroll"
    }}>
      <h3 style={{ marginBottom: "10px" }}>📈 Watchlist</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th align="left">Stock</th>
            <th align="left">Price</th>
            <th align="left">Action</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((s, i) => {

            //  random color 
            const isUp = Math.random() > 0.5;

            return (
              <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                <td>{s.name}</td>

                <td style={{
                  color: isUp ? "green" : "red",
                  fontWeight: "bold"
                }}>
                  ₹{s.price}
                </td>

                <td>
                  <button
                    style={{
                      background: "#387ed1",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                    onClick={() => setSelected(s)}
                  >
                    Trade
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal */}
      {selected && (
        <BuySellModal
          stock={selected}
          close={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default Watchlist;