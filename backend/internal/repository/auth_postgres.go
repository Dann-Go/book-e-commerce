package repository

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/jmoiron/sqlx"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user *domain.User) error {
	query := `INSERT INTO users(name, last_name, login, password_hash) VALUES ($1, $2, $3, $4);`
	_, err := r.db.Exec(query, user.Name, user.LastName, user.Login, user.PasswordHash)
	if err != nil {
		return err
	}
	return err
}

func (r *AuthPostgres) GetUser(username string) (*domain.User, error) {
	user := domain.User{}
	query := `SELECT * FROM users WHERE login=$1 `
	err := r.db.Get(&user, query, username)
	return &user, err
}

func (r *AuthPostgres) GetUsers() ([]domain.User, error) {
	return nil, nil
}
