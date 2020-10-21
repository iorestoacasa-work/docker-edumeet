FROM node:10-slim

# Args
ARG BASEDIR=/opt
ARG EDUMEET=edumeet
ARG NODE_ENV=production
ARG SERVER_DEBUG=''
ARG BRANCH=master
ARG REACT_APP_DEBUG=''

RUN apt update && apt install -y git bash build-essential python

# Checkout code
RUN git clone --single-branch --branch ${BRANCH} https://github.com/befair/${EDUMEET}.git ${BASEDIR}/${EDUMEET}

# Install server dep
WORKDIR ${BASEDIR}/${EDUMEET}/server
RUN npm install
RUN npm install logstash-client

# Install client dep
WORKDIR ${BASEDIR}/${EDUMEET}/app
RUN npm install

# Set app in producion mode/minified/.
ENV NODE_ENV ${NODE_ENV}

# Workaround for the next npm run build => rm -rf public dir even if it does not exists.
# TODO: Fix it smarter
RUN mkdir -p ${BASEDIR}/${EDUMEET}/server/public

ENV REACT_APP_DEBUG=${REACT_APP_DEBUG}

# Build client side app
RUN npm run build

# Run server
EXPOSE 80 443 
EXPOSE 40000-49999/udp
ENV DEBUG ${SERVER_DEBUG}
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
