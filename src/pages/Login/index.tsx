import React, { useState } from "react";

import { BsGithub } from "react-icons/bs";
import { loginFooter } from "../../data/data";

import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="login__container">
      {/* Logo */}
      <BsGithub className="login-logo" />
      {/* Sign in */}
      <h1 className="login-title">Sign in to GitHub</h1>
      {/* Forms */}
      <form action="">
        <label htmlFor="email-input">
          Username
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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
        <button type="button" className="btn-singin">
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
