import React from 'react'
import { Link } from 'react-router-dom'
import ShieldIcon from '../assets/Shield.svg'
import Mockup from '../assets/Mockup.png'
import Button from '../components/Button'
import Arrow from '../assets/arrow.svg'
import UA1 from '../assets/UA1.png'
import UA2 from '../assets/UA2.png'
import UA3 from '../assets/UA3.png'
import UA4 from '../assets/UA4.png'
import UA5 from '../assets/UA5.png'
import UA6 from '../assets/UA6.png'
import UA7 from '../assets/UA7.png'
import UA8 from '../assets/UA8.png'

const Features = () => {
  return (
    <main className='my-5 md:my-0'>
      <section className='grid md:grid-cols-2 md:gap-5 lg:gap-20 items-center'>
        <section className='container mx-auto py-8 w-[88%] md:w-[75%]'>
            <h1 className='text-4xl text-blue-200 font-bold mb-3'>Post when your <br /> audience is most <br /> active.</h1>

            <p className='text-green text-[17px] md:mb-5'>With TimeNow, automatically schedule your posts on Twitter, LindedIn, and Instagram to post when your followers are most active.</p>

            <div className='flex justify-between md:flex-col md:justify-start lg:flex-row mb-5'>
                <button className="px-5 py-4 md:w-44 bg-blue-200 text-white font-bold rounded-md hover:bg-blue-100 transition-all mt-5 md:mt-0">
                    Start Scheduling
                </button>
                <Link to='/' className='px-6 py-4 mt-5 md:mt-0 text-green font-bold'>
                    View Demo
                </Link>
            </div>
            
            <div className='flex items-center'>
                <img src={ShieldIcon} alt="icono Shield" />
                <p className='ml-4 text-green text-[17px]'>TimeNow does not sell your data.</p>
            </div>

            <Link to='/' className='ml-9 text-green font-bold underline underline-offset-4 hover:no-underline transition-all duration-1000'>Learn more</Link>
        </section>

        <section className='mt-10 md:-mt-10 lg:-mt-5 p-10 md:p-16 md:h-[500px] lg:h-[500px] bg-celeste'>
            <img src={Mockup} alt="Mockup" className='w-full lg:w-[70%] md:h-[280px] lg:h-[400px] mx-auto'/>
        </section>
      </section>


      {/* ---------------------------------------------------- */}
      <section className='container mx-auto my-14 w-[88%] md:grid md:grid-cols-2 md:gap-x-10 md:items-center lg:gap-x-40 lg:my-20'>
          <h1 className='text-3xl lg:text-4xl text-blue-200 font-bold mb-3 md:mb-0'>TimeNow is used by the most influential people.</h1>
          
          <div className='flex flex-wrap gap-2 mt-7 md:col-start-2 md:col-end-3 lg:col-start-1 lg:col-end-2'>
            <img src={UA1} alt="UA1" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA2} alt="UA2" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA3} alt="UA3" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA4} alt="UA4" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA5} alt="UA5" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA6} alt="UA6" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA7} alt="UA7" className='w-12 h-12 md:w-13 md:h-13'/>
            <img src={UA8} alt="UA8" className='w-12 h-12 md:w-13 md:h-13'/>
          </div>

        <div className='mt-7 md:mt-4 md:col-start-1 md:col-end-3 md:w-[90%] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3'>
          <p className='text-gray text-base lg:text-[22px]'>The most influential people on Facebook, Twitter, and Instagram are using TweetNow to schedule posts when their followers are most active.</p>
          <br />
          <p className='text-gray text-[base] lg:text-[22px]'>
            They generally receive 23% more engagement than people who do not.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      <section className='bg-celesteClaro'>
        <div className='container mx-auto py-16 w-[88%] lg:grid lg:grid-cols-2 lg:items-start lg:gap-40'>
          <div>
            <strong className='text-blue-50'>Unfield Dashboard</strong>
            <h1 className='text-3xl mt-2 text-greenO font-bold md:text-4xl'>Customizable dashboard <br className='hidden md:block lg:hidden'/> for all plataforms.</h1>
            <p className='mt-2 text-gray md:mb-5 md:text-lg'>Use Twitter and Instagram but not LinkedIn? You can customize your dashboard to your liking. You can even schedule the same post to individual platforms instead of all platforms.</p>
            <Button content='Start Scheduling' isTrue={false}/>
          </div>

          <div className='mt-10 lg:mt-0'>
            <strong className='text-blue-50'>Enhanced Analytics</strong>
            <h1 className='text-3xl mt-2 text-greenO font-bold md:text-4xl'>Real-time data that tells <br className='hidden md:block lg:hidden'/> you everything.</h1>
            <p className='mt-2 text-gray mb-5 md:mb-4 md:text-lg lg:mb-0'>Get detailed reports of what's working and what isn't. <br className='hidden lg:block'/> Engagement rates, impressions, views, and much more data is available to you through our in-depth dashboard tool.</p>

            <div className='flex items-center gap-1'>
              <Link to='/' className='text-green font-bold md:text-lg'>
                View Live Demo
              </Link>
              <img className='w-4 h-6 md:w-6 md:h-6' src={Arrow} alt="icon arrow" />
            </div>
          </div>
        </div> 
      </section>
    </main>
  )
}

export default Features
