import React from "react";
import References from "../components/References";
import QuoteSection from "../components/QuoteSection";
import ServicesSection from "../components/ServicesSection";
import StatisticsSection from "../components/StatisticsSection";
import OurServices from "../components/OurServices";

const Services = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div className="page-container">
          <div className="section-content">
            <OurServices />
            <ServicesSection />
            <StatisticsSection />
            <References />
          </div>
        </div>
        <QuoteSection />
      </div>
    </div>
  );
};

export default Services;
//padding: "50px",
