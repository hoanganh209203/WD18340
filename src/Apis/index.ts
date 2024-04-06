import axios from "axios";

const instance = axios.create({
  baseURL: "https://nodejs-fe.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});
export default instance;