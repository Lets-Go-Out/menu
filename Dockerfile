FROM node:latest
RUN mkdir -p /src/menu

WORKDIR /src/menu
COPY ./public /src/menu
COPY ./server /src/menu
COPY ./database /src/menu
COPY ./package.json /src/menu

RUN npm install --production

EXPOSE 3001

CMD npm start