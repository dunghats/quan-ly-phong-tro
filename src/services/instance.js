import axios from "axios";
import { TOKEN_AUTHENTICATION } from "../constants";

const instance = axios.create({
  baseURL: "http://localhost:8081/api/",
  timeout: 3000,
});

const token = localStorage.getItem(TOKEN_AUTHENTICATION);

instance.interceptors.request.use((config) => {
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});
instance.interceptors.response.use(({ data }) => data);

export default instance;
