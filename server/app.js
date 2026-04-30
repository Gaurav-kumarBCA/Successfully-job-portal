require("dotenv").config();
const express = require("express");
const cors = require("cors");

const initDB = require("./src/config/initTableDB");
const authRoutes = require("./src/routers/auth.route");

const admin=require("./src/routers/admin/index");
const recruiter= require("./src/routers/recruiter/index");
const user=require("./src/routers/users/index");


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.use("/recruiter",recruiter)
app.use("/admin",admin)

app.get("/", (req, res) => {
  res.send("Hello Successful Job Portal");
});

const startServer = async () => {
  try {
    await initDB();
    app.listen(port, () => {
      console.log(`🚀 server running on port ${port}`);
    });
  } catch (err) {
    console.error("Server start error:", err);
  }
};

startServer();