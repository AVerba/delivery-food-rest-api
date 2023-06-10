FROM node

WORKDIR /master

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "node", "server" ]
