"use client";

import InputField from "@/components/field/InputField";
import TextArea from "@/components/field/TextArea";
import Mail from "@/assets/svg/Mail.json";
import React, { useState } from "react";
import { contactar } from "@/services/service/ContactService";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const FormContactUs = () => {
  const [nombresRemitente, setNombresRemitente] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Estado para controlar si el formulario debe mostrarse

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const contactoRequest = {
      nombresRemitente,
      empresa,
      email,
      asunto,
      telefono,
    };

    try {
      const response = await contactar(contactoRequest);
      console.log("Respuesta del servidor:", response);

      if (response?.message) {
        setSuccessMessage(response.message); // Asigna el mensaje de éxito
        setIsFormSubmitted(true); // Oculta el formulario
      }
    } catch (error: any) {
      const errorMessage = error?.message || "Ocurrió un error inesperado";
      toast.error(errorMessage); // Muestra el mensaje en el toast
    }
  };

  return (
    <div className="grid lg:py-16 lg:px-32">
      <div className="bg-gradient-to-r bg-bunker-800 lg:rounded-3xl grid lg:grid-cols-2 lg:justify-normal">
        {!isFormSubmitted ? (
          // Si el formulario no ha sido enviado exitosamente, mostrar el formulario
          <div className="grid p-8 text-center">
            <h1 className="text-warning-500 text-4xl font-bold pb-8 py-3">
              Contactanos
            </h1>
            <div className="grid w-full text-justify gap-y-3">
              <InputField
                placeholder="Ingrese sus nombres"
                inline
                mode="text"
                label="Nombres"
                value={nombresRemitente}
                onChange={(e) => setNombresRemitente(e.target.value)}
              />
              <InputField
                placeholder="Google INC."
                inline
                mode="text"
                label="Nombre de la empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
              <InputField
                placeholder="empresa@ejemplo.com"
                inline
                mode="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                placeholder="0987654321"
                inline
                mode="numeric"
                label="Telefono:"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <TextArea
                rows={5}
                placeholder="Deseo recibir información acerca de sus productos o servicios de desarrollo a medida.."
                label="Asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
              <div>
                <button
                  className="relative group inline-block w-fit sm:w-auto py-4 px-10 text-white font-semibold rounded-full bg-bunker-500 hover:bg-bunker-900 transition-colors duration-500 overflow-hidden"
                  onClick={handleSubmit}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="mr-4">Enviar</span>
                    <span>
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
                          fill="#FFF2EE"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Animación con Framer Motion para el éxito
          <motion.div
            className="grid p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-warning-500 text-4xl font-bold pb-8 py-3">
              ¡Gracias por contactarnos!
            </h1>
            <p className="text-white">{successMessage}</p>
          </motion.div>
        )}

        <div className="flex justify-center lg:pb-0 pb-4">
          <div className="my-auto h-fit">
            <Lottie animationData={Mail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactUs;
