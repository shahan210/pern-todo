import axios from "axios";

const baseUrl = "http://localhost:3000";
// const baseUr1 = import.meta.env.BASE;
// console.log(baseUrl);
const axiosInstance = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    } else {
      return response;
    }
  },
  (err) => {
    const config = err?.config;
    if (err?.response?.status === 401 && !config?.sent) {
      console.log("conf refresh--------------------");
    }
    if (err?.response?.status === 403) {
      // console.log("forbidden");
    }
    if (!err.response) {
      console.log("Err! Network err!");
    }
    throw err;
  }
);
export default axiosInstance;
