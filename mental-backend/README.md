# MentalSynch Backend

The backend server for the MentalSynch application, providing RESTful API endpoints, authentication, and session management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [API Documentation](#api-documentation)
- [Security Features](#security-features)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The MentalSynch backend is built with Node.js and Express. It provides the backend services needed for the MentalSynch platform, including user authentication, chatbot interactions, and physiotherapy session management.

## Features

- **User Authentication**: Secure login, registration, and JWT-based authentication.
- **Chatbot Management**: Handles chatbot interactions and stores chat sessions.
- **Physiotherapy Session Management**: Manages and stores physiotherapy sessions.
- **AI Integration**: Interfaces with AI services for chatbot functionality.
- **VR Integration**: Interfaces with VR services for virtual physiotherapy sessions.
- **Security**: Includes features like rate limiting, input sanitization, and secure headers.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (v4.x or later)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/mental-backend.git
   cd mental-backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mentalSynch
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server**

   For development:

   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

## Directory Structure

The project follows a modular structure to separate concerns and enhance maintainability. Here is an overview of the directory structure:

```
mental-backend/
├── config/
│   ├── config.js
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── chatController.js
│   └── physioController.js
├── models/
│   ├── User.js
│   ├── ChatSession.js
│   ├── PhysioSession.js
│   └── localModel.js
├── routes/
│   ├── authRoutes.js
│   ├── chatRoutes.js
│   └── physioRoutes.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── services/
│   ├── aiService.js
│   ├── vrService.js
│   └── userService.js
├── utils/
│   ├── logger.js
│   └── validator.js
├── .env
├── app.js
├── package.json
└── README.md
```

- **`config/`**: Contains configuration files.
  - `config.js`: General configuration settings.
  - `database.js`: Database configuration and connection setup.

- **`controllers/`**: Request handlers for different routes.
  - `authController.js`: Handles authentication-related requests.
  - `chatController.js`: Manages chatbot interactions.
  - `physioController.js`: Manages physiotherapy sessions.

- **`models/`**: Defines database schemas.
  - `User.js`: User schema and model.
  - `ChatSession.js`: Chat session schema and model.
  - `PhysioSession.js`: Physiotherapy session schema and model.
  - `localModel.js`: Schema for local pre-trained models.

- **`routes/`**: Defines API routes.
  - `authRoutes.js`: Authentication-related routes.
  - `chatRoutes.js`: Routes for chatbot interactions.
  - `physioRoutes.js`: Routes for physiotherapy sessions.

- **`middleware/`**: Contains middleware functions.
  - `authMiddleware.js`: Middleware for authentication checks.
  - `errorMiddleware.js`: Middleware for error handling.

- **`services/`**: Contains business logic and integrations.
  - `aiService.js`: AI functionality and interactions.
  - `vrService.js`: VR functionality and interactions.
  - `userService.js`: User-related business logic.

- **`utils/`**: Utility functions and helpers.
  - `logger.js`: Logging utility for the application.
  - `validator.js`: Validation functions for requests.

- **Root Files**
  - `.env`: Environment variables for configuration.
  - `app.js`: Main application file that sets up and runs the server.
  - `package.json`: Project dependencies and scripts.
  - `README.md`: Documentation for the backend.

## API Documentation

Detailed API documentation can be found in the `docs/` directory (create this directory if needed) or can be generated using tools like Swagger or Postman.

## Security Features

- **Rate Limiting**: Prevents abuse by limiting the number of requests from a single IP.
- **Input Sanitization**: Prevents injection attacks by sanitizing user input.
- **Secure Headers**: Adds security-related headers to HTTP responses using Helmet.
- **JWT Authentication**: Secures API endpoints with JSON Web Tokens.

## Testing

1. **Unit Tests**

   Run unit tests using:

   ```bash
   npm test
   ```

2. **Integration Tests**

   Ensure integration tests are set up and run them similarly.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to the repository.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
```

### Key Sections:

- **Directory Structure**: Provides a detailed breakdown of the project’s directory and files.
- **Getting Started**: Instructions for setting up and running the backend server.
- **API Documentation**: Placeholder for API documentation.
- **Security Features**: Details on implemented security measures.
- **Testing**: Instructions for running tests.
- **Contributing**: Guidelines for contributing to the project.
- **License**: Licensing information.

