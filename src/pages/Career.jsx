import React from 'react'
import CareerSection from '../components/CareerSection'
import References from '../components/References'
import QuoteSection from '../components/QuoteSection'
import CareerInfo from '../components/CareerInfo'

const Career = () => {
  return (
    <div>
        <CareerSection />
        <CareerInfo />
        <References />
        <QuoteSection />
    </div>
  )
}

export default Career