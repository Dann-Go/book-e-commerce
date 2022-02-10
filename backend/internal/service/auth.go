package service

import (
	"errors"
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/Dann-Go/book-e-commerce/backend/internal/repository"
	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
	"time"
)

const (
	signingKey = "grk#iwoerjn%324lskdfnHsdj3skldf"
	tokenTTL   = 12 * time.Hour
)

type tokenClaims struct {
	jwt.StandardClaims
	UserId int `json:"userId"`
}

type AuthService struct {
	repo repository.Authorization
}

func (s *AuthService) GenerateToken(username, password string) (string, error) {
	user, err := s.repo.GetUser(username)
	if err != nil {
		return "", err
	}
	if isValid := checkPasswordHash(password, user.PasswordHash); !isValid {
		err := errors.New("Wrong Password")
		return "", err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &tokenClaims{
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(tokenTTL).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
		user.ID,
	})

	return token.SignedString([]byte(signingKey))
}

func (s *AuthService) CreateUser(user *domain.User) error {
	user.PasswordHash = hashPassword(user.PasswordHash)

	return s.repo.CreateUser(user)
}

//$2a$14$UiGyRNbt6GMixbo3P6I2J.mz.1TSsYsx24lo.U70p5iH0s3jdW3GW
//func (s *AuthService) GetUsers() ([]domain.User, error) {
//	return s.repo.GetUsers(), nil
//}

func NewAuthService(repo repository.Authorization) *AuthService {
	return &AuthService{repo: repo}
}

func hashPassword(password string) string {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes)
}

func checkPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
