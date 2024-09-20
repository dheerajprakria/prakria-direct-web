import Featured from '@/components/Pages/OurWork/Featured'
import Hero from '@/components/Pages/OurWork/Hero'
import PortfolioTabs from '@/components/Pages/OurWork/PortfolioTabs'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <Featured />
      <PortfolioTabs />
    </div>
  )
}

export default page