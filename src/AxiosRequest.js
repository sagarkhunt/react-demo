import axios from "axios";
const { CancelToken } = axios;
const _cancelToken = {};
const AxiosRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_END_POINT}`,
});
AxiosRequest.interceptors.request.use(
  (config) => {
    const { cancelToken } = config;
    if (cancelToken) {
      // cancel previous request and delete from queue
      if (_cancelToken[cancelToken]) {
        const source = _cancelToken[cancelToken];
        delete _cancelToken[cancelToken];
        source.cancel();
      }
      // add current request in queue
      const source = CancelToken.source();
      config.cancelToken = source.token;
      _cancelToken[cancelToken] = source;
    }
    // change some global axios configurations
    // add accessToken header before sending api
    const accessToken = localStorage.getItem("authToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) =>
    // handle error from sending api requests
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error),
);

AxiosRequest.interceptors.response.use(
  (response) => {
    const { cancelToken } = response.config;
    if (cancelToken) {
      // delete request from queue
      delete _cancelToken[response.config.cancelToken];
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosRequest;
