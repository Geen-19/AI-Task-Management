package routes

import (
	"github.com/gin-gonic/gin"
	"ai-task-management-system/backend/controllers"
)

func SetupTaskRoutes(router *gin.Engine) {
	taskController := controllers.TaskController{}

	router.POST("/tasks", taskController.CreateTask)
	router.GET("/tasks", taskController.GetTasks)
	router.PUT("/tasks/:id", taskController.UpdateTask)
	router.DELETE("/tasks/:id", taskController.DeleteTask)
}