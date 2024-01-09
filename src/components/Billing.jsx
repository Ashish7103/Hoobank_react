/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

import Button from "./Button";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={bill}
          alt="bill"
          className="relative w-[100%] h-[100%] z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your
          <br className="sm:block hidden" />
          billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          How much money do you leave on the table each month? Too many
          businesses “forget” to bill all hours worked. With HooBank, you can
          keep track of any invoices, generate them more quickly and bill any
          type of pricing structure to meet clients’ needs. As a bonus, you can
          explore new pricing models and compare their viability. Stop the
          revenue leakage and scale your business at full speed!
        </p>
        <h2 className="mt-[70px] text-dimWhite font-poppins text-[20px]">
          Cash is king, so get it in the bank sooner!
        </h2>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
          <img
            src={apple}
            className="h-[42px] w-[128px] object-contain mr-5 cursor-pointer"
            alt="apple logo"
          />
          <img
            src={google}
            className="h-[42px] w-[128px] object-contain  cursor-pointer"
            alt="google logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
