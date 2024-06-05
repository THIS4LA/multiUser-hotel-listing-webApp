import React from "react";
import OwnerCard from "./OwnerCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../Loader/Loader";
import Error from "../Error/Error";

const OwnerList = () => {
  const { data: owners, loading, error } = useFetchData(`${BASE_URL}/owners`);

  // Function to get top 3 owners based on the number of reviews
  const getTopOwners = (owners) => {
    return owners
      .sort((a, b) => b.reviews.length - a.reviews.length)
      .slice(0, 3);
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && Array.isArray(owners) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {getTopOwners(owners).map((owner) => (
            <OwnerCard key={owner._id} owner={owner} />
          ))}
        </div>
      )}
    </>
  );
}

export default OwnerList;
