FROM node:12-alpine

WORKDIR /usr/app

COPY . .

RUN npm install
RUN npm run build

# COPY .env ./dist

EXPOSE 4000
# CMD ["node", "server.js"]

CMD ["npm", "start"]



