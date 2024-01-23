import React from 'react'
import Toggle from '../components/Toggle'
import TablePricing from '../components/TablePricing'

const Pricing = () => {
  return (
    <main className='container mx-auto py-8 w-[88%]'>
      <h1 className='text-center text-6xl font-bold mb-4'>Flexible Plans for Everyone.</h1>
      <p className='text-center lg:text-xl text-gray mb-8'>Our plans are made for everyone. Whether you're just starting out on social media, or <br className='hidden lg:block' /> have been on there for a long time, we have a plan that's right for you.</p>

      <Toggle />

      <TablePricing />
    </main>
  )
}

export default Pricing
