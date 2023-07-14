import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);


      } catch (error) {
        setError(err);
      }
      setLoading(false);
      //
    };
    fetchData();
  }, [url]);

  // const refetch = async() => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   } catch (error) {
  //     setError(err);
  //   }
  // };
  // setLoading(false);


  return {data, loading, error}
};
export default useFetch;
