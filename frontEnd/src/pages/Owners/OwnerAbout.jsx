import React from 'react'
import { formateDate } from '../../utils/formateDate'

const OwnerAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-redColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
          Courtyard by Marriott Colombo
          </span>
        </h3>
        <p className="text__para">
        Facing Beira Lake, this refined, colourful hotel is a 4-minute walk from Gangaramaya Temple, 2 km from Colombo National Museum and 1 km from Viharamahadevi Park. Fort railway station is 4 km away.
Stylish, airy rooms offer Wi-Fi, TVs and minifridges. Upgraded rooms add lake and ocean views. Suites feature separate living areas. Room service is available.

There&apos;s a cafe and a lounge, plus a casual restaurant with an international menu. Other amenities include an outdoor pool and a fitness centre, as well as breakfast and parking.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Rankings
        </h3>
        <ul className="pt-4 md:pt-5">
          {/* rank 1st */}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate('02-02-2023')} - {formateDate('02-02-2024')}
              </span>
              <p className="text-[15px] leading-6 font-medium text-redColor">1st</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">Category of Hotels, Casinos and Resorts.</p>
          </li>
          {/* rank 2nd */}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate('02-02-2023')} - {formateDate('02-02-2024')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-redColor">16th</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">Across all companies</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default OwnerAbout