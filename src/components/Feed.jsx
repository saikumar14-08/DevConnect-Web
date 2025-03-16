import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();

  const feedAPIData = useSelector((store) => store?.feed);

  const feedAPI = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    feedAPI();
  }, []);

  return (
    <div>
      {feedAPIData?.map((data) => (
        <UserCard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default Feed;
