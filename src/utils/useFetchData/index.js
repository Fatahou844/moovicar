import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [url]);

  //indconsole.log(data);

  return { data };
}

export default useFetchData;
