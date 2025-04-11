import React from 'react'
import AnnualReport from './annualReport/annualreport'
import Financials from './financial/financials'
import Shareholders from './shareholders/shareholder'

const Investor = () => {
  return (
    <div>
      <AnnualReport />
      <Financials />
      <Shareholders />
    </div>
  )
}

export default Investor
