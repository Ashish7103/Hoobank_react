/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles,{layout} from '../style'
import Button from './Button';
import { card } from '../assets';

const Carddeal = () => {
  return (
    <section className={`${layout.section}`}>
     <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        Find a better card deal
          <br className="sm:block hidden" />{' '}
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Choose the billing type that suits your needs<br  />{' '}
 Don’t double entry, interconnect to your accounting system<br  />{' '}
 Speed up month-end closing with a rigorous invoicing process<br  />{' '}
        </p>
        <Button />
       

      
      </div>
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={card}
          alt="bill"
          className="relative w-[100%] h-[100%] z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
      </section>
  )
}

export default Carddeal