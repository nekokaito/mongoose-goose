const { default: mongoose } = require("mongoose");

require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASS;

const User = require("./schema");

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.vrlyepl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("connected"))
  .catch((err) => console.error(err));

const run = async () => {
  const userData = new User({
    name: "Kaito",
    age: 25,
    email: "siddiq@gmail.com",
  });

  await userData.save().then(() => console.log("Data Saved"));
};

run();
