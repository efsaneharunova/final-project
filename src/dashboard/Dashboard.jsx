import React from "react";
import FeaturesManagement from "./features/FeaturesManagement";
import SliderManagement from "./slider/SliderManagement";
import ServiceManagement from "./service/ServiceManagement";

const Dashboard = () => {
  return (
    <div>
      <FeaturesManagement />
      <ServiceManagement />
      <SliderManagement />
    </div>
  );
};

export default Dashboard;
