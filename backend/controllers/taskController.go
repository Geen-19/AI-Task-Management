package controllers

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"ai-task-management-system/backend/models"
	"ai-task-management-system/backend/services"
)

type TaskController struct {
	AIService services.AIService
}

func (tc *TaskController) CreateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Logic to save the task in the database
	c.JSON(http.StatusCreated, task)
}

func (tc *TaskController) GetTasks(c *gin.Context) {
	// Logic to retrieve tasks from the database
	var tasks []models.Task
	c.JSON(http.StatusOK, tasks)
}

func (tc *TaskController) UpdateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Logic to update the task in the database
	c.JSON(http.StatusOK, task)
}

func (tc *TaskController) DeleteTask(c *gin.Context) {
	taskID := c.Param("id")
	// Logic to delete the task from the database
	c.JSON(http.StatusNoContent, nil)
}