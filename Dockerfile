FROM nginxinc/nginx-unprivileged:alpine

ENV STORY_BASE_PATH=/apps/little-journey-to-russia \
    NGINX_ENVSUBST_FILTER=^STORY_BASE_PATH$

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY index.html /usr/share/nginx/html/index.html
COPY src/ /usr/share/nginx/html/src/
COPY styles/ /usr/share/nginx/html/styles/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 8080
