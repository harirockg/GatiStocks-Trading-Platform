import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Transparent and simple pricing designed for a seamless trading experience
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Equity Delivery</h1>
          <p className="text-muted">
            Experience smooth equity investment flows with a clean and intuitive interface.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday Trading</h1>
          <p className="text-muted">
            Fast and responsive trading experience with real-time data simulation and order execution.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Mutual Funds</h1>
          <p className="text-muted">
            Explore mutual fund investments through a simplified and user-friendly interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;