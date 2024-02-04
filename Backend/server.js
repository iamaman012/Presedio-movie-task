import express from "express";

import router from "./routes/routes.js";
import { loadMoviesFromFile } from "./controller/controller.js";
import cors from "cors";
import path from 'path';
// import dotenv from "dotenv";
const app = express();

// dotenv.config();
app.use(cors());
const buildPath = path.join(__dirname, 'build');

// Serve static files from the build folder
app.use(express.static(buildPath));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// app.get("/", (req, res) => {
//   res.send("<h1> Welcome to Movie App");
// });

loadMoviesFromFile();
app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Welcome to Movie app");
});
