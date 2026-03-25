import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/hexaa.png"
        productName="HexaInvest"
        productDesription="A fast and responsive trading platform with real-time market data, interactive charts, and a clean, user-friendly interface. Designed to deliver a seamless experience across web and mobile devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="StreamLine"
        productDesription="The central dashboard for your GatiStocks account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="BrightWealth"
        productDesription="Explore mutual fund investments through a simplified and user-friendly interface, designed to provide a smooth and seamless experience across devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="HexaInvest coneect API"
        productDesription="Demonstrates the integration of APIs to build scalable and efficient trading features, enabling smooth data handling and system interactions."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/edumastry.png"
        productName="EduMastry Platform"
        productDesription="A simple and easy-to-understand collection of stock market learning modules with clear explanations and visual illustrations, designed for quick and effective learning."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the GatiStocks.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
