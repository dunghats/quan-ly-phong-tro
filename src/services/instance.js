import axios from "axios";
import { TOKEN_AUTHENTICATION } from "../constants";

const instance = axios.create({
  baseURL: "https://nr6rcy-3001.csb.app/api",
  timeout: 3000,
});

const token = localStorage.getItem(TOKEN_AUTHENTICATION);

instance.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
instance.interceptors.response.use(({ data }) => data);

export default instance;
