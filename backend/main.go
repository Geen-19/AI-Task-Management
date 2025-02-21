package main

import (
    "github.com/gin-gonic/gin"
    "github.com/joho/godotenv"
    "log"
    "os"
    "ai-task-management-system/backend/routes"
)

func main() {
    // Load environment variables from .env file
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    // Initialize Gin router
    router := gin.Default()

    // Set up routes
    routes.SetupTaskRoutes(router)

    // Start the server
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080" // Default port
    }
    router.Run(":" + port)
}