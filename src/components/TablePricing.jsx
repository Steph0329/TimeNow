import React from 'react'
import ContentPricing from './ContentPricing'

const TablePricing = () => {
  return (
    <section className='mt-14 md:grid md:grid-cols-2 md:gap-5 lg:flex'>
       <ContentPricing
            isTrue={true} 
            price='4'
            check={3}    
            parrafo="Perfect plan if you're just starting out."
       /> 

        <ContentPricing
            isTrue={true} 
            price='12'
            check={4}    
            parrafo="Perfect plan if you're a heavy user of social media."
        />

        <ContentPricing
            isTrue={true} 
            price='7'
            check={2}    
            parrafo="Perfect plan if you're starting out."
            grid={3}
        /> 
    </section>
  )
}

export default TablePricing
