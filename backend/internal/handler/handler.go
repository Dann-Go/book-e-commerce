package handler

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/service"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	services *service.Service
}

func NewHandler(services *service.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	router.Use(h.preflight)
	auth := router.Group("/auth")
	{
		auth.POST("/sign-in", h.signIn)
		auth.POST("/sign-up", h.signUp)
	}

	router.GET("/api/books/g", h.getAllBooks)
	api := router.Group("/api", h.userIdentity)
	{
		books := api.Group("/books")
		{
			books.POST("/p", h.createBook)
			books.GET("/:id", h.getBookById)
			books.PUT("/:id", h.updateBookById)
			books.DELETE("/:id", h.DeleteBookById)
			books.GET("/user-books", h.getBookByUserId)
		}

		orders := api.Group("/orders")
		{
			orders.POST("", h.MakeOrder)
			orders.PUT("/:id", h.UpdateOrder)
		}
	}

	return router
}
