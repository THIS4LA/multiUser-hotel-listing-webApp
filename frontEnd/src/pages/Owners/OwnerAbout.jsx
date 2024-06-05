import React from 'react'
import { formateDate } from '../../utils/formateDate'

const OwnerAbout = ({name, about, rankings}) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-blueColor font-semibold flex items-center gap-2">
          About of
          <span className=" text-redColor font-bold text-[24px] leading-9 ">
          {name}
          </span>
        </h3>
        <p className="text__para">
        {about || "N/A"}
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Rankings
        </h3>
        <ul className="pt-4 md:pt-5">
        {rankings && rankings.length > 0 ? ( rankings?.map((item, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-blue-400 text-[15px] leading-6 font-semibold ">
              {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
              </span>
              <p className="pt-2 font-bold text-[17px] leading-5 text-textColor">{item.ranking}</p>

            </div>
            <p className="text-[15px] font-bold leading-6 text-redColor">{item.place}</p>
          </li>
          ))) : (
            <p className="text-redColor font-semibold text-[16px]">No rankings available</p>
          )
        } 
          
        </ul>
      </div>
    </div>
  )
}
export default OwnerAbout