import express from "express";
import { router } from "./Routes/router.js";
import { connectdb } from "./Config/db.js";
import { configDotenv } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

configDotenv();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", router);

connectdb().then(() => {
  app.listen(3000, () => {
    console.log("Server is Running");
  });
});
