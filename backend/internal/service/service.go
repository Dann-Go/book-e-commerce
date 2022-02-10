package service

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/Dann-Go/book-e-commerce/backend/internal/repository"
)

type Authorization interface {
	CreateUser(user *domain.User) (*domain.User, error)
	GenerateToken(username, password string) (string, error)
	GetUserByUsername(username string) (*domain.User, error)
	ParseToken(token string) (int, error)
}

type Books interface {
	CreateBook(book *domain.Book) error
}

type Service struct {
	Authorization
	Books
}

func NewService(r *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(r.Authorization),
	}
}
