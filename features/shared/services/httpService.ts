import axios from "axios";

const apiManager = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: apiManager.get,
  post: apiManager.post,
  delete: apiManager.delete,
  put: apiManager.put,
  patch: apiManager.patch,
};

export default http;
