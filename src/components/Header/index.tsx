import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyContext from "../../MyContext";

import { Container, GithubLogo, SearchForm } from "./styles";

function Header() {
  const [search, setSearch] = useState("");

  const { setUserData } = useContext(MyContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/" + search);
  };

  const handleClick = () => {
    setUserData(search);
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
