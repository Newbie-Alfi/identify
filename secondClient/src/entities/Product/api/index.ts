import axios, { AxiosRequestConfig } from "axios";
import { BACKEND_URL } from "../../../shared/api/config";
import { IProductResponse } from "./models";

export const productApi = (fingerprint: string) => {
  console.log(BACKEND_URL);

  const api = axios.create({
    baseURL: `${BACKEND_URL}products/`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      fingerprint,
    },
  });

  const list = async (params?: AxiosRequestConfig) => {
    const response = await api.get<IProductResponse[]>("", params);

    return response.data;
  };

  const pick = async (id: number, params?: AxiosRequestConfig) => {
    await api.post<IProductResponse>("toggle/", { product_id: id }, params);
  };

  return { list, pick };
};
