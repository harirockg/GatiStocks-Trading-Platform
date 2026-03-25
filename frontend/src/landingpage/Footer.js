import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.png" style={{ width: "50%" }} />
            <p>
              &copy; 2026 GatiStocks. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="#">About</a>
            <br />
            <a href="#">Products</a>
            <br />
            <a href="#">Pricing</a>
            <br />
            <a href="#">Referral programme</a>
            <br />
            <a href="#">Careers</a>
            <br />
            <a href="#">GatiStocks.tech</a>
            <br />
            <a href="#">Press & media</a>
            <br />
            <a href="#">GatiStocks cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="#">Contact</a>
            <br />
            <a href="#">Support portal</a>
            <br />
            <a href="#">GatiStocks blog</a>
            <br />
            <a href="#">List of charges</a>
            <br />
            <a href="#">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="#">Open an account</a>
            <br />
            <a href="#">Fund transfer</a>
            <br />
            <a href="#">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            GatiStocks: A modern stock trading platform project designed to
            provide a seamless and secure experience for equity investments.
            This platform showcases features like real-time market data,
            portfolio tracking, and integrated financial services within a
            unified ecosystem. Investments in securities are subject to market
            risks. This project is developed for educational and demonstration
            purposes only and does not provide any real financial or trading
            services. Users are advised to conduct their own research and read
            all relevant documents before making any investment decisions.
          </p>

          <p>
            Investor Awareness: For grievance-related information, users may
            refer to the SEBI SCORES portal. Basic details like Name, PAN,
            Address, Mobile Number, and Email ID are generally required for
            complaint registration. This project is for educational purposes
            only and does not handle real investor grievances.
          </p>

          <p>
            Disclaimer: Investments in the securities market are subject to
            market risks. This project is for educational purposes only; please
            read all related documents carefully before making any investment
            decisions.
          </p>

          <p>
            Investor Notice: Update your contact details with your broker to
            receive transaction updates. KYC is a one-time process for
            securities market participation. For IPOs, payments are authorized
            through your bank account without the need for cheques. This project
            does not provide stock tips or trading services and is developed for
            educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
