const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGOO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("db connected");
};

module.exports = connectDB;
