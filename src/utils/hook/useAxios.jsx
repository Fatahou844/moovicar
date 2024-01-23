import axios from "axios";
import React, { createContext, useContext } from "react";

const axiosContext = createContext();
const baseUrl = "https://moovicar.com/api";

export function ProvideAxios({ children }) {
  const axios = useProvideAxios();
  return (
    <axiosContext.Provider value={axios}>{children}</axiosContext.Provider>
  );
}

export const useAxios = () => {
  return useContext(axiosContext);
};

function useProvideAxios() {
  const setHeader = () => {
    axios.defaults.headers.common["Accept"] = "/";
    axios.defaults.headers.common["Content-Encoding"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
  };

  /* const setHeader = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';     
        
      }; */

  const post = async (url, data) => {
    //  setHeader();

    try {
      return await axios.post(baseUrl + url, data);
    } catch (error) {
      // console.log(error);
    }
  };

  const get = async (url) => {
    //    setHeader();
    try {
      return await axios.get(baseUrl + url);
    } catch (error) {
      // console.log(error);
    }
  };

  const put = async (url, data) => {
    //    setHeader();
    try {
      return await axios.put(baseUrl + url, data);
    } catch (error) {
      // console.log(error);
    }
  };

  return {
    post,
    get,
    put,
  };
}
