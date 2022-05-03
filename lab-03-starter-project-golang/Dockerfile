FROM golang:alpine AS build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o build/fizzbuzz

FROM gcr.io/distroless/static-debian11

COPY --from=build /app/templates/index.html /templates/index.html

COPY --from=build /app/build/fizzbuzz ./fizzbuzz

CMD ["./fizzbuzz", "serve"]