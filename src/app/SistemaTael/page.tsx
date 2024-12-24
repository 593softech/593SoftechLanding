import { Metadata } from "next";
import React from "react";
import Form from "./Form";

// Definir metadatos estáticos
export const metadata: Metadata = {
  title: "Sistema TAEL",
  description:
    "Vende en linea, factura automáticamente con el SRI ECUADOR y ocúpalo en tus puntos de venta físicos, manteniendo la gestión de tu negocio al día. #TodoEnUno",
  openGraph: {
    title: "Sistema TAEL",
    description:
      "Vende en linea, factura automáticamente con el SRI ECUADOR y ocúpalo en tus puntos de venta físicos, manteniendo la gestión de tu negocio al día. #TodoEnUno",
  },
  twitter: {
    title: "Demostracion de TAEL",
    description:
      "Optimiza tus operaciones con nuestra plataforma intuitiva. ¡Gestiona tu negocio de forma eficiente y aumenta tus ventas con total seguridad!",
  },
};

// Componente de la página
export default function SistemaTaelPage() {
  return <Form />;
}
