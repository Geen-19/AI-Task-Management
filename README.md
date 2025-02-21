# AI Task Management System

This is an AI Task Management System built with a React frontend and a Go backend. The system allows users to create, manage, and update tasks with various statuses and priorities.

## Deployment 
 - Frontend - https://lustrous-khapse-edb906.netlify.app/
 - Backend - https://ai-task-management-3.onrender.com

## Features

- User authentication (registration and login)
- Create, update, and delete tasks
- Assign tasks to users
- Set task priorities and due dates
- Filter and search tasks by status and keywords

## Technologies Used

- Frontend: React, Axios, Tailwind CSS
- Backend: Go (Gin framework), MongoDB
- Authentication: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js and npm
- Go
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ai-task-management-system.git
cd ai-task-management-system
```

## Install Frontend Dependencies
 - cd frontend
 - npm install

## Install backend dependencies:
 - cd ../backend
 - go get -u ./...

## Configuration
### Create a .env file in the backend directory with the following environment      variables:

MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=task_management
JWT_SECRET=your_jwt_secret
PORT=8080

## Running the Application

 - Start the MongoDB server
   - mongod
 - Start the backend server 
   - cd backend
   - go run main.go
 - Start the frontend development server
   - cd ../frontend
   - npm start

## Frontend 
src/components/task/taskForm.jsx: Component for creating new tasks.
src/components/task/taskList.jsx: Component for displaying the list of tasks.
src/components/task/taskCard.jsx: Component for displaying individual task details.
src/components/auth/login.jsx: Component for user login.
src/components/auth/register.jsx: Component for user registration.
src/components/task/dashboard.jsx: Main dashboard component.

## Backend

main.go: Entry point for the backend server.
controllers/authController.go: Controller for user authentication.
controllers/taskController.go: Controller for task management.
models/user.go: User model.
models/task.go: Task model.
routes/routes.go: Route definitions.

## API Endpoints 

POST /register: Register a new user.
POST /login: Login a user and return a JWT token.

## Tasks
GET /tasks: Get all tasks.
POST /tasks: Create a new task.
PUT /tasks/:id: Update a task.
DELETE /tasks/:id: Delete a task.

## Contributing 

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes

## License 

This project is licensed under the MIT License. See the LICENSE file for details.