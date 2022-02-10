package repository

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user *domain.User) (*domain.User, error)
	GetUser(username string) (*domain.User, error)
}

type Books interface {
	CreateBook(book *domain.Book, userId int) error
	GetAllBooks() ([]domain.Book, error)
	GetAllBooksByOwnerId(id int) ([]domain.Book, error)
	UpdateBookById(book *domain.Book, id int) error
	GetBookById(id int) (*domain.Book, error)
	DeleteBookById(id int) error
}

type Order interface {
	CreateOrder(order *domain.Order, userId int) error
	UpdateOrderById(order *domain.Order, id int) error
}

type Repository struct {
	Authorization
	Books
	Order
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		Books:         NewBooksRepository(db),
		Order:         NewOrderRepository(db),
	}
}
