import axiosInstance from "@/config/AxiosInstance"; // Importa la instancia de Axios personalizada
import { API_URL } from "@/config/config";
import { AxiosResponse } from "axios";
import { Article, ArticleDto } from "../model/ArticleModel";
import { CategoryModel } from "../model/CategoryModel";

export const getAllCategories = async (currentPage: number): Promise<{ content: CategoryModel[], totalElements: number }> => {
    try {
        const response = await axiosInstance.get<{ content: CategoryModel[], totalElements: number }>('category/public/list', {
            params: {
                page: currentPage,
                size: 12
            }
        });

        if (response.status === 204) {
            return { content: [], totalElements: 0 };
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getArticleById = async (id: number): Promise<Article | null> => {
    try {
        const response = await axiosInstance.get(`${API_URL}blog/public/article/${id}`);
        return response.data.content || null;
    } catch (error) {
        console.error('Error al obtener el artículo:', error);
        return null;
    }
};

export const getAllArticlesByEmploye = async (idEmploye: string | number): Promise<ArticleDto[]> => {
    try {
        const response: AxiosResponse<ArticleDto[]> = await axiosInstance.get(`${API_URL}blog/public/articles/employe/${idEmploye}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
