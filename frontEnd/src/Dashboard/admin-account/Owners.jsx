import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";

const Owners = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: owners,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/owners?query=${debounceQuery}`);

  return (
    <>
      <section>
      <h2 className="center pb-5">Companies</h2>
        <div className="container">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && Array.isArray(owners) && (
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Company Name</th>
                  <th scope="col" className="px-6 py-3">Address</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {owners.map((owner) => (
                  <tr key={owner?.id || owner?._id}>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img src={owner?.photo} className="w-10 h-10 border-2 border-gray-500" alt="" />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{owner?.name}</div>
                        <div className="text-normal text-gray-500">{owner?.email}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{owner?.address}</td>
                    <td className="px-6 py-4">
                      {owner?.isApproved ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                          Approved
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                          Pending
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

export default Owners;
