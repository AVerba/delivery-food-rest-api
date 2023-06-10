FROM node

WORKDIR /master

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "node", "index" ]
