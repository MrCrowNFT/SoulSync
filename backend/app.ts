import express from "express";
import cors from "cors";
import authRouter from "./routers/auth.routes.ts";
import chatAIRouter from "./routers/chat.routes.ts";
import moodRouter from "./routers/mood_tracking.routes.ts";
import preferencesRouter from "./routers/preferences.routes.ts";
import userRouter from "./routers/user.routes.ts";

const app = express();

app.use(express.json());
app.use(cors()); //Allow all origins for now

app.use("/auth", authRouter);
app.use("/chat", chatAIRouter);
app.use("/mood-entries", moodRouter);
app.use("/preferences", preferencesRouter);
app.use("/users", userRouter);

export default app;
