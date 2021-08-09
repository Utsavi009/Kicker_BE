require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3001;
const cors = require("cors");
const connectDB = require("./DB/Connection");
const playerRouter = require("./routes/playerRouter");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* app.get("/", (req, res) => {
  res.send("Welcome to Kicker Api");
});
 */

connectDB();
app.use(playerRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
