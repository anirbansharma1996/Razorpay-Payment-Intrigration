const mongoose = require("mongoose");
const connect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected with ${connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connect;
