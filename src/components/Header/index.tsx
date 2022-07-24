import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyContext from "../../MyContext";
import { fetchReposApi, fetchUserApi } from "../../utils/api";

import { Container, GithubLogo, SearchForm } from "./styles";

function Header() {
  const [search, setSearch] = useState("");

  const { userData, reposData, setFindUser, setUserData, setReposData } =
    useContext(MyContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/" + search);
  };

  const handleClick = async () => {
    localStorage.setItem("user", search);
    setFindUser(search);
    const getData = await fetchUserApi(search);
    setUserData(getData);
    const getReposData = await fetchReposApi(search);
    setReposData(getReposData);
    localStorage.setItem("userdata", JSON.stringify(userData));
    localStorage.setItem("reposdata", JSON.stringify(reposData));
    navigate("/" + search);
  };

  return (
    <Container>
      <Link to="/profile">
        <GithubLogo />
      </Link>
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          type="text"
          value={search}
          onChange={({ target }) =>
            setSearch(target.value.toLowerCase().trim())
          }
        />
        <button type="button" onClick={() => handleClick()}>
          Search
        </button>
      </SearchForm>
      <FaUserCircle />
    </Container>
  );
}

export default Header;
