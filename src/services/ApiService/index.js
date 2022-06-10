import axios from "axios";
import { generatePath } from "react-router-dom";

function ApiService(apiConfig) {
  const { url, baseURL, method } = apiConfig;
  return async (params, data, headers) => {
    return axios({
      method,
      baseURL,
      url: generatePath(url, params),
      params,
      data,
      headers: {
        ...apiConfig.headers,
        ...headers
      }
    }).then((result) => result.data);
  };
}

export default ApiService;
