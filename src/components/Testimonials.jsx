/* eslint-disable no-unused-vars */

import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
// import FeedbackCard from './FeedbackCard';
import { quotes } from '../assets';


const Testimonials = () => {
  return (
   <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
<div  className='absolute h-[60%] w-[60%] rounded-full -right-[50%] z-[0] blue__gradient'/>
<div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
<h1 className={`${styles.heading2} `}>
What People are saying<br className='sm:block hidden' /> about us
</h1>
<div className='w-full md:mt-0 mt-6'>
  <p className={`${styles.paragraph} max-w-[450px]`}>
  Everything you need to accept card payments and grow your business anywhere on the planet.
  </p>
</div>
</div>
<div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
{feedback.map((card,index)=>(
  <div key={card.id} className='flex  justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]
  md:mr-10 sm:mr-5  feedback-card' >
  
    <img src={quotes} alt='double_quotes' className='w-[420px] h-[27px] object-contain'/>
    <p className={`font-poppins font-normal text-[20px] leading-[32px] text-white `}>{card.content}</p>

    <div className='flex flex-row'>
      <img src={card.img} alt={card.name} className='h-[48px] w-[48px] roounded-full'/>
      <div className='flex flex-col ml-4'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[32px]'>{card.name}</h4>
<p className='font-poppins text-nornal text-[16px] leading-[24px] text-dimWhite '>{card.title}</p>
      </div>
    </div>
  </div>
))}
</div>
   </section>
  )
}

export default Testimonials