const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const { notFound, errorMessage } = require("./middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to hello node test" });
});

app.use("/api/user", require("./routes/userRoute"));

connectDB();

app.use(errorMessage);
app.use(notFound);

let PORT = 4000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold
  );
});
