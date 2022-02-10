package repository

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/jmoiron/sqlx"
)

type BooksRepository struct {
	db *sqlx.DB
}

func (b BooksRepository) CreateBook(book *domain.Book, userId int) error {
	query := `INSERT INTO books(title, authors, year, price, amount, owner_id) VALUES ($1,$2,$3,$4,$5,$6)`
	_, err := b.db.Exec(query, book.Title, book.Authors, book.Year, book.Price, book.Amount, userId)
	return err
}

func (b BooksRepository) GetAllBooks() ([]domain.Book, error) {
	books := []domain.Book{}
	err := b.db.Select(&books, `SELECT * FROM books`)
	if err != nil {
		return nil, err
	}

	return books, err
}

func (b BooksRepository) GetAllBooksByOwnerId(id int) ([]domain.Book, error) {
	books := []domain.Book{}
	err := b.db.Select(&books, `SELECT * FROM books where owner_id=$1`, id)
	if err != nil {
		return nil, err
	}

	return books, err
}

func (b BooksRepository) GetBookById(id int) (*domain.Book, error) {
	book := domain.Book{}
	err := b.db.Get(&book, `SELECT * FROM books where id=$1`, id)
	if err != nil {
		return nil, err
	}

	return &book, err
}

func (b BooksRepository) DeleteBookById(id int) error {
	query := `DELETE from books where id = $1;`
	_, err := b.db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}

func (b BooksRepository) UpdateBookById(book *domain.Book, id int) error {
	query := `UPDATE books set title = $2, authors =$3, year = $4, price=$5, amount=$6 where id = $1;`
	_, err := b.db.Exec(query, id, book.Title, book.Authors, book.Year, book.Price, book.Amount)
	if err != nil {
		return err
	}
	return nil
}

func NewBooksRepository(db *sqlx.DB) *BooksRepository {
	return &BooksRepository{db: db}
}
