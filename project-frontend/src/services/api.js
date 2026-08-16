import axios from "axios";

const api = axios.create({
    baseURL: "https://secure-auth-project.onrender.com/api",
    withCredentials: true,
});

export default api;