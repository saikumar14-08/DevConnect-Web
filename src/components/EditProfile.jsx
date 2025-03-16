import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  // const user = useSelector((store) => store?.add_user);
  // const [firstName, setFirstName] = useState(user?.firstName);
  // const [lastName, setLastName] = useState(user?.lastName);
  // const [age, setAge] = useState(user?.age || "");
  // const [about, setAbout] = useState(user?.about || "");
  // const [gender, setGender] = useState(user?.gender || "");
  // const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, about, gender, photoUrl },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);

      dispatch(addUser(res?.data));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } catch (e) {
      console.log(e.response);
      setError(e.response.data);
    }
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAge(user.age || "");
      setAbout(user.about || "");
      setGender(user.gender || "");
      setPhotoUrl(user.photoUrl || "");
    }
  }, [user]);
  return (
    <div className="flex justify-center mx-8">
      {toast && (
        <div className="toast toast-top toast-center z-10">
          <div className="alert alert-info">
            <span>Profile Saved Successfully!</span>
          </div>
        </div>
      )}
      <div className="flex justify-center m-10">
        <div className="card bg-base-300 w-96 shadow-sm">
          <h2 className="card-title mt-4 text-2xl justify-center">
            Edit Profile
          </h2>

          <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text my-2">First Name:</span>
            </div>
            <input
              type="text"
              value={firstName}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text ,y-2">Last Name:</span>
            </div>
            <input
              type="text"
              value={lastName}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text ,y-2">Photo Url</span>
            </div>
            <input
              type="text"
              value={photoUrl}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text ,y-2">Age:</span>
            </div>
            <input
              type="number"
              value={age}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text ,y-2">About:</span>
            </div>
            <input
              type="text"
              value={about}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>

          {/* <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text ,y-2">Gender: </span>
            </div>
            <input
              type="text"
              value={gender}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setGender(e.target.value)}
            />
          </label> */}

          <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text my-2">Gender:</span>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                {gender || "Select Gender"}
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow"
              >
                <li onClick={() => setGender("male")}>
                  <a>male</a>
                </li>
                <li onClick={() => setGender("female")}>
                  <a>female</a>
                </li>
              </ul>
            </div>
          </label>
          {/* <label className="form-control w-full max-w-xs m-3">
            <div className="label">
              <span className="label-text ,y-2">Skills: </span>
            </div>
            <input
              type="text"
              value={skills}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setSkills(e.target.value)}
            />
          </label> */}
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={saveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <div>
        <UserCard
          data={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
    </div>
  );
};

export default EditProfile;
