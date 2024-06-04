import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState(null); // Use null to clearly indicate no data has been fetched yet
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Error fetching data");
        }

        if (isMounted) {
          setData(result.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setLoading(false);
          setError(err.message || "An error occurred");
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;