import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "My_API_BASE_URL need to add",
});

export default axiosInstance;
