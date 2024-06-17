import { Hono } from "hono";

const app = new Hono();

// GET /: Responds with "Welcome to Hono".
app.get("/", (c) => {
  return c.text("Welcome to Hono");
});

// GET /hello: Responds with "Hello, World!".
app.get("/hello", (c) => {
  return c.text("Hello, World!");
});

// GET /users: Responds with a JSON array of user objects.
app.get("/users", (c) => {
  return c.json({
    users: [
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      },
      {
        id: 3,
        name: "User 3",
      },
    ],
  });
});

export default app;
