// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../style";

const Button = () => {
  return (
    <button
      type="button"
      className={`py-4 px-6 ${styles} bg-blue-gradient font-poppins font-medium text-[18px] text-primary mt-10 outline-none rounded-md shadow-xl `}
    >
      Get Started
    </button>
  );
};

export default Button;
