import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip
);

function StockChart({ data = [] }) {

  if (!data || data.length === 0) {
    return <p>Loading chart...</p>;
  }

  // MAIN TREND CHART
  const mainChart = {
    labels: data.map((_, i) => i + 1),
    datasets: [
      {
        data: data,
        borderColor: "#387ed1",
        tension: 0.4,
        fill: false
      }
    ]
  };

  // BUY PRICE 
  const buyPrice = data[0];

  // DETAIL DATA 
  const detailData = data.map(price =>
    price + (Math.random() - 0.5) * 4
  );

  // DETAIL CHART 
  const detailChart = {
    labels: data.map((_, i) => i + 1),
    datasets: [

      // 📈 PRICE LINE
      {
        data: detailData,
        borderColor:
          detailData[detailData.length - 1] >= buyPrice
            ? "green"
            : "red",
        backgroundColor:
          detailData[detailData.length - 1] >= buyPrice
            ? "rgba(0,200,0,0.15)"
            : "rgba(255,0,0,0.15)",
        tension: 0.2,
        fill: true,
        pointRadius: (ctx) =>
          ctx.dataIndex === detailData.length - 1 ? 6 : 0,
        pointBackgroundColor: "black"
      },

      //  BUY PRICE LINE
      {
        data: new Array(detailData.length).fill(buyPrice),
        borderColor: "#000",
        borderDash: [5, 5],
        pointRadius: 0
      }

    ]
  };

  //  OPTIONS
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const price = ctx.raw;
            const pnl = price - buyPrice;
            return `₹${price.toFixed(2)} (${pnl >= 0 ? "+" : ""}${pnl.toFixed(2)})`;
          }
        }
      },
      legend: { display: false }
    },
    scales: {
      x: { display: false }
    }
  };

  return (
    <div>

      {/* 📈 MAIN TREND */}
      <div style={{ marginBottom: "10px" }}>
        <Line data={mainChart} />
      </div>

      {/* 📊 DETAIL ANALYSIS */}
      <div style={{ height: "120px" }}>
        <Line data={detailChart} options={options} />
      </div>

    </div>
  );
}

export default StockChart;