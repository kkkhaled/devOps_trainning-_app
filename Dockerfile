FROM node:16

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password


RUN mkdir -p /home/app

COPY . /home/app

CMD [ "node", "/home/app/server.js" ]
