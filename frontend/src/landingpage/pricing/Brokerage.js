import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              This section demonstrates how brokerage calculations can be
              displayed within a trading platform.
            </li>
            <li>
              Trade-related details and summaries are presented for educational
              and visualization purposes.
            </li>
            <li>
              The platform simulates order execution and cost estimation to
              enhance user understanding.
            </li>
            <li>
              Different trading scenarios are illustrated to show how charges
              may vary across transactions.
            </li>
            <li>
              All data shown is for demonstration purposes and does not represent
              real brokerage or financial services.
            </li>
            <li>
              The goal is to provide a clear and intuitive understanding of
              trading workflows and cost structures.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Charges Overview</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;