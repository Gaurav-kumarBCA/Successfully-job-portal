// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const ininDB = require("./src/config/initTableDB");
// const authRoutes = require("./src/routers/auth.route");
// const companies = require("./src/routers/recruiter/companies.route")

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// ininDB();

// app.use("/api/auth", authRoutes);
// app.use("/api/companies",companies)

// app.get("/", (req, res) => {
//   res.send("Hello Successful-job-portal");
// });

// app.listen(port, () => {
//   console.log(`🚀 server running on port ${port}`);
// });




require("dotenv").config();
const express = require("express");
const cors = require("cors");

const initDB = require("./src/config/initTableDB");
const authRoutes = require("./src/routers/auth.route");
const companies = require("./src/routers/recruiter/companies.route");
const jobPost =require("./src/routers/recruiter/job.route")

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/companies", companies);
app.use("/api/job",jobPost);

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