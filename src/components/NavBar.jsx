import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
const NavBar = () => {
  const user = useSelector((store) => store?.add_user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      const logOutUser = await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-8">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          Dev Connect
        </Link>
      </div>
      <div className="flex gap-2">
        {user && <span className="pr-4 pt-3">Hi, {user?.firstName}</span>}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="fixed menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-36 p-4 shadow"
            >
              <Link to="/profile">Profile</Link>
              <Link to="/connections">Connections</Link>
              <Link to="/requests">Requests</Link>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
