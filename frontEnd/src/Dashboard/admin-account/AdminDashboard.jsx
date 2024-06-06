import React from 'react'
import { BASE_URL } from '../../config';
import useGetProfile from "../../hooks/useFetchData";
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

const AdminDashboard = () => {
    const { data, loading, error } = useGetProfile(`${BASE_URL}/admins/profile/me`);
  return (
    <section>
    <div className="max-w-[1170px] px-5 mx-auto">
      {loading && !error && <Loader />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && data && (
      <h1>AdminDashboard</h1>
    )}
    </div>
  </section>
);
};

export default AdminDashboard
