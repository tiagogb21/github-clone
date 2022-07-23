import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/" + search);
  };

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo ..."
          type="text"
          value={search}
          onChange={({ target }) =>
            setSearch(target.value.toLowerCase().trim())
          }
        />
      </SearchForm>
      <FaUserCircle />
    </Container>
  );
}

export default Header;
