// apiAuthRegister.js
import axios from "axios";

const apiAuthenticate = axios.create({
    baseURL: "https://insta-order-site.web-allsafeeg.com/api",
    timeout: 5000,
});

export default apiAuthenticate;