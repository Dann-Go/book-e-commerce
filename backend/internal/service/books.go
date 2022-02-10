package service

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/Dann-Go/book-e-commerce/backend/internal/repository"
)

type BooksService struct {
	repo repository.Books
}

func (b BooksService) CreateBook(book *domain.Book, userId int) error {
	return b.repo.CreateBook(book, userId)
}

func (b BooksService) GetAllBooks() ([]domain.Book, error) {
	return b.repo.GetAllBooks()
}

func (b BooksService) GetAllBooksByOwnerId(id int) ([]domain.Book, error) {
	return b.repo.GetAllBooksByOwnerId(id)
}

func (b BooksService) GetBookById(id int) (*domain.Book, error) {
	return b.repo.GetBookById(id)
}

func (b BooksService) UpdateBookById(book *domain.Book, id int) error {
	return b.repo.UpdateBookById(book, id)
}

func (b BooksService) DeleteBookById(id int) error {
	return b.repo.DeleteBookById(id)
}

func NewBooksService(repo repository.Books) *BooksService {
	return &BooksService{repo: repo}
}
