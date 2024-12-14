# MERN Backend Quickstart

This is a boilerplate **MERN backend** (MongoDB, Express, Node.js) project. It includes a modular user model that separates `auth_user` (authentication data) and `app_user` (business logic-specific data). This design enables flexibility for different apps where core user authentication logic remains consistent, but app-specific user data can vary.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Endpoints](#endpoints)
6. [User Schema Design](#user-schema-design)
7. [Scripts](#scripts)
8. [License](#license)

## Features
- **Modular User Model**: Separation of authentication (`auth_user`) and app-specific user data (`app_user`).
- **Password Encryption**: Secure password hashing with `bcryptjs`.
- **JWT Authentication**: Token-based authentication using `jsonwebtoken`.
- **Validation**: Input validation for email, phone number, and password using `validator`.
- **Scalable Architecture**: Clean folder structure for controllers, routes, models, and services.

## Project Structure
```
|-- controllers/
|   |-- authController.js
|   |-- helloWorldController.js
|
|-- db/
|   |-- connect.js
|
|-- errors/
|
|-- middleware/
|   |-- authMiddleware.js
|   |-- error-handler.js
|   |-- not-found.js
|
|-- model/
|   |-- User.js
|
|-- routes/
|   |-- authRoutes.js
|   |-- helloWorldRouter.js
|
|-- services/
|   |-- authService.js
|
|-- methods.js
|-- server.js
|-- package.json
|-- yarn.lock
|-- .gitignore
```

### Key Folders
- **controllers/**: Contains business logic for authentication and other API endpoints.
- **routes/**: API route definitions.
- **model/**: Mongoose schemas for MongoDB collections.
- **middleware/**: Custom middleware (e.g., error handling, JWT authentication).
- **services/**: Helper services such as JWT handling and authentication logic.
- **db/**: Database connection configuration.

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v14+)
- MongoDB
- Yarn (optional, you can use npm instead)

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   # OR
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   JWT_LIFETIME=1d
   ```

4. **Run the server**:
   ```bash
   yarn start
   # OR
   npm start
   ```
   The server will start on `http://localhost:5000`.

## Endpoints

### Authentication Endpoints
| Method | Route            | Description          |
|--------|------------------|----------------------|
| POST   | `/api/v1/auth/register` | Register a new user   |
| POST   | `/api/v1/auth/login`    | Log in a user         |

### Hello World Example
| Method | Route              | Description          |
|--------|--------------------|----------------------|
| GET    | `/api/v1/hello`    | Test route for setup |

## User Schema Design

### Overview
The `User` model consists of two embedded sub-schemas:
- **auth_user**: Stores authentication data, including username, email, password, and phone number.
- **app_user**: A flexible schema that can be customized for different app-specific fields.

### auth_user Schema
| Field          | Type     | Validation                   |
|----------------|----------|------------------------------|
| `username`     | String   | Required, min 3, max 20      |
| `email`        | String   | Required, unique, valid email|
| `phone_number` | String   | Optional, valid format       |
| `password`     | String   | Required, min 6 characters   |

### Password Hashing
Passwords are hashed using `bcryptjs` before saving to the database.

### JWT Generation
A JWT token is created for the user upon login or registration using the `jsonwebtoken` library.

## Scripts
- `yarn start` / `npm start`: Start the development server.
- `yarn dev` / `npm run dev`: Start the server with **nodemon** for live updates.


---

Feel free to customize the `app_user` schema to meet the specific needs of your application!

