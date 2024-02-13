FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

COPY index.html /var/www/html/
COPY style.css /var/www/html/
COPY script.js /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]