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
  try {
    const userData = await User.create({
      name: "Kaito",
      age: 26,
      email: "siddiq@gmail.com",
      skills: ["React", "Mongoose"],
      address: {
        street: "New Link Road",
      },
    });

    userData.age = 28;
    await userData.save();

    const userFind = await User.deleteOne({ name: "Kaito" });

    console.log(userFind);
  } catch (e) {
    console.log(e.message);
  }
};

run();
