package routes

import (
	"ai-task-management-system/backend/controllers"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func SetupAuthRoutes(router *gin.Engine, db *mongo.Database) {
	authController := controllers.AuthController{DB: db}

	router.POST("/register", authController.Register)
	router.POST("/login", authController.Login)
}
