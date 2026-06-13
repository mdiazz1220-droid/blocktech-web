FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM caddy:alpine

COPY --from=0 /app/dist /srv

EXPOSE 80

CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":80"]
