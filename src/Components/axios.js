import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-rns7.onrender.com",
});
export default instance;
