import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SidePanel = ({ name }) => {
  const { id } = useParams();  // Get the id from route parameters

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md h-[320px] bg-red-100">
      <div className="items-center justify-between center">
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-redColor font-bold">
          Check Availability of <span className="text-blueColor font-bold">{name}</span>
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor center">
          You can check availability for your requirement here
        </p>
      </div>
      <Link to={`/owners/checkings/${id}`}>
        <button className="btn bg-redColor px-2 w-full rounded-md">
          Check
        </button>
      </Link>
    </div>
  );
};

export default SidePanel;
