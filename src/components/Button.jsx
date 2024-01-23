import React from "react";

const Button = ({content, isTrue}) => {
  return (
    <button className={`px-5 py-3 bg-blue-200 text-white font-bold rounded-md hover:bg-blue-100 transition-all mt-5 ${isTrue && 'w-full'} md:mt-0`}>
      {content}
    </button>
  );
};

export default Button;
