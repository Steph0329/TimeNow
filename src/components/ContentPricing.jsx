import React from "react";
import Checkmark from "../assets/Checkmark.svg";
import Button from './Button'

const ContentPricing = ({ isTrue, price, check, parrafo, grid }) => {

    const renderCheckList = () => {
        if(isTrue) {
            const items = [
                {text: 'LinkedIn Integration'},
                {text: 'Twitter Integration'}
            ]

            if(check === 3) {
                items.push({text: 'Real-time Analytics'})
            }
            if(check === 4) {
                items.push({text: 'Real-time Analytics'})
                items.push({text: 'Instagram Integration'})
            }

            return (
                <div className="my-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex gap-4 my-4">
                            <img src={Checkmark} alt="Checkmark icon" />
                            <p className="text-gray lg:text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
            )
        }

        return null
    }

  return (
    <div className={`border-2 border-gray50 p-8 mb-7 md:mb-0 ${ grid === 3 && 'md:col-start-1 md:col-end-3'}`}>
      <h1 className="font-bold text-3xl">
        ${price} <span className="font-normal text-base text-gray">/mo</span>
      </h1>
      <p className="text-green my-2 text-lg lg:text-xl lg:my-5">{parrafo}</p>

      <div className="border-gray50 border-[1px] my-5 "></div>

      {renderCheckList()}
      
      <div className={`${check===3 && 'mt-[71px]'} ${check===2 && 'lg:mt-28'}`}>
        <Button 
            content="Suscribe Now" 
            isTrue={true}
        />
      </div>
    </div>
  );
};

export default ContentPricing;
