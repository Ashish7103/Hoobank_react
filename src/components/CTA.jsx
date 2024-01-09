/* eslint-disable no-unused-vars */

import React from 'react';
import styles from "../style";
import Button from "./Button"

const CTA = () => {
  return (
    <section className={`${styles.flexCenter}`}>
<div className={`flex ${styles.marginY} ${styles.padding} sm:flex-col flex-row bg-black-gradient-2 rounded-[20px] shadow-xl`}>
  <div className='flex flex-1 flex-col'>
    <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
    <p className={`${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
  </div>
  <div>

  <Button />
  </div>
</div>
    </section>
  )
}

export default CTA