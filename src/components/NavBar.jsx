import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store?.add_user);
  const dispatch = useDispatch();
  const logout = () => dispatch(removeUser());
  return (
    <div className="navbar bg-base-100 shadow-sm px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
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
              className="fixed menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-36 p-2 shadow"
            >
              <li>
                <a>Hi, {user.firstName}</a>
              </li>
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
