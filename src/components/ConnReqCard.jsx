import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRequests } from "../utils/requestsSlice";

const ConnReqCard = ({ pageType, data, onIgnore, onInterested }) => {
  return (
    <div className="flex items-center max-w-lg mx-auto my-6 p-4 bg-gray-900 text-white border-2 border-neon rounded-xl shadow-lg">
      {/* Left: Profile Image */}
      <div className="w-30 h-30 flex-shrink-0">
        <img
          src={data?.photoUrl}
          alt={`${data?.firstName} ${data?.lastName}`}
          className="w-full h-full object-cover rounded-lg border-2 border-neon"
        />
      </div>

      {/* Right: Information & Buttons */}
      <div className="ml-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold">
          {data?.firstName} {data?.lastName}
        </h2>
        <p className="text-sm text-gray-400">Age: {data?.age}</p>
        <p className="mt-1 text-gray-300">{data?.about}</p>

        {/* Skills */}
        <div className="mt-2 flex flex-wrap gap-2">
          {data?.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-800 border border-neon rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons (Only for Requests Page) */}
        {pageType === "requests" && (
          <div className="mt-4 flex gap-3">
            <button className="btn btn-primary mr-4" onClick={onIgnore}>
              Ignore
            </button>
            <button className="btn btn-secondary" onClick={onInterested}>
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnReqCard;
