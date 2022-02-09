package service

import "github.com/Dann-Go/book-e-commerce/backend/internal/repository"

type Authorization interface {
	//Add(user *User) error
	//GetAll() ([]User, error)
	//GetById() (*User, error)
	//Delete(id int) error
	//Update(id int) error
}

type Books interface {
}

type Service struct {
	Authorization
	Books
}

func NewService(r *repository.Repository) *Service {
	return &Service{}
}
