package main

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/labstack/echo/v5/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.RequestLogger())
	e.Use(middleware.CORS("https://100.124.48.106"))

	e.GET("/hello", hello)

	if err := e.Start(":1323"); err != nil {
		e.Logger.Error("failed to start server", "error", err)
	}
}

// Handler
func hello(c *echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
