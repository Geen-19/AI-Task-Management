package models

import (
	"time"

	"gorm.io/gorm"
)

type Task struct {
	ID          string `json:"id" gorm:"primaryKey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	AssignedTo  string `json:"assigned_to"`

	Status    string    `json:"status"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (t *Task) CreateTask(db *gorm.DB) error {
	result := db.Create(t)
	return result.Error
}

func GetTasks(db *gorm.DB) ([]Task, error) {
	var tasks []Task
	result := db.Find(&tasks)
	return tasks, result.Error
}

func (t *Task) UpdateTask(db *gorm.DB) error {
	result := db.Save(t)
	return result.Error
}

func DeleteTask(db *gorm.DB, id string) error {
	result := db.Delete(&Task{}, id)
	return result.Error
}
