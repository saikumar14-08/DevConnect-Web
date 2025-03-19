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

  if (!feedAPIData) return;
  if (feedAPIData.length <= 0) {
    return (
      <div className="text-3xl font-bold my-10 flex justify-center">
        No users found.
      </div>
    );
  }
  return (
    <div className="my-10">
      {/* {feedAPIData?.map((data) => (
        <UserCard key={data._id} data={data} />
      ))} */}
      <UserCard data={feedAPIData?.[0]} />
    </div>
  );
};

export default Feed;
