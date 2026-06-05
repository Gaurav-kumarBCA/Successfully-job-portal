require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const {Server} = require("socket.io");

const initDB = require("./src/config/initTableDB");
const authRoutes = require("./src/routers/auth.route");
const path = require("path")
const admin=require("./src/routers/admin/index");
const recruiter= require("./src/routers/recruiter/index");
const user=require("./src/routers/users/index");
const publicJob=require("./src/routers/public.route");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./src/middleware/auth.middleware");
const recruiterMiddleware = require("./src/middleware/recruiter.middleware");
const adminMiddleware = require("./src/middleware/admin.middleware");
const usermiddleware=require("./src/middleware/user.middleware")
const publicrecruiter= require("./src/routers/recruiter/loginrecruiter.router")


const app = express();
const server=http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"]
  }
});

global.io = io;

io.on("connection",(socket)=>{
  // console.log("User connected:",socket.id);
  socket.on("disconnect",()=>{
    console.log("Disconnect");
  })
});

const port = 5000;

app.use(cors(
  {
   origin: "http://localhost:5173",
   credentials: true
}
));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/public",publicJob);
app.use("/login",publicrecruiter)

app.use("/uploads", express.static(path.join(__dirname,"src/uploads")));

app.use(authMiddleware)


app.use("/recruiter",recruiterMiddleware,recruiter);
app.use("/admin",adminMiddleware,admin);
app.use("/user",usermiddleware,user)

app.get("/", (req, res) => {
  res.send("Hello Successful Job Portal");
});

const startServer = async () => {
  try {
    await initDB();
    server.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (err) {
    console.error("Server start error:", err);
  }
};

startServer();