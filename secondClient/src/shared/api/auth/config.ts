import axios, { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { BACKEND_URL } from "../config";

const config: AxiosRequestConfig = {
  baseURL: BACKEND_URL,
};

export const api = axios.create(config);
export const auth = axios.create({
  baseURL: BACKEND_URL,
});

auth.interceptors.request.use((conf) => {
  if (conf.headers) {
    const accessToken = localStorage.getItem("accessToken");
    const bearer = accessToken ? `Bearer ${accessToken}` : undefined;

    /* eslint-disable-next-line */
    conf.headers.Authorization = bearer;
  }

  return conf;
});

axiosRetry(auth, {
  retries: 2,
  retryCondition: (error) => error.response?.status === 401,
  onRetry() {
    // apiClient.auth.refresh();
  },
});
