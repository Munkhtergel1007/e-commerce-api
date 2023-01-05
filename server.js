const express = require("express");
const dotenv = require("dotenv");
const logger = require("./src/middleware/logger");
const morgan = require("morgan");
const bp = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
connectDB();

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

const app = express();
app.use(cors(corsOpts));

const route = require("./src/routes/route");
const errorHandler = require("./src/middleware/error");

// Body parser
app.use(express.json());
app.use(logger);
app.use(morgan("dev"));
app.use("/api/v1", route);
app.use(errorHandler);

app.use(bp.json());

const server = app.listen(
  process.env.PORT,
  console.log("🚀 Express server start port: " + process.env.PORT)
);

process.on("unhandleRejection", (err) => {
  console.log(`Алдаа гарлаа: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
