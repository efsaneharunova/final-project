import React from 'react'
import Workdone from '../components/Workdone';
import PortfolioCards from '../components/PortfolioCards';
import QuoteSection from '../components/QuoteSection';
import References from '../components/References';

const Portfolio = () => {
  return (
    <div>
      <Workdone />
      <PortfolioCards />
      <References />
      <QuoteSection />
    </div>
  );
};

export default Portfolio;
