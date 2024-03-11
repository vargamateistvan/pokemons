FROM node:18-alpine

WORKDIR /user/src/app/client

COPY package*.json ./

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]