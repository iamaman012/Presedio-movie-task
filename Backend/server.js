import express from "express";

import router from "./routes/routes.js";
import { loadMoviesFromFile } from "./controller/controller.js";
import cors from "cors";

const app = express();

app.use(cors());
//
app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});
//
loadMoviesFromFile();
app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Welcome to Movie app");
});
