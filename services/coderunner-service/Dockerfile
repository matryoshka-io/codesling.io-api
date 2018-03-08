FROM node:alpine

RUN mkdir -p /usr/src/app
ADD package.json yarn.* /tmp/

RUN cd /tmp && yarn
RUN cd /usr/src/app && ln -s /tmp/node_modules

ADD . /usr/src/app/

EXPOSE 4000
WORKDIR /usr/src/app