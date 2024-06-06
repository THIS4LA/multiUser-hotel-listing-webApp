import { useState } from "react";
import { BASE_URL } from '../../config';
import useGetProfile from "../../hooks/useFetchData";
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Tabs from "./Tabs";
import userImg from "../../assets/images/user.png";
import Owners from "./Owners";
import UsersTab from "./UsersTab";
import SuggestionsTab from "./SuggestionsTab";

const AdminDashboard = () => {
    const { data, loading, error } = useGetProfile(`${BASE_URL}/admins/profile/me`);
    const [tab, setTab] = useState("overview");

  return (
    <section>
    <div className="max-w-[1170px] px-5 mx-auto">
    {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && data && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We will review it manually and approve within 3 days.
                  </div>
                </div>
              )}

              <div>
              {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[150px] max-h-[150px] border-2 border-redColor">
                        <img
                          src={userImg}
                          alt="profile pic"
                          className="w-full"
                        />
                      </figure>
                      <div>
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3 pb-2">
                        </h3>
                        <span
                          className="bg-[#CCF0F3] text-blueColor py-2 px-4 lg:py-2 lg:px-6
                          rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold"
                        > 
                        </span>
                        <div className="flex pt-3">
                        <div className="flex items-center gap-[6px] pt-3">
                            <span className="flex items-center gap-[6px] text-headingColor text-[14px]
                            leading-5 lg:text-[16px] lg:leading-6 font-semibold"><img  alt="starIcon" /></span>
                            <span className="text-textColor text-[14px] leading-5 lg:text-[16px]
                            lg:leading-6 font-semibold"></span>
                        </div>
                        <div className="pl-[25px] flex items-center gap-2 font-[15px] leading-6 pt-3">
                          <span className="text-headingColor font-bold "></span>
                        </div>
                        </div>
                        <p className="text__para font-[15px] lg:max-w-[390px] leading-6:">{data?.address || "N/A"}</p>
                      </div>
                    </div>
                  </div>

                )}


                {tab === "ownersTab" && <Owners />}
                {tab === "usersTab" && <UsersTab />}
                {tab === "suggestions" && <SuggestionsTab />}
              </div>
            </div>
          </div>
        )}
    </div>
  </section>
);
};

export default AdminDashboard
