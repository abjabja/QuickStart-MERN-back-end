import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import helloWorldRouter from "./routes/helloWorldRouter.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundModule from "./middleware/not-found.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/conversation", helloWorldRouter);

app.use(notFoundModule);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
