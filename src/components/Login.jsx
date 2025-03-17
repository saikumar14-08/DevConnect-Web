import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("tbot@gmail.com");
  const [password, setPassword] = useState("Tbot@1999");
  const [userData, setuserData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userinfo = useSelector((store) => store?.add_user);

  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      const loggedUser = res.data;
      dispatch(addUser(loggedUser));
      navigate("/feed");
    } catch (error) {
      const er = error?.response?.data;
      setErrorMsg("Error: Invalid Credentials");
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center ">
      <div className="card card-border bg-base-300 w-96 flex justify-center">
        <div className="card-body p-4">
          <h2 className="card-title">Login</h2>
          <label className="input validator mb-3">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              autoComplete="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <label className="input validator mb-3">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          {errorMsg && <p className="text-red-950">{errorMsg}</p>}
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={loginHandle}>
              Login
            </button>
          </div>

          <div className="justify-center">New here? Please Sign up!</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
