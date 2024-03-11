FROM node:20-alpine

WORKDIR /user/src/app/server

COPY package*.json ./

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]