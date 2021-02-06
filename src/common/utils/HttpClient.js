import { useEffect, useState } from "react";

const HttpClient = (httpClient) => {
  const [error, setError] = useState(null);

  const requestInterceptor = httpClient.interceptors.request.use(
    (request) => {
      const accessToken = "Bearer " + localStorage.getItem("access_token");

      request.headers["Authorization"] = accessToken;
      setError(null);
      return request;
    },
    (error) => {
      setError(error);
      return error;
    }
  );

  const responseInterceptor = httpClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      setError(error);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(requestInterceptor);
      httpClient.interceptors.response.eject(responseInterceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestInterceptor, responseInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};

export default HttpClient;
