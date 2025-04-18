import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { createSocket } from "../utils/socket";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

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
  const { _id } = fromData && fromData;
  const messagesEndRef = useRef(null); // 👈 for auto-scroll
  const socketRef = useRef(null);
  const fetchChat = async () => {
    const chatObj = await axios.get(BASE_URL + "/chat/" + toUserId, {
      withCredentials: true,
    });
    const chatMsg = chatObj?.data?.messages.map((msg) => {
      return {
        senderId: msg?.senderId?._id,
        fromFirst: msg?.senderId?.firstName,
        lastName: msg?.senderId?.lastName,
        text: msg?.text,
      };
    });
    setMessages(chatMsg);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  useEffect(() => {
    if (!fromData?._id) return;

    socketRef.current = createSocket();
    socketRef.current.emit("joinChat", {
      fromUser: fromData?._id,
      toUserId,
      fromFirst,
    });
    socketRef.current.on(
      "messageReceived",
      ({ fromFirst, fromUserId, text }) => {
        setMessages((prevState) => [
          ...prevState,
          { text, fromFirst, senderId: fromUserId },
        ]);
      }
    );

    return () => {
      socketRef.current.disconnect();
    };
  }, [fromData?._id, toUserId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    socketRef.current.emit("sendMessage", {
      fromUser: fromData._id,
      toUserId,
      fromFirst,
      text: newMessage,
    });
    setNewMessage("");
  };
  // 👇 Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-md mx-auto shadow-xl border border-base-300 rounded-xl h-[90vh] flex flex-col">
      <div className="bg-base-200 p-4 rounded-t-xl flex items-center justify-between">
        <h2 className="text-lg font-bold">
          Chat with {firstName + " " + lastName}
        </h2>
      </div>

      {/* Scrollable Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.map((msg, index) => {
          const isMyMsg = msg?.senderId === _id;
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
        <div ref={messagesEndRef} /> {/* 👈 Auto-scroll anchor */}
      </div>

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
