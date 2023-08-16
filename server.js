const express = require("express");
const dotenv = require("dotenv");
const apiRoutes = require("./routers/api.route");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

// connect to DB
connectDB();

const app = express();

app.use(express.json());
// Cookie parser
app.use(cookieParser());
app.use(logger("dev"));

app.use("/api/v1", apiRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
