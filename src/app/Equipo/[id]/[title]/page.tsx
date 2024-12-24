import { getEmployeById } from "@/services/service/EmployeService";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { API_URL_IMG, APP_DOMAIN, APP_NAME } from "@/config/config";
import { sanitizeTitle } from "@/utils/functions";
import "react-photo-view/dist/react-photo-view.css";
import EmployePage from "./EmployePage";

// Ensure generateMetadata handles asynchronous params correctly
export async function generateMetadata({
  params,
}: {
  params: { id: string; title: string };
}): Promise<Metadata> {
  try {
    // Await params to access properties safely
    const { id, title } = await params; // Await the params object

    const employe = await getEmployeById(Number(id));
    if (!employe) {
      return {
        title: "Empleado no encontrado",
        description: "El empleado solicitado no existe.",
      };
    }

    const employeeImageUrl = `${API_URL_IMG}Employe/${decodeURIComponent(
      employe.photo
    )}`;

    return {
      title: `${employe.fullName} - ${APP_NAME}`,
      description: employe.description || "Perfil del empleado",
      openGraph: {
        title: employe.fullName,
        description: employe.description,
        url: `${APP_DOMAIN}/Employe/${employe.idEmploye}/${sanitizeTitle(
          employe.fullName
        )}`,
        images: [
          {
            url: employeeImageUrl,
            width: 800,
            height: 600,
            alt: employe.fullName,
          },
        ],
      },
    };
  } catch {
    return {
      title: "Error al cargar los metadatos",
      description: "Hubo un problema al cargar los datos del empleado.",
    };
  }
}

// EquipoPage component also needs to await params
const EquipoPage = async ({
  params,
}: {
  params: { id: string; title: string };
}) => {
  try {
    // Await params before destructuring
    const { id, title } = await params; // Await params here

    const decodedTitle = decodeURIComponent(title);
    const employeeId = Number(id);

    if (isNaN(employeeId)) {
      notFound();
      return null;
    }

    const employe = await getEmployeById(employeeId);
    if (!employe) {
      notFound();
      return null;
    }

    const sanitizedEmployeTitle = employe.fullName
      ? sanitizeTitle(employe.fullName)
      : "";
    const sanitizedParamTitle = sanitizeTitle(decodedTitle);

    if (sanitizedEmployeTitle !== sanitizedParamTitle) {
      notFound();
      return null;
    }

    // Pass employee data to EmployePage component
    return <EmployePage employe={employe} />;
  } catch {
    notFound();
  }
};

export default EquipoPage;
