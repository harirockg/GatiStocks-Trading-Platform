import React from 'react';
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That’s why thousands of users trust our platform for secure and smart equity investments.
            We focus on providing a seamless trading experience backed by powerful financial tools.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No unnecessary notifications, distractions, or hidden tricks.
            Just a clean, fast, and reliable trading experience designed for real investors.
          </p>
          <h2 className="fs-4">The GatiStock universe</h2>
          <p className="text-muted">
            More than just a trading app — a connected ecosystem.
            With integrated services like Quantix Strategies, ShieldGuard Insurance, HexaInvest, BrightWealth, PrimeEquity, OptionTrade, InsightInvest, and Streamline BackOffice,
            we provide everything you need in one place.
          </p>
          <h2 className="fs-4">Trade smarter, grow faster</h2>
          <p className="text-muted">
            With smart insights, analytics, and investment tools,
            we help you make better financial decisions and maximize your returns.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try HexaInvest demo{" "}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;