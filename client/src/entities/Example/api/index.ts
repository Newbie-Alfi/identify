import { AxiosRequestConfig } from "axios";
import { auth } from "@shared/api/auth/config";
import { IExampleResponse } from "./models";

export const exampleApi = () => {
  const list = (params?: AxiosRequestConfig) =>
    auth.get<IExampleResponse>("ex", params);

  const getOne = (name: string, params?: AxiosRequestConfig) =>
    auth.get<IExampleResponse>(name, params);

  return { list, getOne };
};
