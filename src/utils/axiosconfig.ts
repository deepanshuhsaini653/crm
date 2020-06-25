import Axios from "axios";
import { getAuthToken } from './types'

const axiosAPi = Axios.create({
    // baseURL: "http://localhost:1200/api"
});

axiosAPi.interceptors.request.use(config => {
    const token = getAuthToken();
    if (token) {
        config.headers.authorization = `${token}`;
    }

    return config;
});

export const axios = axiosAPi;