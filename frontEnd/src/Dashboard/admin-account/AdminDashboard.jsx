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
              <div>
              {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[150px] max-h-[150px] rounded-full border-2 border-redColor">
                        <img
                          src={userImg}
                          alt="profile pic"
                          className="w-full"
                        />
                      </figure>
                      <div>
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3 pb-2 uppercase">
                          {data?.name}
                        </h3>
                          <h1 className="text-[22px] leading-9 font-bold text-headingColor mt-3 pb-2">
                          {data?.email}
                        </h1>
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
