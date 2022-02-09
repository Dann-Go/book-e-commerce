package repository

type Authorization interface {
	//Add(user *User) error
	//GetAll() ([]User, error)
	//GetById() (*User, error)
	//Delete(id int) error
	//Update(id int) error
}

type Books interface {
}

type Repository struct {
	Authorization
	Books
}

func NewRepository() *Repository {
	return &Repository{}
}
