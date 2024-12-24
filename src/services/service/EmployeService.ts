import axiosInstance from "@/config/AxiosInstance"; // Importa la instancia de Axios personalizada
import { API_URL } from "@/config/config";
import { AxiosResponse } from "axios";
import { Employe } from "../model/Employe";

export const getAllEmployes = async (currentPage: number): Promise<{ content: Employe[], totalElements: number }> => {
    try {
        const response: AxiosResponse<{ content: Employe[], totalElements: number }> = await axiosInstance.get(API_URL + 'employe/public/list', {
            params: {
                page: currentPage,
                size: 12
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getEmployeById = async (id: number): Promise<Employe> => {
    try {
        const response = await axiosInstance.get(`${API_URL}employe/public/${id}`);
        return response.data.content;
    } catch (error) {
        throw error;
    }
};
