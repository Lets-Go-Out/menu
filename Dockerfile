FROM node:latest
RUN mkdir -p /src/menu

WORKDIR /src/menu
COPY . /src/menu

RUN npm install --production

EXPOSE 3001

CMD npm start