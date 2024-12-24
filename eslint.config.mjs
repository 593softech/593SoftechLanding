import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the FlatCompat instance to handle config extensions
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the base Next.js and TypeScript configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Desactivar regla para 'any'
      "react-hooks/exhaustive-deps": "off", // Desactivar regla para dependencias de useEffect
      "react/jsx-key": "off", // Desactivar regla para claves en listas
      "@next/next/no-img-element": "off", // Desactivar advertencia sobre <img> vs <Image>
      "@typescript-eslint/no-unused-vars": "off", // Desactivar advertencia para variables no utilizadas
      "@typescript-eslint/no-empty-object-type": "off", // Desactivar regla para tipo de objeto vacío
      "@typescript-eslint/explicit-module-boundary-types": "off", // Desactivar regla para tipos de frontera de módulo
      // Agrega otras reglas que necesites desactivar
    }
  }
];

export default eslintConfig;
