import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocket = () => {
  return io(BASE_URL, { withCredentials: true });
};
