import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className='relative flex cursor-pointer select-none items-center justify-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span className='flex items-center text-base lg:text-xl font-bold text-blue-200'>
          Billed Monthly
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-blue-50' : 'bg-[#212b36]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-base lg:text-xl font-medium text-blue-50'>
          Billed Yearly
        </span>
      </label>
    </>
  );
};

export default Toggle;
