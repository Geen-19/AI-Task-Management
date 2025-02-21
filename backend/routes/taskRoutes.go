package routes

import (
	"ai-task-management-system/backend/controllers"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func SetupTaskRoutes(router *gin.Engine, db *mongo.Database) {
	taskController := controllers.TaskController{DB: db}

	router.POST("/tasks", taskController.CreateTask)
	router.GET("/tasks", taskController.GetTasks)
	router.PUT("/tasks/:id", taskController.UpdateTask)
	router.DELETE("/tasks/:id", taskController.DeleteTask)
}
