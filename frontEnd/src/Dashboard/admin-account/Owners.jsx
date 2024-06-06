import OwnerCard from "./OwnerCardSquare";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";

const Owners = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());

    console.log("handle search");
  };

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
        <div className="container text-center">
          <h2 className="heading">Places</h2>
          <div
            className="max-w-[570px] mt-[30px] mx-auto bg-red-200 rounded-md flex items-center
        justify-center "
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
             placeholder:text-blueColor"
              placeholder="Search Place"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md"
            onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
      <div className="container">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && Array.isArray(owners) && (
            <div>
              {owners.map((owner) => (
                // Use optional chaining and provide default values to avoid null property access
                <OwnerCard
                  key={owner?.id || owner?._id} // Using either `id` or `_id` as key
                  owner={{
                    ...owner,
                    name: owner?.name || "Unknown",
                    category: owner?.category || "General",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Owners;