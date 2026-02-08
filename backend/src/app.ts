import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res: Response) => {
    res.status(200).json({
        status: "OK",
        environment: process.env.NODE_ENV,
        message: "Server is healthy"
    });
});

export default app;