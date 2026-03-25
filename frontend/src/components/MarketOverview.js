import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function MarketOverview() {

  const [history, setHistory] = useState([100]); // initial value
  const [trend, setTrend] = useState("UP");

  useEffect(() => {

    const fetchMarket = () => {
      axios.get("https://gatistocks-backend.onrender.com/stocks")
        .then(res => {

          const stocks = res.data || [];

          if (stocks.length === 0) return;

          const avg =
            stocks.reduce((acc, s) => acc + s.price, 0) / stocks.length;

          setHistory(prev => {
            const updated = [...prev, avg];

            if (updated.length > 20) updated.shift();

            if (updated.length > 1) {
              const last = updated[updated.length - 1];
              const prevVal = updated[updated.length - 2];
              setTrend(last >= prevVal ? "UP" : "DOWN");
            }

            return updated;
          });

        })
        .catch(() => {});
    };

    fetchMarket();
    const interval = setInterval(fetchMarket, 2000);

    return () => clearInterval(interval);

  }, []);

  const chartData = history.map((val, i) => ({
    time: i,
    price: val
  }));

  return (
    <div>

      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h3>📊 Market Overview</h3>

        <span style={{
          color: trend === "UP" ? "green" : "red",
          fontWeight: "bold"
        }}>
          {trend === "UP" ? "📈 Market Up" : "📉 Market Down"}
        </span>
      </div>

      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke={trend === "UP" ? "green" : "red"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default MarketOverview;