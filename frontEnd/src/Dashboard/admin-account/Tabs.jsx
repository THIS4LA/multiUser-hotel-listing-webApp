import {useContext} from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {

    const {dispatch} = useContext(authContext)
    const navigate = useNavigate()

    const handleLogout = ()=>{
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('authToken');
        navigate('/login', { replace: true });
    }

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div
        className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow
        items-center h-max rounded-md "
      >
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-gray-500 text-primaryColor "
              : "bg-transparent text-headingColor "
          } w-full btn hover:bg-slate-200 hover:border-black border-2 hover:text-black mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("ownersTab")}
          className={`${
            tab === "ownersTab"
            ? "bg-gray-500 text-primaryColor "
              : "bg-transparent text-headingColor"
          } w-full btn hover:bg-slate-200 hover:border-black border-2 hover:text-black mt-0 rounded-md`}
        >
          Owners
        </button>
        <button
          onClick={() => setTab("usersTab")}
          className={`${
            tab === "usersTab"
            ? "bg-gray-500 text-primaryColor "
              : "bg-transparent text-headingColor"
          } w-full btn hover:bg-slate-200 hover:border-black border-2 hover:text-black mt-0 rounded-md`}
        >
          Users
        </button>
        <button
          onClick={() => setTab("suggestions")}
          className={`${
            tab === "suggestions"
            ? "bg-gray-500 text-primaryColor "
              : "bg-transparent text-headingColor"
          } w-full btn hover:bg-slate-200 hover:border-black border-2 hover:text-black mt-0 rounded-md`}
        >
          Contacts
        </button>
        <div className="mt-[100px] w-full">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
              </div>
      </div>
    </div>
  );
};

export default Tabs;