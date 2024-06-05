import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import userImg from "../../assets/images/user.png";

import Profile from "./Profile";
import MyCheckings from "./MyCheckings";

import useFetchData from "../../hooks/useFetchData"; // Ensure this hook is correctly imported
import { BASE_URL } from "../../config";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loader";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("settings");

  const {
    data: userData,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/profile/me`);


  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const handleDeleteAccount = () => {
    // Implement delete account functionality
  };

  return (
    <section>
    <div className="max-w-[1170px] px-5 mx-auto">
    {loading && !error &&
        <Loading />
        }
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && userData && (
      <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-redColor">
              <img
                src={userData.profileImage || userImg}
                alt="userImg"
                className="w-full h-full rounded-full object-cover"
              />
            </figure>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
            {userData.name || "N/A"}
            </h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">
            {userData.email}
            </p>
          </div>

          <div className="mt-[50px] md:mt-[100px]">
            <button
              onClick={handleLogout}
              className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
            >
              Logout
            </button>
            <button 
            onClick={handleDeleteAccount}
            className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
              DeleteAccount
            </button>
          </div>
        </div>

        <div className="md:col-span-2 md:px-[30px]">
          <div>
            <button
              onClick={() => setTab("settings")}
              className={`${
                tab === "settings" && "bg-redColor text-primaryColor font-normal"
              } ml-4 py-2 px-5 rounded-md text-headingColor font-semibold text-[16px]
            leading-7 border border-solid border-primaryColor`}
            >
              Profile Settings
            </button>
            <button
              onClick={() => setTab("checkings")}
              className={`${
                tab === "checkings" && "bg-redColor text-primaryColor font-normal"
              } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px]
            leading-7 border border-solid border-primaryColor`}
            >
              My Checkings
            </button>
          </div>

            {
              tab === 'checkings' && <MyCheckings />
            }
            {
              tab === 'settings' && <Profile user={userData} />
            }  

        </div>
      </div>
        )}
    </div>
  </section>
  );
};

export default MyAccount;