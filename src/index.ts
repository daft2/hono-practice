import { Hono } from "hono";
import EasyRoutes from "./domain/easy";
import MediumRoutes from "./domain/medium";

const app = new Hono();

app.route("/easy", EasyRoutes);
app.route("/medium", MediumRoutes);

export default app;
