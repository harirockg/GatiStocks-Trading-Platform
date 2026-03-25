import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid text-white d-flex flex-column justify-content-center align-items-center"
      id="supportHero"
      style={{ backgroundColor: "#0dbdfd", minHeight: "50vh" }}
    >
      {/* Top */}
      <div className="text-center mb-4">
        <h4>Help & Support</h4>
        <a href="#" className="text-white">View Requests</a>
      </div>

      {/* Main Row */}
      <div className="row w-75 justify-content-center  ">
        
        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column ">
          <h1 className="fs-3">
            Search for answers or explore help topics related to the platform
          </h1>

          <input
            placeholder="Eg. how to use dashboard"
            className="form-control mt-3 mb-3 w-75"
          />

          <div className="d-flex flex-column  text-start">
            <a href="#" className="text-white">Getting started with GatiStocks</a>
            <a href="#" className="text-white">Understanding dashboard features</a>
            <a href="#" className="text-white">Exploring trading interface</a>
            <a href="#" className="text-white">Platform user guide</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex flex-column align-items-center mt-4 mt-md-0">
          <h1 className="fs-3">Featured Topics</h1>

          <ol className="mt-3 text-start">
            <li>
              <a href="#" className="text-white">
                Overview of platform features
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                How data visualization works
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;