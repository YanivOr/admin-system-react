FROM nginx
RUN npm run build --production
COPY build /usr/share/nginx/html
