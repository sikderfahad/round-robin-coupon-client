import axios from "axios";

const axiosSecure = axios.create({
  //   baseURL: "http://localhost:3000",
  baseURL: "https://round-robin-coupon-server.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
