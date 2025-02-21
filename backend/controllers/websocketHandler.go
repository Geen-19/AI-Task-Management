package controllers

import (
	"ai-task-management-system/backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type WebSocketController struct {
	AIClient *services.OpenAIClient
}

func (wsc *WebSocketController) HandleConnections(c *gin.Context) {
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		http.Error(c.Writer, "Failed to upgrade to WebSocket", http.StatusInternalServerError)
		return
	}
	defer conn.Close()

	for {
		_, message, err := conn.ReadMessage()
		if err != nil {
			break
		}

		// Handle incoming messages and send responses
		suggestions, err := wsc.AIClient.GetTaskSuggestions(string(message))
		if err != nil {
			conn.WriteMessage(websocket.TextMessage, []byte("Error: "+err.Error()))
			continue
		}

		conn.WriteMessage(websocket.TextMessage, []byte(suggestions))
	}
}
