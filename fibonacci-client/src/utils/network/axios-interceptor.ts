import { AxiosInstance } from "axios";
import { appConfig } from "../../config/app-config";

const onRequest = (config: any) => {
  config.baseURL = appConfig.apiUrl;

  return config;
};

export function setUpInterceptor(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest);

  return axiosInstance;
}
