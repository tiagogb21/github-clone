import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyContext from "./index";

import { fetchUserApi } from "../utils/api";

function MyProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [findUser, setFindUser] = useState("");

  const getDataFromUser = async (user) => {
    const data = await fetchUserApi(findUser || user);
    setUserData(data);
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
    getDataFromUser,
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default MyProvider;
