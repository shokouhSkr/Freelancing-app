import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const apiManager = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

apiManager.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

apiManager.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log("err.config: ", err.config);
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return apiManager(originalConfig);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

const http = {
  get: apiManager.get,
  post: apiManager.post,
  delete: apiManager.delete,
  put: apiManager.put,
  patch: apiManager.patch,
};

export default http;
