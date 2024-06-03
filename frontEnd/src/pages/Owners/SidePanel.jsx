import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md bg-slate-300">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Check Availability</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
        Leave your requirements here, and our team will assist you!
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
         You can check your profile Availability Tab For Availability Status
        </p>
        {/* <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Wendsday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              5.00 PM - 9.30 PM
            </p>
          </li>
        </ul> */}
      </div>

      <button className="btn bg-redColor px-2 w-full rounded-md">Check</button>
    </div>
  );
};

export default SidePanel;