FROM node:12-alpine
WORKDIR /Proyecto 2
COPY . .
RUN npm install 
CMD ["node", "src/app.js"]
