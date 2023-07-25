import React, { useState } from "react";
import './Login.css';

function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Track the show/hide password state

  function handleLogin() {
    if (login.trim() !== "" && password.trim() !== "") {
      props.onLogin();
    }
  }

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form autoComplete="off">
      <input
        className="login-input"
        type="text"
        placeholder="Login"
        name="Enter the name"
        onChange={(event) => setLogin(event.target.value)}
      />

      <div className="password-input-container">
        <input
          className="login-password"
          type={showPassword ? "text" : "password"} // Show password in plaintext if showPassword is true
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
      </div>
    </form>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;


