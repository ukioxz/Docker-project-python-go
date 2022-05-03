FROM golang:alpine AS build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o build/fizzbuzz

FROM scratch

COPY --from=build /app/build/fizzbuzz ./fizzbuzz

CMD ["./build/fizzbuzz", "serve"]