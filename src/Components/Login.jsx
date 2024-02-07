import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  function handleLogin(){
    navigate('/dashboard');
  }
  return (
    <div className="container">
      <div className="row">
        <div className="log-box">
          <form onSubmit={handleLogin} className="log-form">
            <h1>Hey there!</h1>
            <label for="email">Email</label>
            <input
              id="email"
              type="string"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please Enter your Email"
              className="input-box"
            />
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please Enter your Email"
              className="input-box"
            />
            <div className="forgot-box">
              <div>
                <input id="radio" type="radio" />
                <label for="radio">Remember me</label>
              </div>
              <button className="forgot-btn">Forgot Password</button>
            </div>
            <button className="btn log-btn" type="submit">
              Login
            </button>
            <button className="btn google-btn"><GoogleIcon/>Login With Google</button>
            <div className="content">
              <p>
                Don't have an account ? <a href="#">Sign up</a>
              </p>
            </div>
          </form>
        </div>

        <div className="company-det">
          <h1>Migrate Data like a breeze</h1>
          <p>High performance data pipelines built in a minute</p>
          <img
            src="https://www.serverbasket.com/wp-content/uploads/2018/05/vps-server-price-india.png"
            alt="database"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
