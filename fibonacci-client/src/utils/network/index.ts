import axios, { AxiosRequestHeaders } from "axios";
import { setUpInterceptor } from "./axios-interceptor";

class Network {
  axios = setUpInterceptor(axios);

  public async get({
    path,
    headers,
    options,
  }: {
    path: string;
    headers?: AxiosRequestHeaders;
    options?: any;
  }) {
    const response = await axios.get(path, {
      headers,
      ...options,
    });

    return response;
  }
}

export default new Network();
