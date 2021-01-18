const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect to db
mongoose.connect(
  process.env.MONGO_DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db!")
);

//Import auth route
const authRoute = require("./routes/auth");

//body parese middleware
app.use(express.json());
//Route middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("Server Up and Running...");
});
