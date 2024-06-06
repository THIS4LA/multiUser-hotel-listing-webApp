import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
import userImg from '../../assets/images/user.png';

const UsersTab = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: users,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users?query=${debounceQuery}`);

  return (
    <>
      <section>
      <h2 className="center pb-5">Users</h2>
        <div className="container">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && Array.isArray(users) && (
            <table className="w-full text-left text-sm text-gray-500 border-2 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">User Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">gender</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user?.id || user?._id}>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img src={user?.photo || userImg} className="w-10 h-10 rounded-full border-gray-500" alt="" />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{user?.name}</div>
                      </div>
                    </th>
                    <td>
                    <div className="text-normal text-gray-500">{user?.email}</div>
                    </td>
                    <td className="px-6 py-4">
                    {user?.gender === "male" ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-2"></div>
                          Male
                        </div>
                      ) : user?.gender === "female" ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-pink-500 mr-2"></div>
                          Female
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-gray-400 mr-2"></div>
                          Prefer Not to Say
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default UsersTab;
