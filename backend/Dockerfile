FROM golang:1.25.4-bookworm as builder

WORKDIR /src

COPY backend/go.mod backend/go.sum ./

RUN go mod download

COPY backend/ .

RUN go build -tags osusergo,netgo -o main ./cmd/bingo

# Run Stage
FROM gcr.io/distroless/static-debian12 AS runner

WORKDIR /app

COPY --from=builder /src/main .

CMD [ "/app/main" ]