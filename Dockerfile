FROM node:14.18.1-alpine

RUN mkdir /node-microservice

RUN chown -R node:node /node-microservice

USER node

WORKDIR /node-microservice

# COPY jest.* /node-microservice/
# COPY tsconfig.json /node-microservice/

COPY package*.json /node-microservice/

COPY yarn.lock /node-microservice/

COPY --chown=node:node . /node-microservice/

RUN yarn install

RUN yarn build

CMD [ "node","build/index.js" ]