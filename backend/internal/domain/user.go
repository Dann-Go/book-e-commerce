package domain

import _ "github.com/lib/pq"

type User struct {
	ID           int    `db:"id" json:"id" binding:"omitempty"`
	Name         string `db:"name" json:"name" binding:"omitempty"`
	LastName     string `db:"last_name" json:"lastName"`
	Login        string `db:"name" json:"login" binding:"omitempty"`
	PasswordHash string `db:"password_hash" json:"passwordHash" binding:"omitempty,gte=8"`
}
