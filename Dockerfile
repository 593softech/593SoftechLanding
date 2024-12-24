# eslint-disable
# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias forzando la resolución de dependencias con --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación de Next.js
RUN npm run build --no-lint

# Establece la variable de entorno para producción
ENV NODE_ENV=production

# Expone el puerto 3000 para la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
