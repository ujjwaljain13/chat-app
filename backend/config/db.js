const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
};
module.exports = connectDB;
