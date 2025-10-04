const { default: mongoose } = require("mongoose");

require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASS;

console.log("Hello Mongoose hi");

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.vrlyepl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
