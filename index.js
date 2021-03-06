import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
import dbCrud from "./config/db.js";
import crud from "./routes/inde.js";
dotenv.config();
const app = express();
try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));

try {
  await dbCrud.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/post", crud);

app.listen(4000, () => console.log("Server running at port 4000"));
