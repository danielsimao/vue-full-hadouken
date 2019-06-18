const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Mongodb Connected..."))
  .catch(err => console.log(err));

app.use("/api/posts", require("./routes/api/posts"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on porto ${port}`));
