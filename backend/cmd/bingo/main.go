package main

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/labstack/echo/v5/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.RequestLogger())
	e.Use(middleware.CORS("https://shirurona.f5.si"))

	hub := newHub()
	go hub.run()

	api := e.Group("/bingo/api")
	api.GET("/", func(c *echo.Context) error {
		return c.File("home.html")
	})
	api.GET("/ws", func(c *echo.Context) error {
		return serveWs(hub, c.Response(), c.Request())
	})
	api.GET("/hello", hello)

	if err := e.Start(":1323"); err != nil {
		e.Logger.Error("failed to start server", "error", err)
	}
}

func hello(c *echo.Context) error {
	return c.JSON(http.StatusOK, "Hello, World!")
}
