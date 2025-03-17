FROM node:14-slim
WORKDIR /home/backend
COPY ./package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node","index.js"]
