import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyContext from "./index";

import { fetchReposApi, fetchUserApi } from "../utils/api";

function MyProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [findUser, setFindUser] = useState("");
  const [reposData, setReposData] = useState([]);

  const getDataFromUser = async (user) => {
    const getData = await fetchUserApi(findUser || user);
    console.log(getData);
    setUserData(getData);
    const getReposData = await fetchReposApi(findUser || user);
    setReposData(getReposData);
  };

  useEffect(() => {
    const getUser = async () => {
      const data = localStorage.getItem("user");
      setFindUser(data);
    };

    getUser();
  }, []);

  const store = {
    userData,
    setUserData,
    setFindUser,
    getDataFromUser,
    reposData,
    setReposData,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default MyProvider;
