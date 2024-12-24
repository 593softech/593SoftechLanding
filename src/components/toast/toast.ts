"use client";

import { useState, useEffect } from "react";
import { ToastPosition } from "react-hot-toast";
import "@/assets/styles/globals.css";

// Función para manejar la posición del toaster según el tamaño de la pantalla
export function useToasterPosition(): ToastPosition {
    const [toasterPosition, setToasterPosition] = useState<ToastPosition>("bottom-center");

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setToasterPosition("bottom-center");
            } else {
                setToasterPosition("top-center");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return toasterPosition;
}

// Estilos personalizados para los diferentes tipos de toast
export const styleToast = {
    loading: {
        style: {
            borderRadius: "25px",
            background: "linear-gradient(to right, rgba(32, 32, 32, 0.75), rgba(0, 77, 64, 0.75))",
            color: "#fff",
            backdropFilter: "blur(8px)",
        },
    },
    success: {
        style: {
            borderRadius: "25px",
            background: "linear-gradient(to right, rgba(32, 32, 32, 0.75), rgba(0, 77, 64, 0.75))",
            color: "#fff",
            backdropFilter: "blur(8px)",
        },
    },
    error: {
        style: {
            borderRadius: "25px",
            background: "linear-gradient(to right, rgba(32, 32, 32, 0.75), rgba(139, 0, 0, 0.75))",
            color: "#fff",
            backdropFilter: "blur(8px)",
        },
    },
};