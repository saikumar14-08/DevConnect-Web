import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store?.add_user);
  const dispatch = useDispatch();
  const logout = () => {
    console.log("User cicked logout: ", user);

    dispatch(removeUser());
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Dev Connect
        </Link>
      </div>
      <div className="flex gap-2">
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
              Hi, {user.firstName}
              <Link to={"/profile"}>
                <li className="justify-between my-2">Profile</li>
              </Link>
              <li>Settings</li>
              <Link to="/" onClick={logout}>
                <li className="my-2">Logout</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
