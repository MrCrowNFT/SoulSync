import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); //Allow all origins for now

export default app;