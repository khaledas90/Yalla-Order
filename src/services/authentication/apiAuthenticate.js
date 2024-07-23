import axios from "axios";
import { read_cookie } from "sfcookies";

const token = localStorage.getItem("token");
const apiAuthenticate = axios.create({
    baseURL: "https://insta-order-site.web-allsafeeg.com/api",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Accept-Language": "en",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
apiAuthenticate.interceptors.request.use(
    (config) => {
        // const token = read_cookie("token");
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default apiAuthenticate;