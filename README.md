# User Management Backend

This is a simple Node.js application for managing a list of users. It provides RESTful endpoints for listing users and adding new users, with all user data stored in memory.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd user-management-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:

```
npm start
```

The application will be running on `http://localhost:3001`.

## API Endpoints

### List Users

- **Endpoint:** `GET /api/users`
- **Description:** Retrieves a list of all users.

### Add User

- **Endpoint:** `POST /api/users`
- **Description:** Adds a new user to the list.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "image": "http://example.com/image.jpg"
  }
  ```

### Delete User

- **Endpoint:** `DELETE /api/users/:id`
- **Description:** Deletes a user by ID.
