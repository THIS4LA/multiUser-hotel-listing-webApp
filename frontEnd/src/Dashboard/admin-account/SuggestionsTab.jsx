import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
import userImg from '../../assets/images/user.png';

const SuggestionsTab = () => {
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
  } = useFetchData(`${BASE_URL}/contacts?query=${debounceQuery}`);

  return (
    <>
      <section>
      <h2 className="center pb-5">Contacts</h2>
        <div className="container">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && Array.isArray(users) && (
            <table className="w-full text-left text-sm text-gray-500 border-2 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Avatar</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Subject</th>
                  <th scope="col" className="px-6 py-3">Message</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user?.id || user?._id}>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img src={user?.photo || userImg} className="w-10 h-10 rounded-full border-gray-500" alt="" />
                    </th>
                    <td>
                    <div className="text-normal text-gray-500">{user?.email}</div>
                    </td><td>
                    <div className="text-normal text-gray-500">{user?.subject}</div>
                    </td>
                    <td>
                    <div className="text-normal text-gray-500">{user?.message}</div>
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

export default SuggestionsTab;
