package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func (h *Handler) createBook(c *gin.Context) {
	id, _ := c.Get("userId")
	c.JSON(http.StatusOK, id)
}

func (h *Handler) getAllBooks(c *gin.Context) {

}

func (h *Handler) getBookById(c *gin.Context) {

}

func (h *Handler) updateBookById(c *gin.Context) {

}

func (h *Handler) DeleteBookById(c *gin.Context) {

}
