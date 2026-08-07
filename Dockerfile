# Etapa 1: Build de la aplicación con Node 20
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos los archivos de dependencias primero (aprovecha la caché de Docker)
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Variable de entorno necesaria en build time para Vite (si tu app la usa en el cliente)
ARG GEMINI_API_KEY
ENV GEMINI_API_KEY=$GEMINI_API_KEY

RUN npm run build

# Etapa 2: Servimos los archivos estáticos con Caddy
FROM caddy:2-alpine

COPY --from=build /app/dist /usr/share/caddy

EXPOSE 80
