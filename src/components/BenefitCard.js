'use strict';
import React from 'react';


const BenefitCard = (props) => {
  return (
    <React.Fragment>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white">
        <div className="px-4 py-5 flex-auto ">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
            <i className={props.image} ></i>
          </div>
          <h6 className="text-xl font-semibold">{props.title}</h6>
          <p className="mt-2 mb-4 text-gray-600">
            {props.cardBody}
          </p>
        </div>
      </div>

    </React.Fragment>
  )
}

export default BenefitCard;