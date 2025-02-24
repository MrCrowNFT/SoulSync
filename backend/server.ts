import app from "./app";
import dotenv from "dotenv";
import connectDb from "./config/database";

dotenv.config();
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  connectDb();
  console.log("Server started at http://localhost:" + PORT);
});
