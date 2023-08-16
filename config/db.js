const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);

  console.log(`Mongo db connection is done ${conn.connection.host}`);
};
module.exports = connectDB;
