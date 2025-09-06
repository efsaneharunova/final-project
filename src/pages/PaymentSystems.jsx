import React from 'react'
import PaymentSection from '../components/PaymentSystems'
import References from '../components/References'
import QuoteSection from '../components/QuoteSection'
import PaymentInfo from '../components/PaymentInfo'

const PaymentSystems = () => {
  return (
    <div>
        <PaymentSection />
        <PaymentInfo />
        <References />
        <QuoteSection />
    </div>
  )
}

export default PaymentSystems