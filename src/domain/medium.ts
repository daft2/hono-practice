import { Hono } from "hono";
import { User, Users, createUserBodySchema } from "../list/users";
import { zValidator } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";

const app = new Hono();

app.post("/users", zValidator("json", createUserBodySchema), async (c) => {
  const { name, email, password } = await c.req.valid("json");

  const newUser: User = {
    name,
    email,
    password,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    Users.push(newUser);
  } catch (error) {
    throw new HTTPException(401, { message: "Cannot insert new user data." });
  }

  return c.json({
    success: true,
    user: newUser,
  });
});

export default app;
