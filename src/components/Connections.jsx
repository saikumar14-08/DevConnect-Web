import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { showConnections } from "../utils/connectionsSlice";
import ConnReqCard from "./ConnReqCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsStore = useSelector((store) => store?.connections);
  const getConnections = async () => {
    try {
      let res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      const connectionsData = res?.data;
      dispatch(showConnections(connectionsData));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);
  return (
    <>
      <div>
        {Array.isArray(connectionsStore) ? (
          connectionsStore?.map((req) => {
            const userId =
              typeof req.fromUserId === "string"
                ? req.fromUserId
                : req.fromUserId;
            return (
              <ConnReqCard key={req._id} pageType="connections" data={req} />
            );
          })
        ) : (
          <h2 className="text-xl font-semibold flex justify-center mt-4">
            {connectionsStore || "No connections"}
          </h2>
        )}
      </div>
    </>
  );
};

export default Connections;
