/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";


const Business = () => {
  return (
    <section id="feature" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <>
            <div
              className={`flex flex-row p-6 rounded-[20px] ${
                index !== feature.length - 1 ? "mb-6" : "mb-0"
              } feature-card `}
            >
              <div
                className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}
              >
                <img
                  src={feature.icon}
                  alt="logo"
                  className="h-[50%] w-[50%] object-contain"
                />
              </div>
              <div className="flex flex-col flex-1 ml-3">
                <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white">
                  {feature.title}
                </h4>
                <p className="font-poppins font-normal  text-[16px] leading-[24px] mb-1 text-dimWhite">
                  {feature.content}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Business;
