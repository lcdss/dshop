FROM ruby:2.6-alpine

LABEL maintainer="Lucas Cândido de Souza Silva <lcssbr@gmail.com>"

RUN apk add build-base postgresql-dev tzdata && \
  adduser -D -u 1000 dshop

USER dshop
