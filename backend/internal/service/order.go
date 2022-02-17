package service

import (
	"github.com/Dann-Go/book-e-commerce/backend/internal/domain"
	"github.com/Dann-Go/book-e-commerce/backend/internal/repository"
)

type OrderService struct {
	repo repository.Order
}

func (o OrderService) CreateOrder(order *domain.Order, userId int) error {
	return o.repo.CreateOrder(order, userId)
}

func (o OrderService) UpdateOrderById(order *domain.Order, id int) error {
	return o.repo.UpdateOrderById(order, id)
}

func NewOrderService(repo repository.Order) *OrderService {
	return &OrderService{repo: repo}
}