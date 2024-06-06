import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Owners = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    isApproved: "",
  });

  const token = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: owners,
    loading: dataLoading,
    error,
  } = useFetchData(`${BASE_URL}/owners?query=${debounceQuery}`);

  const updateOwner = async (ownerId, updatedStatus) => {
    setLoading(true);

    if (!token) {
      toast.error("Authentication token is missing.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/owners/${ownerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isApproved: updatedStatus }),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      toast.success(message);
      // Update the UI by refetching the data or updating the local state
      setDebounceQuery(query); // Triggers the useEffect to refetch data
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleStatusChange = (ownerId, newStatus) => {
    updateOwner(ownerId, newStatus);
  };

  return (
    <>
      <section>
        <h2 className="center pb-5">Companies</h2>
        <div>
          {(loading || dataLoading) && <Loading />}
          {error && <Error />}
          {!loading && !error && Array.isArray(owners) && (
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3 border-x-2 border-black">
                    Company Name
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 border-black">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 border-black">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 border-black">
                    Update
                  </th>
                  <th scope="col" className="px-6 py-3 border-r-2 border-black">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {owners.map((owner) => (
                  <tr key={owner?.id || owner?._id} className="border-b border-gray-500">
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img
                        src={owner?.photo}
                        className="w-10 h-10 border-2 border-gray-500"
                        alt=""
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold pr-3">{owner?.name}</div>
                        <div className="text-normal text-gray-500">{owner?.email}</div>
                      </div>
                    </th>
                    <td className="x-5 pl-3">{owner?.address}</td>
                    <td className="px-6 py-4">
                      <select
                        name="status"
                        value={owner?.isApproved}
                        className="text-textColor font-semibold text-[15px] leading-7 pr-4 py-3 focus:outline-none"
                        onChange={(e) => handleStatusChange(owner._id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="text-[35px] text-green-500 pl-7"
                        onClick={() => handleStatusChange(owner._id, formData.isApproved)}
                      >
                        <GrUpdate />
                      </button>
                    </td>
                    <td>
                      <button className="text-[35px] text-redColor pl-6">
                        <MdDeleteForever />
                      </button>
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