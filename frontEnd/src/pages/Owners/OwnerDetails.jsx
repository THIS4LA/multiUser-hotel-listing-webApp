import { useState } from "react";
import ownerImg from "../../assets/images/courtyard-logo.jpg";
import starIcon from "../../assets/images/Star.png";
import OwnerAbout from "./OwnerAbout";
import OwnerFeedBack from "./OwnerFeedBack";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const OwnerDetails = () => {
  const [tab, setTab] = useState("about");

  const { id } = useParams();

  const {
    data: owner,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/owners/${id}`);

  const {
    name,
    reviews,
    address,
    phone,
    about,
    averageRating,
    totalRating,
    category,
    rankings,
    photo,
  } = owner || {};

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loading />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px] border-2 border-redColor">
                  <img src={photo} alt="ownerImg" className="w-full" />
                </figure>

                <div>
                  <span
                    className="bg-redColor text-primaryColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                  >
                    {category}
                  </span>
                  <h3 className="text-redColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px] ">
                    <span
                      className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                    lg:leading-7 font-semibold text-headingColor"
                    >
                      <img src={starIcon} alt="starIcon" />
                      {averageRating}
                    </span>
                    <span
                      className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                    lg:leading-7 text-[400] font-semibold text-headingColor"
                    >
                      ({totalRating})
                    </span>
                  </div>
                  <div className="flex pt-2 text-[16px]">
                    <FaPhoneAlt className="pt-[2px]" />
                    <span className="pl-3 font-bold">0{phone}</span>
                  </div>

                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {address}
                  </p>
                </div>
              </div>
              {/* inpage tabs */}
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${
                    tab === "about" ? "border-b-2 border-redColor text-redColor" : ""
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${
                    tab === "feedback" ? "border-b-2 border-redColor text-redColor" : ""
                  }`}
                >
                  FeedBack
                </button>
              </div>
              {/* inpage tabs */}
              <div className="mt-[50px]">
                {tab === "about" && <OwnerAbout name={name} about={about} rankings={rankings} />}
                {tab === "feedback" && <OwnerFeedBack reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>
            <SidePanel name={name} />
          </div>
        )}
      </div>
    </section>
  );
};

export default OwnerDetails;
