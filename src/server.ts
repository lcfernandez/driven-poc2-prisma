import express from "express";
import dotenv from "dotenv";

// instance of express
const app = express();

// configs
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
