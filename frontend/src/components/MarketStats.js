import React, { useEffect, useState } from "react";
import axios from "axios";

function MarketStats() {

  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {

    const fetch = () => {

      axios.get("http://localhost:3002/stocks")
        .then(res => {

          const stocks = res.data || [];

          const data = stocks.map(s => {

            const prev = s.price * (0.95 + Math.random() * 0.1);

            const change = ((s.price - prev) / prev) * 100;

            return {
              ...s,
              change,
              volume: Math.floor(Math.random() * 5000 + 1000)
            };
          });

          const sorted = [...data].sort((a, b) => b.change - a.change);

          setGainers(sorted.slice(0, 5));
          setLosers(sorted.slice(-5).reverse());

        });

    };

    fetch();
    const interval = setInterval(fetch, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

      {/* GAINERS */}
      <div style={{ flex: 1, background: "#fff", padding: "15px", borderRadius: "10px" }}>
        <h4 style={{ color: "green" }}>📈 Top Gainers</h4>

        {gainers.map((s, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{s.name}</span>
            <span style={{ color: "green" }}>
              {s.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      {/* LOSERS */}
      <div style={{ flex: 1, background: "#fff", padding: "15px", borderRadius: "10px" }}>
        <h4 style={{ color: "red" }}>📉 Top Losers</h4>

        {losers.map((s, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{s.name}</span>
            <span style={{ color: "red" }}>
              {s.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MarketStats;