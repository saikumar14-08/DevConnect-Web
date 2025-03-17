import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { requestsReceived, removeRequests } from "../utils/requestsSlice";
import UserCard from "./UserCard";
import ConnReqCard from "./ConnReqCard";

const Requests = () => {
  const dispatch = useDispatch();
  const requestsStore = useSelector((store) => store?.requests);

  const handleIgnore = async (user) => {
    const ignoreId = user?.fromUserId?._id;
    try {
      await axios.post(
        BASE_URL + "/request/review/rejected/" + ignoreId,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(user._id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleInterested = async (user) => {
    const acceptId = user?.fromUserId?._id;
    try {
      await axios.post(
        BASE_URL + "/request/review/accepted/" + acceptId,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(user._id));
    } catch (e) {
      console.log(e);
    }
  };
  const connectionRequests = async () => {
    try {
      const fetchRequests = await axios.get(
        BASE_URL + "/user/requests/received",
        { withCredentials: true }
      );
      dispatch(requestsReceived(fetchRequests?.data));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    connectionRequests();
  }, []);
  return (
    <>
      <div>
        {Array.isArray(requestsStore) && requestsStore.length > 0 ? (
          requestsStore.map((req) => {
            const userInfo = req.fromUserId;

            return (
              <ConnReqCard
                key={req._id}
                pageType="requests"
                data={userInfo}
                onIgnore={() => handleIgnore(req)}
                onInterested={() => handleInterested(req)}
              />
            );
          })
        ) : (
          <h2 className="text-xl font-semibold flex justify-center mt-4">
            No connection requests
          </h2>
        )}
      </div>
    </>
  );
};

export default Requests;
