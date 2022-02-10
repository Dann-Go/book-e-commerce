package repository

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user *domain.User) error
	GetUser(username string) (*domain.User, error)
}

type Books interface {
}

type Repository struct {
	Authorization
	Books
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
	}
}