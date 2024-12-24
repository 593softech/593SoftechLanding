// src/services/service/AxiosInstance.ts
import axios from 'axios';
import { API_URL } from './config';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Agregar un interceptor para evitar el almacenamiento en caché
axiosInstance.interceptors.request.use((config) => {
    config.headers['Cache-Control'] = 'no-cache';
    config.headers['Pragma'] = 'no-cache';
    config.headers['Expires'] = '0';  // También puedes agregar este encabezado
    return config;
});

export default axiosInstance;
