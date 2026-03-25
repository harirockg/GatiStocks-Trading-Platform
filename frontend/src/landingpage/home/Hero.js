import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero () {

    const navigate = useNavigate();

    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">

                
                <div className="d-flex justify-content-center">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero Image"
                        className="mb-5"
                        style={{
                            width: "200%",
                            maxWidth: "600px",
                            height: "auto"
                        }}
                    />
                </div>

                <h4>
                  A Data-Driven Financial Trading Platform with Real-Time Market Data Processing and Analytical Dashboard
                </h4>

                <h1 className="mt-5">Invest in everything</h1>

                <p>
                  Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>

                
                <button
                  className="p-2 btn btn-primary fs-5 mb-5"
                  style={{ width: "20%", margin: "0 auto", display: "block" }}
                  onClick={() => navigate("/signup")}
                >
                  Signup Now
                </button>

            </div>
        </div>
    ); 
}

export default Hero;