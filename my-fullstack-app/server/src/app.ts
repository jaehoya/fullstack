import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(
   cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
   })
);
app.use(express.json());


app.use("/api", routes); // http://localhost:3000/api 로 요청 받을 수 있음





export default app;
