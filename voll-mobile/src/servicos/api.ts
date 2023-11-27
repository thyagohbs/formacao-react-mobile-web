import axios from "axios";

const api = axios.create({
  baseURL: "http://186.249.58.46:3000"
})

export default api; 