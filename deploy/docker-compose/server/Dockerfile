

FROM alpine:latest

LABEL MAINTAINER="SliverHorn@sliver_horn@qq.com"

WORKDIR /mockup/server

COPY . .


EXPOSE 8888
ENTRYPOINT ./server -c config.yaml
