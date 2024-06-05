FROM node:20-alpine
COPY . /src/app
WORKDIR /src/app
ENV NODE_OPTIONS=--max-old-space-size=8192
RUN npm install && npm install typescript -g
RUN tsc
RUN mkdir -p /src/app/keys
RUN npm run generate-keys
ENTRYPOINT [ "sh","/src/app/entrypoint.sh" ]
