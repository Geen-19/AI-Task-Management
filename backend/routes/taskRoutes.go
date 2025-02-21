package routes

import (
	"ai-task-management-system/backend/controllers"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func SetupTaskRoutes(router *gin.Engine, db *mongo.Database) {
	taskController := controllers.TaskController{DB: db}
	authController := controllers.AuthController{DB: db}

	authorized := router.Group("/")
	authorized.Use(authController.Authenticate)
	{
		authorized.POST("/tasks", taskController.CreateTask)
		authorized.GET("/tasks", taskController.GetTasks)
		authorized.PUT("/tasks/:id", taskController.UpdateTask)
		authorized.DELETE("/tasks/:id", taskController.DeleteTask)
	}
}
