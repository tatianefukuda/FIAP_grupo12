FROM node:13.2.0

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE $PORT

COPY . /FIAP_grupo12
WORKDIR /FIAP_grupo12

RUN npm install
RUN npm install nodemon -g

CMD nodemon bin/www
