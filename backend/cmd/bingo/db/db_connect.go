package db

type DB interface {
	Connect() (*Connection, error)
}
