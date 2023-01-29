import express from "express";
import dotenv from "dotenv";
import { router } from "./routers/routers.js";

// instance of express
const app = express();

// configs
app.use(express.json());
app.use(router);
dotenv.config();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
