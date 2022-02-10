package service

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/Dann-Go/book-e-commerce/backend/internal/repository"
)

type Authorization interface {
	CreateUser(user *domain.User) error
	GenerateToken(username, password string) (string, error)
	//GetUsers() ([]domain.User, error)
}

type Books interface {
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
