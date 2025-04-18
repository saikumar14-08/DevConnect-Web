import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocket = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL, { transports: ["websocket"], withCredentials: true });
  } else {
    return io("https://www.devconnekt.com", {
      path: "/api/socket.io",
      transports: ["websocket"],
      withCredentials: true,
    });
  }
};
