import axios from "axios";

axios.defaults.baseURL = "https://staging-api.getfancy.ai";

const apiConfig = axios.create({
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // "Access-Control-Allow-Origin": "*",
  },
});
export default apiConfig;
