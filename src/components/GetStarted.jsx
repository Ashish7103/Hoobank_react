/* eslint-disable no-unused-vars */

import React from 'react'
import { arrowUp } from '../assets'

import styles from '../style'

const GetStarted = () => {
  return (
    <div className= {`${styles.flexCenter} h-[140px] w-[140px] p-[2px] rounded-full bg-blue-gradient cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col rounded-full bg-primary w-[100%] h-[100%] leading-7`}>
      <div className={`${styles.flexStart} flex-row  `}>
        <p className={` flex font-poppins font-medium text-[18px] leading-[23px] mr-2`}>
          <span className='text-gradient'>Get</span>
          <img src={arrowUp}  className={`h-[23px] w-[23px] object-contain `}alt='Arrow'></img>
        </p>
        </div>
  
        <p className={` flex font-poppins font-medium text-[18px] leading-[23px] mr-2`}>
          <span className='text-gradient'>Started</span>
          
        </p>
        
        
      </div>
    </div>
  )
}

export default GetStarted