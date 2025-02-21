# AI-Powered Task Management System

This project is an AI-powered task management system designed to help users create, assign, and track tasks efficiently. It utilizes a backend built with Golang (Gin/Fiber) and a frontend developed with TypeScript (Next.js + Tailwind CSS). The system also incorporates AI capabilities for task suggestions and breakdowns.

## Features

- User authentication with JWT
- Task creation, assignment, and tracking
- AI-powered task suggestions using OpenAI/Gemini API
- Real-time updates via WebSockets
- Responsive and modern UI with Tailwind CSS

## Project Structure

```
ai-task-management-system
├── backend                # Backend application
│   ├── controllers        # Controllers for handling requests
│   ├── models             # Data models
│   ├── routes             # API routes
│   ├── services           # Services for business logic
│   ├── main.go            # Entry point for the backend
│   ├── go.mod             # Go module definition
│   └── README.md          # Backend documentation
├── frontend               # Frontend application
│   ├── components         # React components
│   ├── pages              # Next.js pages
│   ├── styles             # CSS styles
│   ├── public             # Static assets
│   ├── package.json       # Frontend dependencies
│   ├── tsconfig.json      # TypeScript configuration
│   └── README.md          # Frontend documentation
└── README.md              # Overall project documentation
```

## Getting Started

### Prerequisites

- Go (1.16 or later)
- Node.js (14 or later)
- PostgreSQL or MongoDB (depending on your choice)

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   go mod tidy
   ```

3. Run the backend server:
   ```
   go run main.go
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the frontend application:
   ```
   npm run dev
   ```

## API Documentation

Refer to the `backend/README.md` for detailed API usage and endpoints.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.