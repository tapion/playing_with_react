import { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState("");
  const fetchOrGetData = useCallback(async (requestConfig, setValues) => {
    console.log(requestConfig);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setValues(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    // setIsLoading(false);
  }, []);

  return {
    fetchOrGetData,
    error
  }
};

export default useHttp;
