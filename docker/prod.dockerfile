FROM node:16-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run prisma:gen

EXPOSE 3000

CMD [ "yarn", "run" ,"start" ]