import axios from "axios";

const api = axios.create({
  baseURL: "http://10.1.66.45:3000"
})

export default api; 