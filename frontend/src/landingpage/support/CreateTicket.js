import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">Select a topic to explore help or raise a request</h1>

        {/* Section 1 */}
        <div className="col-4 p-4">
          <h4>
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Getting Started
          </h4>

          <a href="#">Introduction to GatiStocks</a><br />
          <a href="#">How to navigate the platform</a><br />
          <a href="#">Understanding dashboard features</a><br />
          <a href="#">Basic trading workflow</a><br />
        </div>

        {/* Section 2 */}
        <div className="col-4 p-4">
          <h4>
            <i class="fa-regular fa-circle-user"></i> Account & Profile
          </h4>

          <a href="#">Managing user profile</a><br />
          <a href="#">Updating account details</a><br />
          <a href="#">Security and login settings</a><br />
          <a href="#">Account preferences</a><br />
        </div>

        {/* Section 3 */}
        <div className="col-4 p-4">
          <h4>
            <i class="fa-solid fa-chart-column"></i> Trading Features
          </h4>

          <a href="#">Exploring trading interface</a><br />
          <a href="#">Placing simulated orders</a><br />
          <a href="#">Understanding charts and data</a><br />
          <a href="#">Order tracking and history</a><br />
        </div>

        {/* Section 4 */}
        <div className="col-4 p-4">
          <h4>
            <i class="fa-solid fa-chart-area"></i> Portfolio & Analytics
          </h4>

          <a href="#">Portfolio overview</a><br />
          <a href="#">Performance insights</a><br />
          <a href="#">Data visualization tools</a><br />
          <a href="#">Reports and summaries</a><br />
        </div>

        {/* Section 5 */}
        <div className="col-4 p-4">
          <h4>
            <i class="fa-solid fa-circle-dollar-to-slot"></i> Mutual Funds
          </h4>

          <a href="#">Exploring mutual funds</a><br />
          <a href="#">Investment concepts</a><br />
          <a href="#">Fund tracking interface</a><br />
          <a href="#">Learning resources</a><br />
        </div>

        {/* Section 6 */}
        <div className="col-4 p-4">
          <h4>
            <i class="fa-solid fa-hand-holding-hand"></i> Help & Support
          </h4>

          <a href="#">Frequently asked questions</a><br />
          <a href="#">Troubleshooting issues</a><br />
          <a href="#">Understanding platform features</a><br />
          <a href="#">General assistance</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;