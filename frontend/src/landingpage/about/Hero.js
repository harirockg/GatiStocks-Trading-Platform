import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are redefining the trading experience with modern technology
          <br />
          Built to deliver speed, simplicity, and smart investing tools.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            GatiStocks was developed with the vision of simplifying stock
            trading by removing complexities around technology, accessibility,
            and user experience. It focuses on delivering a seamless and
            efficient platform that empowers users to explore financial markets
            with ease.
          </p>
          <p>
            Through innovative design and modern technology, GatiStocks aims to
            deliver a fast, reliable, and user-friendly trading experience
          </p>
          <p>
            GatiStocks is designed to simulate a scalable trading environment
            where users can explore placing orders and managing investments
            through a powerful and integrated platform.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            The platform demonstrates the integration of learning resources and
            community-oriented features to enhance users’ financial awareness.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              GatiStocks Ecosystem
            </a>
            , the platform highlights a connected set of features and tools
            designed to enhance the overall trading and investment experience.
          </p>
          <p>
            The platform is continuously evolving with new features and
            improvements. Explore updates and enhancements as part of its
            ongoing development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
