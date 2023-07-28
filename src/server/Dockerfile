FROM golang:alpine as builder

WORKDIR /opt/mockup/server
COPY . .

RUN go env -w GO111MODULE=on
RUN go env -w GOPROXY=https://goproxy.cn,direct
RUN go env -w CGO_ENABLED=0
RUN go env
RUN go mod tidy
RUN go build -o server .
EXPOSE 8888

ENTRYPOINT ./server -c config.docker.yaml

