const connectDB = require("./db/connect");
const express = require("express");
const app = express();
require("dotenv").config();
const task = require("./routes/task");

// middleware

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
  

app.use(express.json());

app.use("/api/v1/task",  task);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`running on localhost ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
