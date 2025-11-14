import { useState, useEffect } from "react";

// export const useSomething = () => {
//   const [count, setCount] = useState(0);
//   return {
//     count,
//     setCount,
//   };
// };

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(options.fallbackData ?? undefined);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Fetch to failed");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return {
    data,
    isLoading,
    error,
  };
};
