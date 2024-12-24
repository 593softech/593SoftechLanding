import axiosInstance from "@/config/AxiosInstance";

export const getDataHero = async () => {
    try {
        const response = await axiosInstance.get('about/hero');
        if (response.data == null) {
            return null;
        } else if (response.status === 204) {
            return null;
        } else {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};

export const getDataAbout = async () => {
    try {
        const response = await axiosInstance.get('about/getData');
        if (!response.data || response.data.content.length === 0) {
            return null;
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};
