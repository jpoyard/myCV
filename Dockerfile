FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./dist/myCV .
COPY ./deployment/nginx/security-headers.conf /etc/nginx/security-headers.conf
COPY ./deployment/nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
