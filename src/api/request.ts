import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios({
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.data
    });
    return response.data as T;
  } catch (err: any) {
    if (err.response) {
      throw new Error(
        `Error ${err.response.status}: ${err.response.statusText}`,
      );
    } else if (err.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(err.message);
    }
  }
};
