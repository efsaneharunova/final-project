import React from "react";
import AboutCompany from "../components/AboutCompany";
import StatisticsSection from "../components/StatisticsSection";
import References from "../components/References";
import QuoteSection from "../components/QuoteSection";
import CompanyInfo from "../components/CompanyInfo";

const About = () => {
    return (
        <div>
            <div className="page-container">
                <div className="section-content">
                    <AboutCompany />
                    <StatisticsSection bgColor="#fff" />
                    <CompanyInfo />
                    <References />
                </div>
            </div>
            <QuoteSection />
        </div>
    );
};

export default About;