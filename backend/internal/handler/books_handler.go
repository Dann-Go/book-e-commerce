package handler

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain/responses"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func (h *Handler) createBook(c *gin.Context) {
	json := domain.Book{}
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	userId, _ := c.Get("userId")

	err := h.services.CreateBook(&json, userId.(int))
	if err != nil {
		c.JSON(http.StatusInternalServerError, responses.NewServerInternalError(err.Error()))
		return
	}

	c.JSON(http.StatusOK, responses.NewServerGoodResponse("book was added"))
}

func (h *Handler) getAllBooks(c *gin.Context) {

	books, err := h.services.GetAllBooks()
	if err != nil {
		c.JSON(http.StatusInternalServerError, responses.NewServerInternalError(err.Error()))
		return
	}

	c.JSON(http.StatusOK, books)
}

func (h *Handler) getBookByUserId(c *gin.Context) {
	userId, _ := c.Get("userId")

	books, err := h.services.GetAllBooksByOwnerId(userId.(int))
	if err != nil {
		c.JSON(http.StatusInternalServerError, responses.NewServerInternalError(err.Error()))
		return
	}

	c.JSON(http.StatusOK, books)
}

func (h *Handler) getBookById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	book, err := h.services.GetBookById(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	c.JSON(http.StatusOK, book)
}

func (h *Handler) updateBookById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	json := domain.Book{}
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	if err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	err = h.services.UpdateBookById(&json, id)
	if err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	c.JSON(http.StatusOK, responses.NewServerGoodResponse("Books was updated"))
}

func (h *Handler) DeleteBookById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	err = h.services.DeleteBookById(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, responses.NewServerBadRequestError(err.Error()))
		return
	}
	c.JSON(http.StatusOK, responses.NewServerGoodResponse("Books was deleted"))
}
