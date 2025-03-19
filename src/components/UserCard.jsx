import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeedCard } from "../utils/feedSlice";

const UserCard = ({ data }) => {
  const { firstName, lastName, photoUrl, age, gender, skills, about, _id } =
    data || {};
  const dispatch = useDispatch();

  const handleRequest = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeedCard(_id));
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="flex justify-center mt-10 min-h">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            className="w-3/4"
            src={photoUrl || "https://via.placeholder.com/150"}
            alt="Photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && <div>Age: {age}</div>}
          {gender && <div>Gender: {gender}</div>}
          {/* {skills.length > 0 && (
            <div>
              {skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          )} */}

          {about && <div>About: {about}</div>}
          <div className="card-actions justify-center py-2">
            <button
              className="btn btn-primary mr-4"
              onClick={() => handleRequest("ignored", _id)}
            >
              Igonre
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
