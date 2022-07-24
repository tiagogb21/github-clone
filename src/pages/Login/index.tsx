import React, { useContext, useEffect, useState } from "react";

import MyContext from "../../MyContext";

import { BsGithub } from "react-icons/bs";
import { loginFooter } from "../../utils/data";

import "./styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  window.localStorage.clear();

  const navigate = useNavigate();

  const { userData, getDataFromUser } = useContext(MyContext);

  useEffect(() => {
    getDataFromUser(user);
  }, [user]);

  const handleClick = () => {
    if (!userData) return;
    localStorage.setItem("user", user);
    localStorage.setItem("userdata", JSON.stringify(userData));
    navigate(`/${user}`);
  };

  return (
    <main className="login__container">
      {/* Logo */}
      <BsGithub className="login-logo" />
      {/* Sign in */}
      <h1 className="login-title">Sign in to GitHub</h1>
      {/* Forms */}
      <form className="form__container" action="">
        <label htmlFor="email-input">
          Username
          <input
            id="user-input"
            type="text"
            value={user}
            onChange={({ target }) => setUser(target.value)}
          />
        </label>
        <label htmlFor="password-input">
          <span className="title-password">
            Password
            <a href="">Forgot password?</a>
          </span>
          <input
            id="password-input"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button
          type="button"
          className="btn-singin"
          onClick={() => handleClick()}
        >
          Sign in
        </button>
      </form>
      {/* Create account */}
      <p className="create-acc">
        <span style={{ marginRight: "3px" }}>New to GitHub?</span>
        <a href="">Create an account</a>
      </p>
      <ul className="login__footer">
        {Object.values(loginFooter).map((item) => (
          <li key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Login;
