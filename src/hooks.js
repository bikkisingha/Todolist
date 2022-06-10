import axios from "axios";
import { useCallback, useState } from "react";
import { generatePath } from "react-router-dom";

export function useAxios(apiConfig) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const fetchData = useCallback(
    async (params, data, headers) => {
      setLoading(true);
      return axios({
        ...apiConfig,
        url: generatePath(apiConfig.url, params),
        params,
        data
      }).then((res) => {
        setLoading(false);
        setResult(res);
      });
    },
    [apiConfig]
  );
  return [loading, result, fetchData];
}
