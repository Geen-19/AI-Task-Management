# AI Task Management System - Backend

## Overview
This backend service is built using Golang with the Gin/Fiber framework. It provides a RESTful API for managing tasks in a real-time task management system. The API supports user authentication, task creation, assignment, tracking, and AI-powered task suggestions.

## Features
- User authentication using JWT
- Task creation, assignment, and tracking
- AI-powered task suggestions using OpenAI/Gemini API
- Real-time updates using WebSockets

## Project Structure
```
backend/
├── controllers/        # Contains controllers for handling requests
├── models/             # Contains data models
├── routes/             # Contains route definitions
├── services/           # Contains services for external API interactions
├── main.go             # Entry point of the application
├── go.mod              # Module definition
├── go.sum              # Dependency checksums
└── README.md           # Documentation for the backend
```

## Setup Instructions

### Prerequisites
- Go 1.16 or later
- PostgreSQL or MongoDB (depending on your choice of database)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ai-task-management-system/backend
   ```

2. Install dependencies:
   ```
   go mod tidy
   ```

3. Set up your database and update the connection settings in the code.

### Running the Application
To run the backend server, use the following command:
```
go run main.go
```

The server will start on `http://localhost:8080` by default.

## API Usage
Refer to the individual route files in the `routes` directory for detailed API endpoint documentation.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.