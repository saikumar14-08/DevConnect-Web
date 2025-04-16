import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { createSocket } from "../utils/socket";

const Chat = () => {
  const location = useLocation();
  const { toUserId } = useParams();
  const toUserData = location?.state;
  const { firstName, lastName } = toUserData?.userData;
  const fromData = useSelector((store) => store?.add_user);
  const fromFirst = fromData?.firstName;
  const photoUrl = fromData?.photoUrl;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    if (!fromData?._id) {
      return;
    }
    const socket = createSocket();
    socket.emit("joinChat", { fromUser: fromData?._id, toUserId, fromFirst });
    socket.on("messageReceived", ({ fromFirst, text }) => {
      setMessages((prevState) => [...prevState, { text, fromFirst }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [fromData?._id, toUserId]);

  const sendMessage = () => {
    const socket = createSocket();
    socket.emit("sendMessage", {
      fromUser: fromData?._id,
      toUserId,
      fromFirst,
      text: newMessage,
    });
    setNewMessage("");
  };
  return (
    <div className="w-full max-w-md mx-auto shadow-xl border border-base-300 rounded-xl">
      <div className="bg-base-200 p-4 rounded-t-xl flex items-center justify-between">
        <h2 className="text-lg font-bold">
          Chat with {firstName + " " + lastName}
        </h2>
      </div>

      {messages.map((msg, index) => {
        const isMyMsg = msg?.fromFirst === fromFirst;
        return (
          <div
            key={index}
            className={`chat ${isMyMsg ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={photoUrl} alt="user avatar" />
              </div>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer text-xs opacity-50">
              {msg?.fromFirst} • 10:00 AM
            </div>
          </div>
        );
      })}

      {/* Input */}
      <div className="p-4 bg-base-200 flex items-center gap-2 rounded-b-xl">
        <input
          type="text"
          className="input input-bordered flex-grow"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
