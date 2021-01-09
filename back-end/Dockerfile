FROM node:alpine

WORKDIR /home/api

COPY package.json .
COPY yarn.lock .

# RUN npm install -g yarn
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]