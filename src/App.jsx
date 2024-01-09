/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./style";

import {Navbar,Billing,Business,Carddeal,Client,CTA,Stats,Footer,Testimonials,Hero,} from "./components";

const App = () => {
  return (
    <>
      {/* <h1>Ashish</h1> */}
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}><Navbar /></div>
        </div>
        <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}> <Hero /></div>
        </div>
        <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}> 
          <Stats />
          <Business />
          <Billing />
          <Carddeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
