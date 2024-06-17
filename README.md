# Hono JavaScript Framework Learning Path

## Level 1: Easy

**Task:** Create a Basic REST API

**Objective:** Familiarize yourself with the basic setup and routing in Hono.

### Steps:

1. **Setup the Environment:**
   - Install Node.js and npm if not already installed.
   - Create a new project directory and initialize a Node.js project using `npm init -y`.
   - Install Hono using `npm install hono`.

2. **Create a Simple Server:**
   - Set up a basic Hono server with a few routes (`GET /`, `GET /hello`, `GET /users`).

3. **Implement Routes:**
   - `GET /`: Responds with "Welcome to Hono".
   - `GET /hello`: Responds with "Hello, World!".
   - `GET /users`: Responds with a JSON array of user objects.

**What You'll Learn:**
- Setting up a Hono project.
- Basic routing with Hono.
- Responding with plain text and JSON.

## Level 2: Medium

**Task:** Create a CRUD API for a User Resource

**Objective:** Learn to handle various HTTP methods and manage data.

### Steps:

1. **Expand the Project:**
   - Add routes for creating, reading, updating, and deleting user data.

2. **Implement CRUD Operations:**
   - `POST /users`: Create a new user (provide a JSON body with user details).
   - `GET /users/:id`: Get a specific user by ID.
   - `PUT /users/:id`: Update a user’s details by ID.
   - `DELETE /users/:id`: Delete a user by ID.

3. **Handle Data Storage:**
   - Use an in-memory array to store user data initially.
   - Validate input data and handle errors appropriately.

**What You'll Learn:**
- Handling different HTTP methods (POST, PUT, DELETE).
- Working with URL parameters and request bodies.
- Basic error handling and validation.

## Level 3: Hard

**Task:** Integrate a Database and Add Authentication

**Objective:** Connect your Hono API to a database and secure it with authentication.

### Steps:

1. **Set Up a Database:**
   - Choose a database (e.g., MongoDB, PostgreSQL).
   - Install necessary database driver packages (e.g., `mongoose` for MongoDB, `pg` for PostgreSQL).

2. **Integrate Database with Hono:**
   - Connect to the database in your Hono project.
   - Modify the CRUD operations to interact with the database instead of the in-memory array.

3. **Implement Authentication:**
   - Implement user registration and login routes (`POST /register`, `POST /login`).
   - Use JWT (JSON Web Tokens) for securing endpoints.
   - Protect the CRUD routes with JWT authentication, ensuring that only authenticated users can access them.

**What You'll Learn:**
- Integrating and interacting with a database.
- User authentication and authorization.
- Using JWT for securing APIs.

## Summary of Skills Acquired:

- **Level 1:** Basic server setup, routing, handling different response types.
- **Level 2:** Handling various HTTP methods, URL parameters, request bodies, basic validation and error handling.
- **Level 3:** Database integration, user authentication, JWT security.

By following these tasks, you'll gradually build up your skills and understanding of the Hono framework, progressing from simple routes to a fully functional, secure API connected to a database.


To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000
