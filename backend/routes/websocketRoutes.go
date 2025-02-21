package routes

import (
	"ai-task-management-system/backend/controllers"
	"github.com/gin-gonic/gin"
)

func SetupWebSocketRoutes(router *gin.Engine) {
	websocketController := controllers.WebSocketController{}

	router.GET("/ws", websocketController.HandleConnections)
}
