FROM node:12.16.0

RUN mkdir /home/node-server

WORKDIR /home/node-server


COPY dist/bundle.js .

EXPOSE 3000

CMD ["node", "bundle"]
