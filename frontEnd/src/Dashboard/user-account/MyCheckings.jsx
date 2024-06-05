import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import OwnerCard from "../../components/Owners/OwnerCard";
import Loading from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MyCheckings = () => {
  const {
    data: checkings = [], // default value to an empty array
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/checkings/my-checkings`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && Array.isArray(checkings) && checkings.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {checkings.map((owner) => (
            <OwnerCard owner={owner} key={owner._id} />
          ))}
        </div>
      )}
      {!loading && !error && Array.isArray(checkings) && checkings.length === 0 && (
        <h2 className="mt-5 text-center text-redColor leading-7 text-[20px] font-semibold ">You did not Check any Establishments!</h2>
      )}
    </div>
  );
};

export default MyCheckings;
