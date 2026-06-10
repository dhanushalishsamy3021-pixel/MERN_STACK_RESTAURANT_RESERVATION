import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import authRouter from "./routes/authRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/order", orderRouter);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Flavour Restaurant API is running",
  });
});

app.use(errorMiddleware);

export default app;
