import { HeroModel } from "@/services/model/HeroModel";
import { API_URL } from "@/config/config";
import axiosInstance from "@/config/AxiosInstance"; // Importa la instancia de Axios personalizada

export const fetchHeroData = async (): Promise<HeroModel> => {
    try {
        const response = await axiosInstance.get(`${API_URL}hero/getData`); // Usa axiosInstance en lugar de axios
        if (!response.data || !response.data.content) {
            throw new Error('Invalid data format');
        }
        return response.data.content as HeroModel;
    } catch (error) {
        console.error('Error fetching hero data:', error);
        throw new Error('Failed to fetch hero data');
    }
};
