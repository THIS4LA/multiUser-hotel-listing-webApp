import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { name, desc, } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/owners"
          className="w-[44px] h-[44px] rounded-full border border-solid border-redColor mt-[30px] 
            flex items-center justify-center group hover:bg-primaryColor hover:border-blueColor"
        >
          <FaAngleRight className="group-hover:text-blueColor text-redColor w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;