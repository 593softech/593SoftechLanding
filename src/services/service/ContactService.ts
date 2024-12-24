import axiosInstance from "@/config/AxiosInstance";
import { API_URL } from "@/config/config";

export const contactar = async (contactoRequest: ContactoRequest) => {
  try {
    const response = await axiosInstance.post(`${API_URL}Contacto/Contactar`, contactoRequest);
    return response.data; // Deberías retornar la respuesta si todo va bien.
  } catch (error: any) {
    console.error("Error al contactar:", error);
    
    // Si el error contiene una respuesta de servidor, lanza el mensaje de error adecuado.
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message); // Lanza el mensaje de error desde el backend
    }

    // Si el error no tiene la estructura esperada, lanza un mensaje genérico.
    throw new Error("Ocurrió un error inesperado.");
  }
};
