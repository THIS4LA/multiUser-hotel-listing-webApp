import { Navigate } from "react-router-dom";

const Error = ({ errMessage }) => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-primaryColor text-[50px] leading-[30px] font-semibold text-center">
          {errMessage}..<span className="px-5">:(</span>
        </h3>
      </div>
    );
  };

  export default Error;