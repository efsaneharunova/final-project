import React from 'react'
import References from '../components/References'
import QuoteSection from '../components/QuoteSection'
import WebTechInfo from '../components/WebTechSupport'
import SupportInfo from '../components/SupportInfo'

const WebTechSupport = () => {
  return (
    <div>
        <WebTechInfo />
        <SupportInfo />
        <References />
        <QuoteSection />
    </div>
  )
}

export default WebTechSupport