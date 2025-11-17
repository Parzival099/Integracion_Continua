FROM node:18-alpine

# Instalar nginx
RUN apk add --no-cache nginx

# Crear directorios necesarios
RUN mkdir -p /run/nginx /var/www/html

WORKDIR /app

# Copiar archivos del backend
COPY package.json server.js ./
RUN npm install

# Copiar frontend
COPY index.html /var/www/html/

# Configurar nginx
RUN echo 'server { \
    listen 80; \
    root /var/www/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ =404; \
    } \
}' > /etc/nginx/http.d/default.conf

# Exponer puertos
EXPOSE 80 4000

# Script de inicio
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
