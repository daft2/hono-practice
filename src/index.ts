import { Hono } from "hono";
import EasyRoutes from "./domain/easy";

const app = new Hono();

app.route("/easy", EasyRoutes);

export default app;
