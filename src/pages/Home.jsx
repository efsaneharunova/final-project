import React from 'react';
import ClientSection from "../components/ClientSection";
import StatisticsSection from '../components/StatisticsSection.jsx';
import InfoSection from '../components/InfoSection.jsx';
import WebsiteDevelopment from '../components/WebsiteDevelopment.jsx';
import ReviewsSlider from '../components/ReviewsSlider.jsx';
import Section from '../components/Section.jsx';
import Environment from '../components/Environment.jsx';
import References from '../components/References.jsx';
import QuoteSection from '../components/QuoteSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import Sliderswiper from '../components/Sliderswiper.jsx';


const Home = () => {
  return (
    <div>
      <ClientSection />
      <StatisticsSection />
      <InfoSection />
      <ServicesSection />
      <Sliderswiper/>
      <WebsiteDevelopment />
      <ReviewsSlider />
      <Section />
      <Environment />
      <References />
      <QuoteSection />
    </div>
  );
};

export default Home;
