import React from "react";
import OurProjects from "../components/OurProjects";
import References from "../components/References";
import QuoteSection from "../components/QuoteSection";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <div>
      <OurProjects />
      <ProjectCards />
      <References />
      <QuoteSection />
    </div>
  );
};

export default Projects;
