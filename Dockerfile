FROM nginx:stable-alpine

COPY release /usr/share/nginx/html
COPY nginx/ /etc/nginx/